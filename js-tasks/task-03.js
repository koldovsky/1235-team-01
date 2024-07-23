//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
//Given an array of integers your solution should find the smallest integer.
//You can assume, for the purpose of this kata, that the supplied array will not be empty.
function findSmallestInt(arr) {
  return Math.min(...arr);
}

//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
//Write a function calculating circumference of a Circle.
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
//Write a function that accepts an object and returns an array of properties and values with lengths equal to 5.
function giveMeFive(obj) {
  let arr = [];
  for (let key in obj) {
    if (key.length === 5) arr.push(key);
    let value = obj[key];
    if (typeof value === "string" && value.length === 5) arr.push(value);
  }
  return arr;
}
