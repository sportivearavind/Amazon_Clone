const imgs = document.querySelectorAll(".header-slider ul img"); // stores all the images
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");

let n = 0;

function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}
changeSlide();

prev_btn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevents the default action of the anchor tag
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlide();
});

next_btn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevents the default action of the anchor tag
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlide();
});

//scroll the products section using mouse wheel
const scrollContainer = document.querySelectorAll(".products");

for (const item of scrollContainer) {
    item.addEventListener("wheel", (evt) => {
      evt.preventDefault(); //first we prevent the default feature
      // . evt.deltaY contains the vertical scroll amount, which is used here to scroll horizontally. This effectively changes vertical scrolling into horizontal scrolling for the element.
      item.scrollLeft += evt.deltaY;
    })
}
