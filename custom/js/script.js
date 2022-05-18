$(document).ready(function(){

  new WOW().init();

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 83){
      $(".navbar").removeClass('navbar-transparant shadow-none').addClass('navbar-theme shadow-sm');
      $(".nav-link").removeClass('text-dark').addClass('text-white');
    } else{
      $(".navbar").removeClass('navbar-theme shadow-sm').addClass('navbar-transparant shadow-none');
      $(".nav-link").removeClass('text-white').addClass('text-dark');
    }
  })

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  });  

  var swiper = new Swiper(".mySwiper2", {
    speed: 1000,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  });

}); 