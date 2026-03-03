console.log("Hello World");

//#1 - Show if a randomly generated number is divisible by 7 and 9
let x = 7;
let y = 9;
let z = 63//Math.floor(Math.random() * 21);

console.log(z);

let a = z % x;
let b = z % y;

if (a > 0){
    console.log("false");
} else if (b > 0){
    console.log("false");
} else {
    console.log("true");
}

//#2 - Use ternary operator to decide if the weather is too cold, too hot, or perfect

let weather = Math.floor(Math.random() * 134);
console.log(weather)
let text = (weather > 60) ? (weather < 90) ? "perfect" : "hot" : "Cold";
console.log(text)

//#3 - 
//I cant figure this out bruh this is so much thinking

for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

function sayHello(name) {
  return "Hello " + name;
}

let greeting = sayHello("John");