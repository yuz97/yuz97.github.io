$(document).ready(function () {


   //add remove active class
   $('.page-scroll').on('click', function () {
      $('li a').removeClass('active');
      $(this).addClass('active');


   })

   $(window).scroll(function () {
      let top = $(this).scrollTop();

      if (top > $('#home').offset().top) {
         $('.myNavbar').addClass('fixed-top').addClass('bg-light')
      } else {
         $('.myNavbar').removeClass('fixed-top').removeClass('bg-light')
      }
   })


   $('.page-scroll').on('click', function (e) {
      let alamat = $(this).attr('href');
      let tujuan = $(alamat);

      $('html').animate({
         scrollTop: tujuan.offset().top - 72
      }, 1250, 'swing');

      e.preventDefault();
   })


   $(window).scroll(function () {
      let top = $(this).scrollTop();

      if (top > $('.learn').offset().top - 30) {

         $('.card-front').each(function (i) {
            setTimeout(function () {
               $('.card-front').eq(i).addClass('muncul');
            }, 300 * (i + 1))
         })
      }
   })
});

new Typed('#typed', {
   strings: ['We grow together', 'We can be a good Programmer'],
   typeSpeed: 100,
   delaySpeed: 300,
   loop: true
})