const saturationToggle = document.querySelector(`input[name="saturate"]`);
const saturationOutput = document.querySelector('span.saturation-output');
const blurToggle = document.querySelector(`input[name="blur"]`);
const blurOutput = document.querySelector('span.blur-output');

let currentBlur = (`blur(` + 10 + "px" + `)`);
let currentSaturation = (`saturate(` + 1  + `)`);

let styleTweak;

const videoTag = document.querySelector('div.video');

console.log(currentBlur + ' ' + currentSaturation + ';');
videoTag.style.filter = currentBlur + ' ' + currentSaturation;

saturationToggle.addEventListener("input", function () {
  currentSaturation = (`saturate(` + this.value + `)`);
  saturationOutput.innerHTML = this.value;
  styleTweak = currentBlur + ' ' + currentSaturation;
  videoTag.style.filter = styleTweak;
});

blurToggle.addEventListener("input", function () {
  currentBlur = (`blur(` + this.value + "px" + `)`);
  blurOutput.innerHTML = this.value;
  styleTweak = currentBlur + ' ' + currentSaturation;
  videoTag.style.filter = styleTweak;
  console.log(styleTweak)
});
