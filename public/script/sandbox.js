"use strict";
let greet;
greet = () => {
    console.log("hello");
};
function add(a, b, c = 10) {
    console.log(c);
    console.log(a + b);
}
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 20);
