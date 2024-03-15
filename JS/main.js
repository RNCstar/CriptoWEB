const btnBurger = document.querySelector("svg");
const introM = document.querySelector(".introM");
btnBurger.addEventListener("click", show);
function show() {
  if (
    $("#menu_bar_mobile").hasClass("showNav") &&
    $(".introM").hasClass("showNav")
  ) {
    $("#menu_bar_mobile").removeClass("showNav");
    $(".introM").removeClass("showNav");
  } else {
    $("#menu_bar_mobile").addClass("showNav");
    $(".introM").addClass("showNav");
  }
}
