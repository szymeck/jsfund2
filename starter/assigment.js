'use strict ';

function describeCountry(country, population, capitalCity) {
    const countrys = `${country} has ${population} milion people and its capitals city is ${capitalCity}`;
    return countrys;
}
const countryCheck = describeCountry('germany', 60, 'berlin');
console.log(countryCheck);