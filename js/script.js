"use strict";

const toggler = document.querySelector(".toggle-icon");
const navBar = document.querySelector(".nav-bar");

toggler.addEventListener("click", function () {
  navBar.classList.toggle("hidden");
});
