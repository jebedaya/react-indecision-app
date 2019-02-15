// arguments object - no longer bound with arrow functions

const add =  (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Yehuda',
    cities: ['Tel-Aviv', 'Modiin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // return cityMessages
    }
};
console.log(user.printPlacesLived());

//Challenge area

const multiplier =  {
    numbers: [4, 6, 8],
    multiplyBy: 6,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};
console.log(multiplier.multiply());
