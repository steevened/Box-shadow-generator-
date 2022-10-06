const inputRangeHorizontal = document.querySelector("#horizontal");
const inputRangeVertical = document.querySelector("#vertical");

const inputWidth = document.querySelector("#width-range");
const inputHeight = document.querySelector("#height-range");
const inputBorderRadius = document.querySelector("#border-radius");
const backgroundColor = document.querySelector("#background-color");
const borderColor = document.querySelector("#border-color");

const inputRangeBlur = document.querySelector("#blur");
const inputRangeSpread = document.querySelector("#spread");
const square = document.querySelector(".square");

let horizontal = 0;

inputRangeHorizontal.addEventListener("input", (e) => {
  const value = e.target.value;
});

inputRangeVertical.addEventListener("input", (e) => {
  const value = e.target.value;
});

inputRangeBlur.addEventListener("input", (e) => {
  const value = e.target.value;
});

inputRangeSpread.addEventListener("input", (e) => {
  const value = e.target.value;
});

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
  square.style.borderRadius = `${value}%`;
});

backgroundColor.addEventListener("input", (e) => {
  const value = e.target.value;
  square.style.backgroundColor = value;
});

borderColor.addEventListener("input", (e) => {
  const value = e.target.value;
  square.style.borderColor = value;
});
