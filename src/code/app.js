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

// to handle the modal

const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector("#show-code");
const closeModalBnt = document.querySelector(".closemodal");
const overlay = document.querySelector(".overlay");

//to select the display to show the code
const display = document.querySelector(".display");

//make shadow

inputsShadow.forEach((input) => {
  input.addEventListener("input", makeShadow);
});

function makeShadow() {
  let insetShadow = inputIsInset.checked;

  let shadowInX = inputRangeHorizontal.value;
  let shadowInY = inputRangeVertical.value;
  let blurRadius = inputRangeBlur.value;
  let spread = inputRangeSpread.value;
  let shadowColor = inputColorShadow.value;

  //we create a variable to verify if the inset checkbox is selected
  let boxShadowOutput = insetShadow
    ? `inset ${shadowInX}px ${shadowInY}px ${blurRadius}px ${spread}px ${shadowColor}`
    : `${shadowInX}px ${shadowInY}px ${blurRadius}px ${spread}px ${shadowColor}`;

  console.log(insetShadow);
  //we assign the styles of the square with the generated code

  square.style.boxShadow = `${boxShadowOutput}`;

  //then, the code is showing to the display
  display.innerHTML = `box-shadow: ${boxShadowOutput}`;
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

//to open and close the modal

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

inputIsInset.addEventListener("change", (e) => {
  makeShadow();
});

openModalBtn.addEventListener("click", openModal);

closeModalBnt.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//to reload the page
window.onload = makeShadow();
