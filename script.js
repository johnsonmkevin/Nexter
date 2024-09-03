"use strict";

const homeHeartBtn = document.querySelectorAll(".home__like");

const toggleHeart = (btn) => {
  btn.classList.toggle("home__liked");
};

homeHeartBtn.forEach((n) => n.addEventListener("click", () => toggleHeart(n)));
