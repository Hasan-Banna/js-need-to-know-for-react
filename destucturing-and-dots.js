//array destructuring
const numbers = [54, 92];
// const x = numbers[0];
// const y = numbers[1];
// const [x, y] = numbers;
// console.log(x,y);

function boxify(num1){
    return [num1, num1 + 5]; //array return korbe
}

const [box1, box2] = boxify(8);
//console.log(box1,box2);

//Object Destructuring

// const person = {id: 1, money: 500, name: 'Jakir', age: 56};
const {name, age} = {id: 1, money: 500, name: 'Jakir', age: 56};

// console.log(name, age);
// console.log(name, age);

//create object shortcut
const x = 25;
const y = 35;
// const obj = {x: x, y: y};
const obj = {x, y};
// console.log(obj).

// new array create using three dots
// numbers.push(56); ager numbers array er moddhe 56 add hobe
const newNumbers = [...numbers, 56]; //ager numbers array ta niye ashbe and 56 add hobe