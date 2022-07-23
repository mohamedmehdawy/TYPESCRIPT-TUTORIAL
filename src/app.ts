import { HasFormatter } from "./interfaces/HasFormatter.js";
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list instance
const ul = document.querySelector("ul") as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value == "invoice")
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    else doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);

    list.render(doc, type.value, "start");
});

// enums
enum ResourceType {
    BOOk = 20,
    AUTHOR,
    FILM
}

const myObj = {
    BOOK: 1,
} as const
interface Resouce<T> {
    uid: number,
    resourceType: ResourceType,
    data: T
}

const docOne: Resouce<string> = {
    uid: 10,
    resourceType: ResourceType.FILM,
    data: "mohamed"
}
console.log(docOne)