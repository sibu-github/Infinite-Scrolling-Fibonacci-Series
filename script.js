"use strict";
// target div to render numbers into the DOM
const target = document.getElementById("target");

// initialize variables
let nthTerm = BigInt(1);
let nMinusOnethTerm = BigInt(0);
let iterationCount = BigInt(1);

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
  for (let i = 0; i < 20; i++) {
    getNextTerm();
    renderNumber();
  }
}

// render fibonacci terms
function renderNumber() {
  const node = document.createElement("p");
  const digitCount = (nthTerm + "").length;
  let text = "";
  if (iterationCount % BigInt(10) === BigInt(1)) {
    text = iterationCount + "st term: ";
  } else if (iterationCount % BigInt(10) === BigInt(2)) {
    text = iterationCount + "nd term: ";
  } else if (iterationCount % BigInt(10) === BigInt(3)) {
    text = iterationCount + "rd term: ";
  } else {
    text = iterationCount + "th term: ";
  }
  text = text + `(${digitCount} digits) → `;
  text = text + nthTerm;
  const textNode = document.createTextNode(text);
  node.appendChild(textNode);
  target.appendChild(node);
}

renderFibonacciNumbers();

// attach window scroll event
window.onscroll = function() {
  const contentHeight = target.offsetHeight;
  const yOffset = window.pageYOffset;
  const y = yOffset + window.innerHeight - 50;
  if (y >= contentHeight) {
    console.log({ y, contentHeight });
    renderFibonacciNumbers();
  }
};
