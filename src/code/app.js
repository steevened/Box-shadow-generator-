//box shadow variables
const inputIsInset = document.querySelector("#inset");
const inputRangeHorizontal = document.querySelector("#horizontal");
const inputRangeVertical = document.querySelector("#vertical");
const inputRangeBlur = document.querySelector("#blur");
const inputRangeSpread = document.querySelector("#spread");
const inputColorShadow = document.querySelector("#color");
const inputColorOpacity = document.querySelector("#color-opacity");

//select all box shadow sliders
const inputsShadow = document.querySelectorAll(".input-range");

//box dimension variables
const inputWidth = document.querySelector("#width-range");
const inputHeight = document.querySelector("#height-range");
const inputBorderRadius = document.querySelector("#border-radius");
const backgroundColor = document.querySelector("#background-color");

//variable of the element to modify
const square = document.querySelector(".square");

//make shadow

inputsShadow.forEach((input) => {
  input.addEventListener("input", makeShadow);
});

function makeShadow() {
  // let insetShadow = inputIsInset.checked;

  let shadowInX = inputRangeHorizontal.value;
  let shadowInY = inputRangeVertical.value;
  let blurRadius = inputRangeBlur.value;
  let spread = inputRangeSpread.value;
  let shadowColor = inputColorShadow.value;

  square.style.boxShadow = `${shadowInX}px ${shadowInY}px ${blurRadius}px ${spread}px ${shadowColor}`;

  return `box-shadow: ${shadowInX}px ${shadowInY}px ${blurRadius}px ${spread}px ${shadowColor}`;
}

//box properties

inputWidth.addEventListener("input", (e) => {
  const value = e.target.value;
  square.style.width = `${value}px`;
});

inputHeight.addEventListener("input", (e) => {
  const value = e.target.value;
  square.style.height = `${value}px`;
});

inputBorderRadius.addEventListener("input", (e) => {
  const value = e.target.value;
  square.style.borderRadius = `${value}px`;
});

backgroundColor.addEventListener("input", (e) => {
  const value = e.target.value;
  square.style.backgroundColor = value;
});
