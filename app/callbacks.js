// //named export
// const callBack = () => {
//     const doHomeWork = (subject, finishedHomeWork) => {
//         console.log(`Starting my ${subject} homework.`);
//         setTimeout(() => finishedHomeWork(), 4000);
//     };

//     const finishedHomeWork = () => {
//         console.log('I finished my homework.');
//     };

//     doHomeWork('math', finishedHomeWork); // callback function

// };

 // default export



const callback = ( ) => {
    const washCloths = (homeCloths, finishedWashing) => {
    console.log(`Start washing ${homeCloths} clothes.` );
    // setTimeout(() => finishedWashing(), 4000);
};
const finishedWashing = () => {
    console.log(`i finished washing.`);
};
washCloths('jeans', finishedWashing);

};
export default callback;
