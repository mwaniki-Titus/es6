export const Destructuring = () => {
    const person = {
        name: 'John',
        age: 28,
        location: {
            city: 'New York',
            temp: 92
        }
    };
    // console.log(person.name);

    const { name, age, location } = person;
    console.log(`My name ${name} , I'm ${age} years old and I live in ${location.city} whose temp is ${location.temp}.`);

};


export const fetchManyData = async () => {
    // es6
    // console.log("started fetching data");
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const formatedResponse = await response.json();
    // console.log("stated fetching data");
    let destructuredResponse = [{}];
    await formatedResponse && formatedResponse.forEach((todo) => {
        let { title, completed } = todo;
        destructuredResponse.push({ title, completed });
    });
    return destructuredResponse;
}