const navigation = function () {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".nav__links");

  burger.addEventListener("click", function () {
    menu.classList.toggle("nav__active");
    console.log("hello");
  });
};
navigation();
