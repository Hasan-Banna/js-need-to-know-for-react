const numbers = [2, 4, 3, 5, 6];
const friends = ['Rafiq', 'jabbar', 'Barkat'];
const products = [
    {id: 1, name: 'Laptop', price: 500},
    {id: 2, name: 'Mobile', price: 200},
    {id: 3, name: 'watch', price: 100},
    {id: 4, name: 'Tablet', price: 300}
];

// map: kono ekta array er moddhe onk gula object ase sei object theke kon ekta property niye ashte map use korbo.
const names = products.map(product => product.name);
const prices = products.map(pd => pd.price); //ek line er moddhe korle return korar dorkar nei.
const price2 = products.map(pd => {
    return pd.price; //multiline arrow function likhle alada return korte hobe.
})
// console.log(price2);

// foreach: kono ekta object theke console log korbe ba kiso anbe jeta array er moto show korbe na.
// products.forEach(product => console.log(product.name));
// console.log(prices);

//filter
const cheaper = products.filter(pd => pd.price < 300);

//remove an item using filter
const remaining = products.filter(pd => pd.id != 3);
// console.log(remaining);

//find
const hasWatch = products.find(pd => pd.name === 'watch');
console.log(hasWatch);

//reduce

//includes

//push

//pop

//length

//indexOf