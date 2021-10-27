$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.collapsible').collapsible();
  $('select').formSelect();
  $('.modal').modal();
  $('.trigger-modal').modal();
  $('input.autocomplete').autocomplete({
    data: {
      "No Time to Die": null,
      "Dune": null,
      "Free Guy": null,
    },
    onAutocomplete: function(val) {
      var value = $('input.autocomplete').val();

      if(value == "Dune"){
        var link = open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/6177271fdc188d91fa0c1d2f', '_self');

      } else if(value == "Free Guy"){
        var link = open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/617726c4dc188d91fa0c1d2e', '_self')
      
      } else if(value == "No Time to Die"){
        var link = open('https://8080-black-tiglon-4tn2fyxj.ws-eu18.gitpod.io/view_films/616eacc871dc8003743d58d7', '_self')
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