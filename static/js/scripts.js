// Materialize Scripts
$(document).ready(function () {

  $('.sidenav').sidenav({ edge: "right" });
  $('.collapsible').collapsible();
  $('.tooltipped').tooltip();
  $('select').formSelect();
  $('.datepicker').datepicker({
    format: "dd mmmm, yyyy",
    yearRange: 3,
    showClearBtn: true,
    i18n: {
      done: "Select"
    }
  });

  validateMaterializeSelect();

  function validateMaterializeSelect() {
    // Setting two new variables to set some CSS styles to match Materialize validation
    let classValid = { "border-bottom": "1px solid #4caf50", "box-shadow": "0 1px 0 0 #4caf50" };
    let classInvalid = { "border-bottom": "1px solid #f44336", "box-shadow": "0 1px 0 0 #f44336" };
    // If any select element has the property of 'required' we then want to un-hide it but
    // make it virtually invisible without any width or height
    // Materialize hides the select elements, but we need them to physically be on the DOM
    if ($("select.validate").prop("required")) {
        $("select.validate").css({ "display": "block", "height": "0", "padding": "0", "width": "0", "position": "absolute" });
    }
    // Once a user is focused within the input on screen, we'll traverse the DOM up and down,
    // using the parent and child selectors with event listeners
    $(".select-wrapper input.select-dropdown").on("focusin", function () {
      $(this).parent(".select-wrapper").on("change", function () {
        if ($(this).children("ul").children("li.selected:not(.disabled)").on("click", function () { })) {
            $(this).children("input").css(classValid);
        }
      });
    }).on("click", function () {
      if ($(this).parent(".select-wrapper").children("ul").children("li.selected:not(.disabled)").css("background-color") === "rgba(0, 0, 0, 0.03)") {
          $(this).parent(".select-wrapper").children("input").css(classValid);
        // Otherwise users have not selected anything, so we apply the invalid red class to the input
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