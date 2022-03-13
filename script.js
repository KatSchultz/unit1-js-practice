document.write("JavaScript works!");
console.log("Hello console!");
console.warn("This is only a test!");
let myName = "Katie";
let workFromHome = true;
let side = 15;
let radius = 10;

// console.log(myName);
// console.log(workFromHome);
// console.log(side);
// console.log(radius);

console.log("My name is " + myName);
console.log("I work from home: " + workFromHome);
console.log("The length of each side of the square is " + side);
console.log(`The radius of the circle is ${radius}`);

let squareArea = side * side;
let squarePerimeter = side * 4;
let circleArea = Math.PI * radius * radius;
let circlePerimeter = 2 * Math.PI * radius;

console.log(`The square area is ${squareArea} and the perimeter is ${squarePerimeter}`);
console.log(`the circle area is ${circleArea} and the perimeter is ${circlePerimeter}`)

let travelOptions = ["foot", "bike", "car", "airplane"];
console.log("The travel options are:");
console.log(`1) ${travelOptions[0]}`);
console.log(`2) ${travelOptions[1]}`);
console.log(`3) ${travelOptions[2]}`);
console.log(`4) ${travelOptions[3]}`);