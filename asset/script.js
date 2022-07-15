$(document).ready(function () {
  //add remove active class
  $(".page-scroll").on("click", function () {
    $("li a").removeClass("active");
    $(this).addClass("active");
  });

  $(window).scroll(function () {
    let top = $(this).scrollTop();

    if (top > $("#home").offset().top) {
      $(".myNavbar").addClass("fixed-top").addClass("bg-light");
    } else {
      $(".myNavbar").removeClass("fixed-top").removeClass("bg-light");
    }
  });

  $(".page-scroll").on("click", function (e) {
    let alamat = $(this).attr("href");
    let tujuan = $(alamat);

    $("html").animate(
      {
        scrollTop: tujuan.offset().top - 72,
      },
      1250,
      "swing"
    );

    e.preventDefault();
  });

  $(window).scroll(function () {
    let top = $(this).scrollTop();

    if (top > $(".learn").offset().top - 30) {
      $(".card-front").each(function (i) {
        setTimeout(function () {
          $(".card-front").eq(i).addClass("muncul");
        }, 300 * (i + 1));
      });
    }
  });

 
      function pulse() {
         $('.heart').animate({
             width: 15, height: 15, // sets the base height and width
             opacity: 0.5
         }, 700, function() {
             $('.heart').animate({
                 width: 15, height: 15, // sets the alternative height and width
                 opacity: 1
             }, 700, function() {
                 pulse();
             });
         }); 
     };
     
     pulse();
  
});

 //tahun 
let tahun = new Date().getFullYear();
document.getElementById('tahun').innerHTML= tahun
 

new Typed("#typed", {
  strings: ["don't stop Learn"],
  typeSpeed: 100,
  delaySpeed: 300,
  loop: true,
});
