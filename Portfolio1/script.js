"use strict";
const text = document.querySelector("#text");
const hill = document.querySelector("#hill");
const moon = document.querySelector("#moon");
const btn = document.querySelector("#btn");
const header = document.querySelector("#header");
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  text.style.top = value * 2 + "px";
  moon.style.top = value * -1.5 + "px";
  moon.style.right = value * 2 + "px";
  hill.style.top = value * 2+ "px";
  btn.style.top = value * 1.5 + "px";
  rocks.style.top = value * -0.12 + "px";
  header.style.top = value * 0.5 + "px";
});