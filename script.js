const blurToggle = document.querySelector(`input[name="blur"]`);
const brightnessToggle = document.querySelector(`input[name="brightness"]`);
const contrastToggle = document.querySelector(`input[name="contrast"]`);
const dropShadowToggle = document.querySelector(`input[name="dropShadow"]`);
const grayscaleToggle = document.querySelector(`input[name="grayscale"]`);
const hueRotateToggle = document.querySelector(`input[name="hueRotate"]`);






const videoTag = document.querySelector('div.video');

blurToggle.addEventListener("change", function () {
  if(this.checked) {
    videoTag.classList.add("blur");
  } else {
    videoTag.classList.remove("blur");
  }
});

brightnessToggle.addEventListener("change", function () {
  if(this.checked) {
    videoTag.classList.add("brightness");
  } else {
    videoTag.classList.remove("brightness");
  }
});

contrastToggle.addEventListener("change", function () {
  if(this.checked) {
    videoTag.classList.add("contrast");
  } else {
    videoTag.classList.remove("contrast");
  }
});

dropShadowToggle.addEventListener("change", function () {
  if(this.checked) {
    videoTag.classList.add("drop-shadow");
  } else {
    videoTag.classList.remove("drop-shadow");
  }
});

grayscaleToggle.addEventListener("change", function () {
  if(this.checked) {
    videoTag.classList.add("grayscale");
  } else {
    videoTag.classList.remove("grayscale");
  }
});

hueRotateToggle.addEventListener("change", function () {
  if(this.checked) {
    videoTag.classList.add("hue-rotate");
  } else {
    videoTag.classList.remove("hue-rotate");
  }
});
