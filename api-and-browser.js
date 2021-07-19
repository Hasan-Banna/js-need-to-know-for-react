//JASON convert
const person = {
    name: 'Abdul',
    age: 25
};

const data = JSON.stringify(person); //sorasori property access kora jabe na

// json to object
const dataParse = JSON.parse(data);

// localStorage.setItem('userId', 1245);
const userId = localStorage.getItem('userId');
console.log(userId);
localStorage.setItem('person', JSON.stringify(person));
const storedPerson = localStorage.getItem('person');
const parsePerson = JSON.parse(storedPerson);
console.log(parsePerson.age);

const keys = Object.keys(parsePerson); //object er moddhe ki ki property ase dekhabe
console.log(keys);

const values = Object.values(parsePerson); //property er value gula dekhabe
console.log(values);