import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value == "invoice")
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    else
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    list.render(doc, type.value, "start");
});
// generic
function addUID(obj, objTwo) {
    const uuid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign(Object.assign({}, obj), objTwo), { uuid });
}
const docOne = addUID({ name: "mohamed", age: 21 }, { game: "valo", sur: 25 });
console.log(docOne);
const docTwo = {
    name: "mohamed",
    age: 20,
    data: ["game"],
};
const docThree = {
    name: "ahmed",
    age: 21,
    data: 2002,
};
console.log(docTwo, docThree);
