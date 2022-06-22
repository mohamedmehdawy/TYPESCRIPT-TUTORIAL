"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} and have ${this.amount}$, ${this.details}`;
    }
}
const invoceOne = new Invoice("mohamed", "from egypt", 200);
const invoceTwo = new Invoice("elsayed", "from egypt", 500);
const invoces = [];
invoces.push(invoceOne);
console.log(invoces);
