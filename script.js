"use strict";
// target div to render numbers into the DOM
const target = document.getElementById("target");

// initialize variables
let nthTerm = BigInt(1);
let nMinusOnethTerm = BigInt(0);
let iterationCount = 1;
let isRendering = false;

// render first term into the DOM
renderNumber();

// get the nextTerm of the series
function getNextTerm() {
  const nextTerm = nMinusOnethTerm + nthTerm;
  nMinusOnethTerm = nthTerm;
  nthTerm = nextTerm;
  iterationCount++;
  return nextTerm;
}

// renders 30 numbers
function renderFibonacciNumbers() {
  console.log({ isRendering });
  if (isRendering) return;
  isRendering = true;
  for (let i = 0; i < 20; i++) {
    getNextTerm();
    renderNumber();
  }
  isRendering = false;
}

// render fibonacci terms
function renderNumber() {
  //   const node = document.createElement("p");
  const digitCount = (nthTerm + "").length;
  const sup =
    iterationCount % 10 === 1
      ? "st"
      : iterationCount % 10 === 2
        ? "nd"
        : iterationCount % 10 === 3
          ? "rd"
          : "th";

  const html = `<p>
                <span>${iterationCount}<sup>${sup}</sup> Term:</span>
                <span>(${digitCount} digits) → </span>
                <span>${nthTerm}</span>
            </p>`;
  target.innerHTML += html;
}

renderFibonacciNumbers();

// attach window scroll event
window.onscroll = function() {
  const contentHeight = target.offsetHeight - 200;
  const y = window.pageYOffset + window.innerHeight;
  if (y >= contentHeight) {
    renderFibonacciNumbers();
  }
};
