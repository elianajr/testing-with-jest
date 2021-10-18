// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * `${JPY}`;
    return valueInYen;
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * `${USD}`;
    return valueInDollar;
}



const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * `${GBP}`;
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar }