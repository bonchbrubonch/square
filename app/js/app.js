$(function () {
  $(".header__box button").on("click", function () {
    $(".header__box button").removeClass("active");
    $(this).addClass('active');
  });

  $(".header__menu-btn").on("click", function () {
    $(".header__menu-btn").toggleClass("active");
    $(".header__menu-wrapper").toggleClass("open");
    // $(".header__list").toggleClass("active");
    // $(".header--transparent").addClass("active");

    $("body").toggleClass("lock");
  });


});