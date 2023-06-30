$(function () {
  if ($('.header').length > 0){
    const navOffset = $(".header").offset().top + 200;
    $(window).scroll(function() {
    
      const scrolled = $(this).scrollTop();
    
      if (scrolled > navOffset){
        $('header').addClass("sticky animate__animated animate__fadeInDown");
        $('header').next().addClass("margin-top");
      } else if (scrolled < navOffset){
        $('header').removeClass("sticky animate__animated animate__fadeInDown");
        $('header').next().removeClass("margin-top");
      }
    });
  }
  
  $(".header__box button").on("click", function () {
    $(".header__box button").removeClass("active");
    $(this).addClass('active');
  });

  $(".header__menu-btn").on("click", function () {
    $(".header__menu-btn").toggleClass("active");
    $(".header__menu-wrapper").toggleClass("open");
    $("body").toggleClass("lock");
  });

	var number = document.querySelector('.number'),
		numberTop = number.getBoundingClientRect().top,
		start = +number.innerHTML, end = +number.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > numberTop - window.innerHeight / 1.2) {
				this.removeEventListener('scroll', onScroll);
				var interval = setInterval(function() {
					number.innerHTML = ++start;
					if(start == end) {
						clearInterval(interval);
					}
				}, 5);
			}
		});

    var number1 = document.querySelector('.number1'),
		number1Top = number1.getBoundingClientRect().top,
		start1 = +number1.innerHTML, end1 = +number1.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > number1Top - window.innerHeight / 1.2) {
				this.removeEventListener('scroll', onScroll);
				var interval1 = setInterval(function() {
					number1.innerHTML = ++start1;
					if(start1 == end1) {
						clearInterval(interval1);
					}
				}, 5);
			}
		});

});

