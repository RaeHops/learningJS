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
console.log(weather);
let text = (weather > 60) ? (weather < 90) ? "perfect" : "hot" : "Cold";
console.log(text);

//#3 - 
//Functions = reusable code blocks designed for particular tasks, functions are executed when they are called or invoked
//you call a function by adding parentheses to its name (ex: name())
//Parameters allow you to send values to a function, they are listed in parentheses in the function definition
//a function can return a value back to the code that called it. The return statement is used to return a value from a function
//theres more to functions but thats all beginner stuff

function calculateGravity(g, m, r) {
  return g*((m)/r^2);
}

let result = calculateGravity(6.674*10^-11, 6.417*10^23, 1.149*10^13);
console.log(result);

//#4
const calculateGravity2 = (g, m, r) => g*((m)/r^2);
let result2 = calculateGravity2 (4, 6, 8);
console.log(result2);

//#5 - arrays

const videogames = ["Fortnite", "Minecraft", "Rocket League", "The Finals", "Call of Duty", "Among Us", "Zelda Breath of the Wild", "Final Fantasy VII", "Devil May Cry", "Red Dead Redemption", "Elden Ring", "Pokemon ORAS", "Omori", "Stardew Valley","Terraria"];
console.log(videogames.length);
console.log(videogames[0]);
console.log(videogames[14]);

//I asked google how to get a random element and this is what it told me to do
let randomIndex = Math.floor(Math.random()*videogames.length);
console.log(videogames[randomIndex]);

videogames.sort();
console.log("sorted array:", videogames);

videogames.push("Marvel Rivals")
console.log(videogames);

videogames.push(67);
console.log(videogames[16]);

//#6
//im guessing for this one you create an empty array first and then add the numbers later

const randomNum = [];
for (let i = 0; i<10; i++){
    let num = Math.floor(Math.random()*(87-29+1)) + 29;
    randomNum.push(num);
}

console.log(randomNum);

for (let i = 0; i<randomNum.length-1; i++){
    console.log(randomNum[i], randomNum[i+1])
    let x = randomNum[i]
    let y = randomNum[i+1]

    let difference = y-x;
    difference = Math.abs(difference);
    console.log(difference)

}





