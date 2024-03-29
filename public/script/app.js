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
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value == "invoice")
        doc = new Invoice(...values);
    else
        doc = new Payment(...values);
    list.render(doc, type.value, "start");
});
// tuples
let arr = ["mohamed", 21, true];
arr[0] = "mohamed";
console.log(arr);
