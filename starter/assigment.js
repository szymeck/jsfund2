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

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld2(population);
    const desciption = `${country} has ${population} milion people, which is about ${percentage}% of world`;
    return console.log(desciption);
}
describePopulation('poland', 39);

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (scored1, scored2, scored3, scorek1, scorek2, scorek3) {
    const avgDolphins = calcAverage(scored1, scored2, scored3);
    const avgKoalas = calcAverage(scorek1, scorek2, scorek3);
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`)
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ${avgKoalas} vs ${avgDolphins} `);
    }
    else {
        console.log(`No one win`);
    }
}
const winnerData1 = checkWinner(42, 23, 71, 65, 54, 49);
const winnerData2 = checkWinner(85, 54, 41, 23, 34, 27);