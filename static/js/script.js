$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.collapsible').collapsible();
  $('select').formSelect();
  $('.modal').modal();
  $('.trigger-modal').modal();
  $("#normal_search").val('');
  $('input.autocomplete').autocomplete({
    data: {
      "No Time to Die": null,
      "Dune": null,
      "Free Guy": null,
      "1917": null,
      "The Invisible Man": null,
      "The Lion King": null,
      "Bombshell": null,
      "Bad Boys for Life": null,
      "The Gentlemen": null,
      "The Rhythm Section": null,
      "Birds of Prey": null,
      "A Beautiful Day in the Neighborhood": null,
      "Parasite": null,
      "Downhill": null,
      "Emma.": null,
      "Black Widow": null,
      "A Quiet Place Part II": null,
      "Cruella": null,
      "Jungle Cruise": null,
      "The Suicide Squad": null,
      "Snake Eyes": null,
      "Shang-Chi and the Legend of the Ten Rings": null,
      "Army of the Dead": null,
    },
    onAutocomplete: function (val) {
      var value = $('input.autocomplete').val();

      if (value == "Dune") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/6177271fdc188d91fa0c1d2f', '_self');

      } else if (value == "Free Guy") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617726c4dc188d91fa0c1d2e', '_self');

      } else if (value == "No Time to Die") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/616eacc871dc8003743d58d7', '_self');

      } else if (value == "1917") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617a994ddb4612c6a28685e2', '_self');

      } else if (value == "The Invisible Man") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617a9ce86a3c12db4ad1e798', '_self');

      } else if (value == "The Lion King") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617a994ddb4612c6a28685e2', '_self');

      } else if (value == "Bombshell") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617a9b316a3c12db4ad1e791', '_self');

      } else if (value == "Bad Boys for Life") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617a9b4c6a3c12db4ad1e792', '_self');

      } else if (value == "The Gentlemen") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617a9b6b6a3c12db4ad1e793', '_self');

      } else if (value == "The Rhythm Section") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617a9b8c6a3c12db4ad1e794', '_self');

      } else if (value == "Birds of Prey") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617a9c176a3c12db4ad1e795', '_self');

      } else if (value == "A Beautiful Day in the Neighborhood") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617a9c4f6a3c12db4ad1e796', '_self');

      } else if (value == "Parasite") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617a9ca26a3c12db4ad1e797', '_self');

      } else if (value == "Downhill") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617a9d2b6a3c12db4ad1e799', '_self');

      } else if (value == "Emma.") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617a9d696a3c12db4ad1e79a', '_self');

      } else if (value == "Black Widow") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617a9ded6a3c12db4ad1e79b', '_self');

      } else if (value == "A Quiet Place Part II") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617a9e306a3c12db4ad1e79c', '_self');

      } else if (value == "Cruella") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617a9e646a3c12db4ad1e79d', '_self');

      } else if (value == "Jungle Cruise") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617a9e9e6a3c12db4ad1e79e', '_self');

      } else if (value == "The Suicide Squad") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617a9fbb6a3c12db4ad1e79f', '_self');

      } else if (value == "Snake Eyes") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617a9ffd6a3c12db4ad1e7a0', '_self');

      } else if (value == "Shang-Chi and the Legend of the Ten Rings") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617aa04c6a3c12db4ad1e7a1', '_self');

      } else if (value == "Army of the Dead") {
        open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617ab297bd56ec8e94cb8361', '_self');

      }
    }
  });
  $('.datepicker').datepicker({
    format: "dd mmmm, yyyy",
    yearRange: 3,
    showClearBtn: true,
    i18n: {
      done: "Select"
    }
  });


  /* USED TO HIDE MATERIALIZE DEFAULT SELECT ELEMENT AND APPLY OWN CUSTOM SELECT VALIDATION */

  validateMaterializeSelect();

  function validateMaterializeSelect() {
    let classValid = {
      "border-bottom": "1px solid #4caf50",
      "box-shadow": "0 1px 0 0 #4caf50"
    };
    let classInvalid = {
      "border-bottom": "1px solid #f44336",
      "box-shadow": "0 1px 0 0 #f44336"
    };
    if ($("select.validate").prop("required")) {
      $("select.validate").css({
        "display": "block",
        "height": "0",
        "padding": "0",
        "width": "0",
        "position": "absolute"
      });
    }
    $(".select-wrapper input.select-dropdown").on("focusin", function () {
      $(this).parent(".select-wrapper").on("change", function () {
        if ($(this).children("ul").children("li.selected:not(.disabled)").on("click", function () {})) {
          $(this).children("input").css(classValid);
        }
      });
    }).on("click", function () {
      if ($(this).parent(".select-wrapper").children("ul").children("li.selected:not(.disabled)").css("background-color") === "rgba(0, 0, 0, 0.03)") {
        $(this).parent(".select-wrapper").children("input").css(classValid);
      } else {
        $(".select-wrapper input.select-dropdown").on("focusout", function () {
          if ($(this).parent(".select-wrapper").children("select").prop("required")) {
            if ($(this).css("border-bottom") != "1px solid rgb(76, 175, 80)") {
              $(this).parent(".select-wrapper").children("input").css(classInvalid);
            }
          }
        });
      }
    });
  }
});