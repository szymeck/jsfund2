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




function cutFruitPieces(fruit) {
    return fruit * 4;

}
function fruitProcessor(apple, oranges) {
    const applePieces = cutFruitPieces(apple)
    const orangePieces = cutFruitPieces(oranges)
    const juice = `juice with ${applePieces} apples pieces and ${orangePieces} orange pieces`;
    return juice;
}

console.log(fruitProcessor(2, 3));

const calceAge = function (birthYear) {
    return 2021 - birthYear;
}

const yearUntilRetirement = function (birthYear, firstName) {
    const age = calceAge(birthYear)
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement
    }
    else {
        console.log(`${firstName} has already retired`);
        return -1;
    }


    return retirement;
    // return `${firstName} retires in ${retirement} years`
}
console.log(yearUntilRetirement(1987, 'szymi'));
console.log(yearUntilRetirement(1950, 'mati'));