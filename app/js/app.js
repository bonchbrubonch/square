$(function () {
  $(".header__box button").on("click", function () {
    $(".header__box button").removeClass("active");
    $(this).addClass('active');
  });


});