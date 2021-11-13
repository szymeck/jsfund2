'use strict';

let hasDriversLicence = false;
let passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log('i can drive')

function logger() {
    console.log('my name is jonas');

}
// calling running invoking function
logger();
logger();

function fruitProcessor(apple, oranges) {
    const juice = `juice with ${apple} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);