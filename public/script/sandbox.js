"use strict";
// let greet: Function;
let greet;
greet = (name, status) => {
    console.log(`my name is: ${name} and status is: ${status}`);
};
// -----------
let calc;
calc = (numberOne, numberTwo, action) => {
    if (action == "add")
        return numberOne + numberTwo;
    else
        return numberOne - numberTwo;
};
// -------
let userInfo;
userInfo = (user) => {
    console.log(`${user.name} and have ${user.age}`);
};
