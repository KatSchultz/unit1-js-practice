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

let distance = 100;
let time = 0;
let cost = 0;

let travelType = prompt("How would you like to travel?");
console.log(travelType);

if (travelType === "foot") {
    console.log("Walking is free! Speed is 3mph.");
    cost = 0;
    time = distance / 3;
} else if (travelType === "bike") {
    let rentBike = prompt("Do you need to rent a bike? (yes or no)");
    if (rentBike === "yes") {
        console.log("Bike rental is $45! Speed is 10mph.");
        cost = 45;
    } else {
        console.log("Biking is free! Speed is 10mph.");
        cost = 0;
    }
    time = distance / 10;
} else if (travelType === "car") {
    console.log("Driving is $0.25/mi. Speed is 60mph.");
    cost = 0.25 * distance;
    time = distance / 60;
} else if (travelType === "airplane") {
    let passengerCount = prompt("How many passengers?");
    console.log("Flying is $0.10/mi. Speed is 400mph.");
    cost = 0.10 * distance * passengerCount;
    time = distance / 400;
} else {
    console.log(`Sorry. ${travelType} is an invalid option.`);
}

console.log(`Traveling ${distance} miles by ${travelType} took ${time} hours and cost $${cost}!`)

let costBar = "Cost: ";
let timeBar = "Time: ";

for (let i = 0; i <= cost; i++) {
    costBar += "$";
}

for (let i = 0; i <= time; i++) {
    timeBar += "/"
}

// costBar += "$";
// costBar += "$";
// costBar += "$";

console.log(costBar);
console.log(timeBar);

let meterCostRemaining = 1.00;

if (travelType === "car") {
    while (meterCostRemaining > 0) {
        let coin = prompt(`$${meterCostRemaining} remaining. Type a coin to insert.`);
        if (coin === "quarter") {
            meterCostRemaining -= .25;
        } else if (coin === "dime") {
            meterCostRemaining -= .10;
        } else if (coin === "nickel") {
            meterCostRemaining -= .05;
        } else if (coin === "penny") {
            meterCostRemaining -= .01;
        } else {
            console.log("Invalid payment type.")
        }
        console.log("Meter cost remaining: " + meterCostRemaining);
    }
    console.log("You have paid the parking meter.")
}