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

const populations = [39, 60, 200, 300];
console.log(populations.length === 4);
const percentages = [(populations[0] / 7900 * 100), (populations[1] / 7900 * 100), (populations[2] / 7900 * 100), (populations[3] / 7900 * 100)];
console.log(percentages);

const populations2 = [10, 20, 30, 40, 50];
console.log(populations2.length === 4);

const percentages2 = [percentageOfWorld1(populations2[0]), percentageOfWorld1(populations2[1]), percentageOfWorld1(populations2[2]), percentageOfWorld1(populations2[3]), percentageOfWorld1(populations2[4])];
console.log(percentages2);

const neighbours = ['belarus', 'germany', 'france'];
neighbours.push('utopia');
neighbours.pop();

if (neighbours.includes('germany')) {
    console.log('You are in center of Europe');
}
else {
    console.log('not in central Europe');
};

neighbours[1] = 'Republic of germany';

console.log(neighbours);

// const bill = 430;
// const tip = (bill >= 50 && bill <= 300) ? (bill * (15 / 100)) : (bill * (20 / 100));
// console.log(`The bill was${bill}, the tip was ${tip} and the total value is ${bill + tip}`);


const calcTip = function (bill) {
    const tip = (bill >= 50 && bill <= 300) ? (bill * (15 / 100)) : (bill * (20 / 100));
    return tip;
};
console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(total);

const myCountry = {
    country: 'poland',
    capital: 'warsaw',
    language: 'polish',
    population: 39,
    neighbours: 3,
};
myCountry.population = (myCountry.population + 2);
myCountry['population'] = (myCountry.population + 2);

console.log(`${myCountry.country} has ${myCountry.population} milion ${myCountry.language}-speaking people, ${myCountry.neighbours} neigbours contries and a capital called ${myCountry.capital} `);

