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
// enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOk"] = 20] = "BOOk";
    ResourceType[ResourceType["AUTHOR"] = 21] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 22] = "FILM";
})(ResourceType || (ResourceType = {}));
const myObj = {
    BOOK: 1,
};
const docOne = {
    uid: 10,
    resourceType: ResourceType.FILM,
    data: "mohamed"
};
console.log(docOne);
