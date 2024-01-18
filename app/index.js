// import callback from "./callbacks.js";
// callback();

// import { promise1, promise2 } from './promises.js';

// // promise1();
// promise2();
// import { rest, rest2 } from "./rest.js";
// rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//Destructuring : The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
import { fetchManyData } from './destructuring.js';

Destructuring();
let newTodos = await fetchManyData();

newTodos && newTodos.forEach((todo) => {
    console.log(`------------------`);
    console.log(todo.title);
    console.log(todo.completed);
    console.log(`------------------`);
});