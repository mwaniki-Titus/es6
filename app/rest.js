// what is rest operator in javascript?
// rest parameter is used to get the rest of the parameters
export const rest = (a, b, ...args) => {
    console.log(`a = ${a}, b = ${b}`);
    console.log(typeof args);
    args.forEach((arg) => {
        console.log(arg);
    });
}

// example of rest operator & reducer method

export const rest2 = (...args) => {
    return args.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
        //accumulater : 0, currentValue : 1
        //accumulater : 1, currentValue : 2
        //accumulater : 3, currentValue : 3
        //accumulater : 6, currentValue : 4
    });
}