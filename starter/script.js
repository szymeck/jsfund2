// 'use strict';

// let hasDriversLicence = false;
// let passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log('i can drive')

// function logger() {
//     console.log('my name is jonas');

// }
// // calling running invoking function
// logger();
// logger();

// function fruitProcessor(apple, oranges) {
//     const juice = `juice with ${apple} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear) {
//     return 2021 - birthYear;
// }

// const age1 = calcAge1(1987);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//     return 2021 - birthYear;
// }
// const age2 = calcAge2(1987);
// console.log(age1, age2);

// const calcage3 = birthYear => 2021 - birthYear;
// const age3 = calcage3(1987);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearUntilRetirement(1987, "szymi"));
// console.log(yearUntilRetirement(1983, "mati"));




// function cutFruitPieces(fruit) {
//     return fruit * 4;

// }
// function fruitProcessor(apple, oranges) {
//     const applePieces = cutFruitPieces(apple)
//     const orangePieces = cutFruitPieces(oranges)
//     const juice = `juice with ${applePieces} apples pieces and ${orangePieces} orange pieces`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calceAge = function (birthYear) {
//     return 2021 - birthYear;
// }

// const yearUntilRetirement = function (birthYear, firstName) {
//     const age = calceAge(birthYear)
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement
//     }
//     else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }


//     return retirement;
//     // return `${firstName} retires in ${retirement} years`
// }
// console.log(yearUntilRetirement(1987, 'szymi'));
// console.log(yearUntilRetirement(1950, 'mati'));


// const friends = ['michael', 'steven', 'peter'];
// console.log(friends);

// const years2 = new Array(1991, 1984, 1984, 2004, 2020);

// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'jay';
// console.log(friends);

// const jonas = ['jonas', 'szmit', 2021 - 1991, 'teacher', friends];
// console.log(jonas);


// const calcAge2 = function (birthYear) {
//     return 2021 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge2(years[0]);
// const age2 = calcAge2(years[1]);
// const age3 = calcAge2(years[years.length - 1]);
// console.log(age1, age2, age3);
// const allAges = [age1, age2, age3];
// console.log(allAges);

const friends = ['michael', 'steven', 'peter'];
const newLength = friends.push('jay');
console.log(newLength);

friends.unshift('john');
console.log(friends);

friends.pop();
console.log(friends);
friends.shift();
console.log(friends);

console.log(friends.indexOf('steven'));
console.log(friends.includes('steven'));
console.log(friends.includes('bob'));

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['michael', 'szym', 'lol']
}
console.log(jonas);

console.log(jonas.lastName);

console.log(jonas['lastName']);

jonas.location = 'portugal';
jonas['twitter'] = '@jonas';

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const intrestedIn = prompt('What do you want to know about Me');

if (jonas[intrestedIn]) {
    console.log(jonas[intrestedIn]);
} else {
    console.log('wrong');
}

jonas.location = 'portugal';
jonas['twitter'] = '@jonas';
console.log(jonas);
// CHalenge, jonas have 3 friends, best is michael

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]} )`);