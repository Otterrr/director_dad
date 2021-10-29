# DIRECTOR DAD

Welcome to my Backend Development Milestone Project.

In this project I will be creating a fully functioning website, both frontend and backend. This website was inspired by my Dad who in the years from 2019 - 2021 (since retiring) purchased himself an unlimited cinema card and started reviewing all the films he went to see with a score out of 10. I was also inspired by the wonderful IMDB which is a wonderfully designed, gigantic library of films and TV shows.

I decided to created a website where users can sign up, log in, and place their own reviews of films that they have seen either at the cinema or on TV. Users can create their own reviews of existing films, or add their own films that they have seen, submit a review of that film and in doing so allow others to also review that film.

## Table Of Contents

1. [**UX**](#ux)
    - [**Project Goals**](#project-goals)
    - [**User goals**](#user-goals)
    - [**Developer Goals**](#developer-goals)
    - [**User Stories**](#user-stories)
    - [**Design choices**](#design-choices)
    - [**Wireframes**](#wireframes)

2. [**Features**](#Features)
    - [**Main Features**](#main-features)
    - [**Technologies Used**](#technologies-used)
    - [**Testing**](#testing)

3. [**Deployments**](#deployments)

4. [**Credits**](#credits)

5. [**Content**](#content)

6. [**Media**](#media)

7. [**Acknowledgements**](#acknowledgements)

# UX

## Project Goals

The primary goal of Director Dad was to put the reviews that my Dad had made into one place that other users can visit and potentially become interested in seeing those films, as well as a place where users can submit their own reviews of films and new films that my Dad (or "the developer") have not seen, a place to share opinions with each other, which films you MUST see and which to avoid!

#### User Goals

* A place to find out which films to watch and which to avoid.
* A place where users can submit their own reviews and add their own films to the library.
* A simple, intuitive creation system that easily allows users to create, view, edit and delete their reviews/films.
* Simple, smart colour scheme with obvious breaks between content and buttons for going forward and backwards.
* Fun design with creative icons for each input.
* Pictures of films, with their movie posters for visual users to see which films might be good/bad.

#### Developer Goals

* "Hopefully", an ever expanding library of films / TV shows, for all users to come and go, reviewing or finding reviews of current or old films that they are looking to watch or maybe have never heard of.
* A place where the developer or "Director Dad" to find out about other users highly rated films and to share with others their opinions of the films they have seen.

## User Stories

#### As a User, I want:

1. An easy to use library of films that, if I want to just look through films and reviews of films I can do that, but equally if I want to share my opinions, I can easily leave reviews/ add new films to the library too.
2. A website that is easy to move between films & simple to submit or read other reviews.
3. The ability to Create, Read, Update & Delete both reviews and films.
4. A website that users will keep coming back to every time they watch a new film or are looking for something new to watch.

#### As a Developer, I want:

1. A place that I can share my opinions/reviews of films I have seen.
2. A website that is easy to use for myself, where I can submit a new review in under 30s, update old reviews or delete them if I change my mind.
3. The ability to add new films, remove films if I choose to or update them with new pictures or information.
4. As an "Admin" - to be able to add new genres of films where necessary or to remove other peoples films submissions or reviews that I may deem unhelpful or inappropriate.

## Design Choices

This website was styled of off the famour IMDB with their white, grey and black colour scheme with yellow buttons and highlights. I did my best to recreate the website styling as much as possible!

#### Fonts

* No fonts were used, only the default font that is used with materialize. I mainly customised the sizing and weight of the fonts to allow different elements to stand out.

#### Icons

* The Icons I used were taken from font-awesome. I mainly used them for drop-down icons and for the submission forms for films, genres and reviews.

#### Colours 

* As stated above the colour scheme was inspired by IMDB with the monochromatic base plate and a small amount of yellow for highlighting and red for cancel/delete elements. 

#### Styling

* Simple panels for each section of the page. For example on the "view_films" pages, I had the black/grey navbar, a black space below, the grey panel for the movie information, a white panel for the reviews section, a similar end black panel to close off the reviews section then a black and grey footer to close it off. 

#### Background, Images & Audio

* The background was black, similar to the inspired website with the front elements either grey or white to stand out. All images were sources from IMDBs movie posters. No audio was used.

## Wireframes

My wireframes were created using [Balsamiq](https://balsamiq.com/).

As i knew that I wanted my website to look as similar to IMDB as possible my wireframes were based off of one of their generic film pages. Due to my ability limitations I was unable to get videos or as many images, ads, links, interviews and the large amount of media they have associated to each film, so it ended up being a much simpler version in the end.

![Example Film Page](.png)

As stated above, IMDB has so much media associated with each film, the trailers, interviews, screenshots, premier shots, that I am unable to feesible include in my own version. Therefore the final product is alot simpler than that of IMDB.

The films page is quite similar as it was based off of the "task manger" mini project I created before starting my final project.

![Films Library](.png)

# Features 

## Main Features

* Film Library (HOME) - The landing page, why everyone is here, the (soon to be) HUGE library of films! Where users can scroll through the films that "Director Dad" has reviewed, and read the reviews for each of them!

* Nav Bar / Side Bar - I chose to have a minimalistic top nav bar and have most of my navigation in the side bar. This created (in my opinion) a much cleaner looking website when the user is not navigating, as well as a more styling side bar when users are looking to move around the website.

* Search Bar - Using Materializes' autocomplete navbar I was able to create a search bar where users can simply search for one of the films already in the database (added by admin) and by clicking on that film, the user will jump straight to that films unique page.

* Film Pages - Each film in the library can be clicked on which takes you to that films page. Here users can again read up about the films, the age rating, how long it is as well as any associated reviews.

* Login / Register - If users wish to leave reviews or add new films to the library then they need to sign up! All they need is a username and password and they are part of the community, ready to review away.

* New Film / New Review - Registered users can navigate to the side bar and add a new film or review. They just need to film out the form, with information about the film or about their experience with the film. They will also need to fill out all sections of each form as they are all "required".

* Genres / New Genre (ADMIN) - When logged in as the Admin (Director Dad) you can view the genres already added to the website that users can select from when adding new films. The admin has the *power* to add / delete genres as well as all submitted films and reviews by any other user.


# Technologies Used

* HTML 
* CSS
* JS
* [Materialize](https://materializecss.com/
    - Materialize was amazing in creating this project. Their pre-made layouts, css, js initialisation and overall framwork, made customising this website alot of fun.
* [Font Awesome](https://fontawesome.com/)
    - FA used to implement all the icons for improving UX and the website design.
* [Code Institute](https://codeinstitute.net/)
    - Many of the code techniques and lines of code from previous projects created were re-used in this project. Such as how to create functions, for & if loops, linking each page together with url_for()'s and setting up the base plate of the website with importing the correct frameworks. 

# Testing

## Testing the stories from UX section

### As a User, I want:

1. An easy to use library of films that, if I want to just look through films and reviews of films I can do that, but equally if I want to share my opinions, I can easily leave reviews/ add new films to the library too.

* A simple, yet intuitive website that allows users to browse films and other reviews without signing up or logging in. They can however also choose to sign-up and leave their own reviews or add new films. But they don't have to.

2. A website that is easy to move between films & simple to submit or read other reviews.

* With the click of a button or the search of a name, users can be immediately at the film of their choice, reading reviews, or adding their own.

3. The ability to Create, Read, Update & Delete both reviews and films.

* Users, once logged in, can navigate to the side bar where they can submit a new film / review. Once submitted the film / review will be associated to them so can be updated or deleted by themselves only. (or the Admin)

4. A website that users will keep coming back to every time they watch a new film or are looking for something new to watch.

* As the website is so quick and easy to use, users will find it very simple and satisfying to come back and quickly place their next review, or to find their next film to watch.



### As a Developer, I want:

1. A place that I can share my opinions/reviews of films I have seen.

* Even a developer should get to spend some time relaxing, watching a movie. Here the developer can watch their library expand with other users reviews and film submissions, so that they themselves can find something new to watch.

2. A website that is easy to use for myself, where I can submit a new review in under 30s, update old reviews or delete them if I change my mind.

* Submitting a new review or adding a new film takes no time at all. All the developer has to do is select the form from the side nav bar and then fill in the details on the form and press submit.
The developer can also simply search for the film or click on the film to be taken to the films page where they can read, update or delete their own reviews or other peoples.

3. The ability to add new films, remove films if I choose to or update them with new pictures or information.

* As stated above as the admin of the website the developer has full access to all films and reviews. They can add new ones, or update / amend the old ones.

4. As an "Admin" - to be able to add new genres of films where necessary or to remove other peoples films submissions or reviews that I may deem unhelpful or inappropriate.

* If the developer wishes to add a new film that doesn't really fit any of the current genres then they can add a new one quickly by clicking add new genre. They also have access to update or delete other users submissions.



### ON THE GO TESTING / PROBLEMS

1. HTML/CSS 

2. COLOUR SCHEME 


3. FLIPPING 

4. COUNTER 

5. TIMER 

6. GAMEOVER FUNCTION 

7. TIMINGS 

8. THE NEXT GAME 

9. Whilst playing the card, and having my girlfriend play it a couple of times... 

10. COMPATABILITY 




### POST-CONTRUCTION TESTING

* Once I felt I had completed this project, I took the project to the browser to complete some further testing and complete the lighthouse testing.

1. For the Lighthouse testing,

2. For the Website testing,

# Deployments

## GitHub Pages

This project was deployed to GitHub Pages through the following steps:

1. Log into GitHub and find the GitHub Repository.
2. At the top of the Repository, below the Repository title, find the "Settings" button in the menu.
3. Scroll down to find the "GitHub Pages" section.
4. In the "Source" heading, click "None" and select the "Master Branch".
5. This will refresh your page. Now scroll down again to find the link in the "GitHub Pages" section.

## Forking the GitHub Repository

Forking is the action of creating a copy of the original file on your own GitHub account to view and/or edit without making changes to the original repository. To do this:

1. Log in to GitHub and find the GitHub Repository you wish to use.
2. At the top of the Repository, below the Repository title, find the "Fork" button in the menu.
3. A new copy of your own should now be located in your own GitHub account.

## Making a Local Clone

1. Log in to GitHub and find the GitHub Repository you wish to use.
2. At the top of the Repository, below the Repository title, click "Clone or download"
3. To clone using HTTPS, copy the link under "Clone with HTTPS".
4. Now open Git Bash.
5. Choose the location you wish to save the cloned directory.
6. Type `git clone`, then paste the URL copied in Step 3.

```
    $ git clone https://github.com/Otterrr/The-Memory-Game.git
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/Otterrr/The-Memory-Game.git
> Cloning into `The-Memory-Game`...
> remote: Enumerating objects: 96, done.
> remote: Counting objects: 100% (96/96), done.
> remote: Compressing objects: 100% (70/70), done.
> remote: Total 206 (delta 26), reused 82 (delta 15), pack-reused 110
> Receiving objects: 100% (206/206), 237.46 MiB | 12.31 MiB/s, done.
> Resolving deltas: 100% (57/57), done.
```
 
# Credits

* [Freecodecamp.org](https://www.youtube.com/watch?v=ZniVgo8U7ek)
* [Web-Dev-Simplified](https://www.youtube.com/watch?v=28VfzEiJgy4)
* [PortEXE](https://www.youtube.com/watch?v=3uuQ3g92oPQ&t=3041s)
* [Ania-Kubów](https://www.youtube.com/watch?v=tjyDOHzKN0w)
* [Scotch.io](https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript)

Various functions and code snippets were adapted upon from the above sources. All code was typed by hand and functions and variables were renamed for my own project.

# Content

* Fonts were sourced from Google Fonts. https://fonts.google.com/
    - All text was written by myself.

# Media

* All images were sourced from Font Awesome https://fontawesome.com/

# Acknowledgements

* [Google Fonts](https://fonts.google.com/)
* [Github Pages](https://pages.github.com/)
* [Font Awesome](https://fontawesome.com)
* [Code Institute](https://learn.codeinstitute.net/courses)
* [Booststrap](https://getbootstrap.com/docs/5.0/customize/components/)
* [Pexels](https://www.pexels.com/)
* [W3Schools](https://www.w3schools.com/)
* [Stack Overflow](https://stackoverflow.com/)