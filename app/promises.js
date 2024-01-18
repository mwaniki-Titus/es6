// export const promise1 = () => {
// example 1
export const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 1 failed');
    }, 2000);
}).then((data) =>
    console.log(`Promise resolved with data: ${data}`)
).catch((error) => {
    console.log(`Promise rejected with error: ${error}`)
});

export const promise2 = () => {
    let empty_tank = function () {
        return new Promise(function (resolve, reject) {
            console.log('empty tank...');
            setTimeout(() => resolve("The car doesn't have enough fuel."), 2000);
        })
    }
    let flat_tire = function (msg) {
        return new Promise(function (resolve, reject) {
            console.log('flat tire...');
            setTimeout(() => resolve(msg + " The car has a flat tire."), 2000);
        })
    }
    let travel = function (msg) {
        return new Promise(function (resolve, reject) {
            console.log('travel..')
            setTimeout(() => reject(`${msg} The car is not safe for traveling.`), 2000);
        })
    }
    empty_tank().then(function (result) {
        return flat_tire(result);
    }).then(function (result) {
        return travel(result);
    }).then(function (result) {
        console.log(`wE ARE dONE...${result}`);
        empty_tank();
    }).catch(function (error) {
        console.log(`Error: ${error}`);
    })

};