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

//https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
//The wanted outcome is that when all function in the array are executed, the number from 0 to N should be returned.
function buildFun(n){
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(function() {
      console.log(i);
      return i;
    });
  }
  return res;
}

//https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
//Define the classes that inherit from Animal.
class Shark extends Animal {
  constructor(name, age, status) {
     super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
     super(name, age, 4, "cat", status);
  }
  
  introduce(){
    return super.introduce() + "  Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  
  greetMaster(){
    return "Hello " + this.master;
  }
}
