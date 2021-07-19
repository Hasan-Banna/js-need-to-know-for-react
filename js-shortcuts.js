const money = 150;
const active = true;
let food;
if (money > 100) {
    food = 'biriyani';
}
else{
    food = 'alu vorta';
}
// ternary: uporer if else take shortcut e ek line e kora jay
// condition ? true value : false value
let food = money > 100 ? 'biriyani' : 'alu vorta';

if(active === true){
    cssClass = 'active';
}
else{
    cssClass = 'inactive';
}
//uporer tar poriborte nicher eita shortcut e lekha jay
const cssClass = active ? 'active' : 'inactive';

// function call shortcut
active ? displayUser() : hideUser()

//
const x = active && 5; //active tru hole 5 e jabe
const y = active || 5; // active er value false hole 5 e jabe

//string to number
const  number = +'45';
// number to string
const numText = 45 + '';

// function default value
function add(num1, num2=5){ //5 default value
    //num2 = num2 || 5;
    return num1 + num2;
}
add(45); // kono parameter na dile default value niye kaj korbe