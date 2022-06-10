"use strict";

const colorBtns = document.querySelectorAll(".colors");
const shoeImg = document.querySelector("img");

const resetColorBtns = function () {
  colorBtns.forEach((btn) => (btn.className = "colors"));
};
const resetImg = function () {
  shoeImg.classList.remove("sold-out");
};

colorBtns.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    console.log("yay");
    resetColorBtns();
    resetImg();
    btn.className = "colors-clicked";
    if (i === 0)
      shoeImg.src =
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/tgttyejtnd29yz3nbr4p/converse-chuck-taylor-all-%20%20%20%20%20%20%20%20star-low-top-shoes-NLRAok.png";
    if (i === 1)
      shoeImg.src =
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/xudyte8tap53kbnzke10/converse-chuck-taylor-all-star-low-top-unisex-shoe-NLRAok.png";
    if (i === 2)
      shoeImg.src =
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/rg5cvpoto4fcg2ensegc/converse-chuck-taylor-all-star-low-top-unisex-shoe-NLRAok.png";
    if (i > 2) {
      shoeImg.src = "/img/soldout.png";
      shoeImg.classList.add("sold-out");
    }
  });
});
