// interface
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: "mohamed",
    age: 20,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        console.log(`amount is ${amount}`);
        return amount;
    },
}

import { Invoice } from "./classes/Invoice.js";

const invoceOne: Invoice = new Invoice("mohamed", "from egypt", 200);

const invoceTwo: Invoice = new Invoice("elsayed", "from egypt", 500);
console.log(invoceOne.client);
const invoces: Invoice[] = [];
invoces.push(invoceOne);
invoces.push(invoceTwo);

invoces.forEach((ele) => {
    console.log(ele.format());
});
