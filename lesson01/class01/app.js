import { calculateCircumference, calculateArea } from './circleCalculator.js';
import { convertToNumber } from './validation.js';

window.onload = () => {
  document.querySelector('#submitButton').onclick = submitFunction;
  document.querySelector('#submitButtonArea').onclick = submitFunctionArea;
};
const submitFunction = () => {
  let radius = convertToNumber(document.getElementById('radius').value);
  if (isNaN(radius)) {
    document.querySelector('#output').innerHTML = radius;
  } else {
    let circumference = calculateCircumference(radius);
    document.querySelector('#output').innerHTML = circumference;
  }
};

const submitFunctionArea = () => {
  let radius = convertToNumber(document.getElementById('radiusArea').value);
  if (isNaN(radius)) {
    document.querySelector('#outputArea').innerHTML = radius;
  } else {
    let area = calculateArea(radius);
    document.querySelector('#outputArea').innerHTML = area;
  }
};
