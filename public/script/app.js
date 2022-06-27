"use strict";
// classes
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} and have ${this.amount}$, ${this.details}`;
    }
}
const invoceOne = new Invoice("mohamed", "from egypt", 200);
const invoceTwo = new Invoice("elsayed", "from egypt", 500);
console.log(invoceOne.client);
const invoces = [];
invoces.push(invoceOne);
invoces.push(invoceTwo);
invoces.forEach(ele => {
    console.log(ele.format());
});
