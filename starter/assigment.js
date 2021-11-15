'use strict ';

function describeCountry(country, population, capitalCity) {
    const countrys = `${country} has ${population} milion people and its capitals city is ${capitalCity}`;
    return countrys;
}
const countryCheck = describeCountry('germany', 60, 'berlin');
console.log(countryCheck);

function percentageOfWorld1(population) {
    const percent = population / 7900 * 100;
    return percent;
}

const percentageOfWorld2 = function (population) {
    const percent = population / 7900 * 100;
    return percent;

}

const percentageOfWorld3 = population => population / 7900 * 100;
const percPol = percentageOfWorld3(39);
const percGer = percentageOfWorld3(60);
const percUkr = percentageOfWorld3(55);
console.log(percPol, percGer, percUkr);