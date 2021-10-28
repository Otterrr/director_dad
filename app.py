import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env


app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")


mongo = PyMongo(app)


@app.route("/")
@app.route("/get_films")
def get_films():
    films = mongo.db.films.find()
    return render_template("films.html", films=films)


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        # check if username exists in db
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            flash("Username already exists")
            return redirect(url_for("register"))

        register = {
            "username": request.form.get("username").lower(),
            "password": generate_password_hash(request.form.get("password"))
        }
        mongo.db.users.insert_one(register)

        # put the new user into 'session' cookie
        session["user"] = request.form.get("username").lower()
        flash("Registration Successful")
        return redirect(url_for("profile", username=session["user"]))
    return render_template("register.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # check user exists in db
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            # hashed = input
            if check_password_hash(
                    existing_user["password"], request.form.get("password")):
                session["user"] = request.form.get("username").lower()
                flash("Welcome, {}".format(
                            request.form.get("username")))
                return redirect(url_for(
                            "profile", username=session["user"]))
            else:
                # invalid pw
                flash("Incorrect Username and/or Password")
                return redirect(url_for("login"))

        else:
            # username doesn't existing_user
            flash("Incorrect Username and/or Password")
            return redirect(url_for("login"))

    return render_template("login.html")


@app.route("/profile/<username>", methods=["GET", "POST"])
def profile(username):
    # grab username from db
    username = mongo.db.users.find_one(
        {"username": session["user"]})["username"]

    if session["user"]:
        return render_template("profile.html", username=username)

    return redirect(url_for("login"))


@app.route("/logout")
def logout():
    # remove user from cookies
    flash("You have been logged out")
    session.pop("user")
    return redirect(url_for("login"))


@app.route("/new_review", methods=["GET", "POST"])
def new_review():
    if request.method == "POST":
        review = {
            "film_name": request.form.get("film_name"),
            "date_watched": request.form.get("date_watched"),
            "film_rating": request.form.get("film_rating"),
            "review_title": request.form.get("review_title"),
            "film_review": request.form.get("film_review"),
            "created_by": session["user"],
        }
        mongo.db.reviews.insert_one(review)
        flash("Review Successfully Added")
        return redirect(url_for("new_review"))

    films = mongo.db.films.find().sort("film_name", 1)
    ratings = mongo.db.ratings.find().sort("ratings", 1)
    return render_template("new_review.html",
        films=films, ratings=ratings)


@app.route("/edit_review/<review_id>", methods=["GET", "POST"])
def edit_review(review_id):
    if request.method == "POST":
        submit = {
            "film_name": request.form.get("film_name"),
            "date_watched": request.form.get("date_watched"),
            "film_rating": request.form.get("film_rating"),
            "review_title": request.form.get("review_title"),
            "film_review": request.form.get("film_review"),
            "created_by": session["user"],
        }
        mongo.db.reviews.update({"_id": ObjectId(review_id)}, submit)
        flash("Review Successfully Updated")

    review = mongo.db.reviews.find_one({"_id": ObjectId(review_id)})
    ratings = mongo.db.ratings.find().sort("ratings", 1)
    return render_template("edit_review.html", review=review, ratings=ratings)


@app.route("/delete_review/<review_id>")
def delete_review(review_id):
    mongo.db.reviews.remove({"_id": ObjectId(review_id)})
    flash("Review Successfully Deleted")
    return redirect(url_for('get_films'))


@app.route("/manage_films", methods=["GET", "POST"])
def manage_films():
    if request.method == "POST":
        film = {
            "film_name": request.form.get("film_name"),
            "genre_name": request.form.get("genre_name"),
            "release_date": request.form.get("release_date"),
            "film_description": request.form.get("film_description"),
            "age_rating": request.form.get("age_rating"),
            "duration": request.form.get("duration"),
            "film_image": request.form.get("film_image"),
            "created_by": session["user"],
        }
        mongo.db.films.insert_one(film)
        flash("Film Successfully Added")
        return redirect(url_for("manage_films"))

    genres = mongo.db.genres.find().sort("genre_name", 1)
    release_dates = mongo.db.release_dates.find().sort("release_date", 1)
    age_ratings = mongo.db.age_ratings.find().sort("age_ratings", 1)
    return render_template("manage_films.html",
        genres=genres, release_dates=release_dates, age_ratings=age_ratings)


@app.route("/view_films/<film_id>")
def view_films(film_id):
    if request.method == "POST":
        submit = {
            "film_name": request.form.get("film_name"),
            "genre_name": request.form.get("genre_name"),
            "release_date": request.form.get("release_date"),
            "film_description": request.form.get("film_description"),
            "age_rating": request.form.get("age_rating"),
            "duration": request.form.get("duration"),
            "film_image": request.form.get("film_image"),
        }
        mongo.db.films.update({"_id": ObjectId(film_id)}, submit)

    reviews = mongo.db.reviews.find()
    film = mongo.db.films.find_one({"_id": ObjectId(film_id)})
    return render_template("view_films.html", film=film, reviews=reviews)


@app.route("/edit_film/<film_id>", methods=["GET", "POST"])
def edit_film(film_id):
    if request.method == "POST":
        submit = {
            "film_name": request.form.get("film_name"),
            "genre_name": request.form.get("genre_name"),
            "release_date": request.form.get("release_date"),
            "film_description": request.form.get("film_description"),
            "age_rating": request.form.get("age_rating"),
            "duration": request.form.get("duration"),
            "created_by": session["user"]
        }
        mongo.db.films.update({"_id": ObjectId(film_id)}, submit)
        flash("Film Successfully Updated")

    film = mongo.db.films.find_one({"_id": ObjectId(film_id)})
    genres = mongo.db.genres.find().sort("genre_name", 1)
    release_dates = mongo.db.release_dates.find().sort("release_date", 1)
    age_ratings = mongo.db.age_ratings.find().sort("age_rating", 1)
    return render_template("edit_films.html", film=film, genres=genres, release_dates=release_dates, age_ratings=age_ratings)


@app.route("/delete_film/<film_id>")
def delete_film(film_id):
    mongo.db.films.remove({"_id": ObjectId(film_id)})
    flash("Film Successfully Deleted")
    return redirect(url_for("get_films"))


@app.route("/manage_genres")
def manage_genres():
    genres = list(mongo.db.genres.find().sort("genre_name", 1))
    return render_template("genres.html", genres=genres)


@app.route("/add_genre", methods=["GET", "POST"])
def add_genre():
    if request.method == "POST":
        genre = {
            "genre_name": request.form.get("genre_name")
        }
        mongo.db.genres.insert_one(genre)
        flash("New Genre Added")
        return redirect(url_for("manage_genres"))

    return render_template("add_genre.html")


@app.route("/delete_genre/<genre_id>")
def delete_genre(genre_id):
    mongo.db.genres.remove({"_id": ObjectId(genre_id)})
    flash("Genre Successfully Deleted")
    return redirect(url_for("manage_genres"))


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
