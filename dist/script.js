//dark mode
let checkbox = document.querySelector("#toggle");
let html = document.querySelector("html");

checkbox.addEventListener("click", () => {
   checkbox.checked
      ? html.classList.add("dark")
      : html.classList.remove("dark");
});

//typehead
const type = document.querySelector("#typed");
new Typed(type, {
   strings: [`Make Your Dreams come True...`],
   backSpeed: 40,
   typeSpeed: 40,
   delaySpeed: 500,
   loop: true,
   shuffle: true,
});

//hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("hamburger-active");
   navMenu.classList.toggle("hidden");
});

//navbar-fixed
window.onscroll = () => {
   const header = document.querySelector("header");
   const fixedNav = header.offsetTop;

   if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
   } else {
      header.classList.remove("navbar-fixed");
   }
};

//make time

let date = new Date();
let time = document.querySelector(".time-now");
time.innerHTML =
   `copyright&copy; 2020 - ` +
   date.getFullYear() +
   ` | MIT license open Source`;
