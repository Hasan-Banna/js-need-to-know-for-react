//variable: let, const
let money = 20; 
money = 12;
const name = 'Banna';

let isConfident = true; //boolean

const person = {                   //object
    name: 'Banna',
    age: 25,
    city: 'Dhaka'
}

const statement = `this person ${name} with age ${person.age}`; //object theke data ana template string


//condition
if(money > 20 && age > 45) {

}
else{

}

// array
const numbers = [34, 23, 16];
const friends = ['Shakil', 'sharif', 'sadat'];
const products = [{name: 'laptop', price: 500}, {name: 'Mobile', price: 200}, {name: 'Watch', price: 100}]; //array object

//loop: for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    
}

//function: regular, arrow
function add (num1, num2){
    return num1 + num2;
}

const result = add(45, 65);

//arrow
const add2 = (num1, num2) => num1 + num2; //2ta parameter
const fiveTimes = num => num * 5; //single parameter 
const doMath = (x, y) => {    //ekadhik line er arrow function
    const sum = x + y;
    return sum * 2;
}