const me = {
    name: "mohamed",
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`amount is ${amount}`);
        return amount;
    },
};
import { Invoice } from "./classes/Invoice.js";
const invoceOne = new Invoice("mohamed", "from egypt", 200);
const invoceTwo = new Invoice("elsayed", "from egypt", 500);
console.log(invoceOne.client);
const invoces = [];
invoces.push(invoceOne);
invoces.push(invoceTwo);
invoces.forEach((ele) => {
    console.log(ele.format());
});
