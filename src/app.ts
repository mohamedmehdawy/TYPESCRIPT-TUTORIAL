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

// generic

function addUID<T, K>(obj: T, objTwo:K) {
    const uuid = Math.floor(Math.random() * 100);
    return { ...obj, ...objTwo,uuid };
}

const docOne = addUID({ name: "mohamed", age: 21 }, {game: "valo", sur: 25});

console.log(docOne);


// generic with interface
interface Resource<Type, K> {
    name: string;
    age: K;
    data: Type;
}

const docTwo: Resource<string[], number> = {
    name: "mohamed",
    age: 20,
    data: ["game"],
};

const docThree: Resource<number, number> = {
    name: "ahmed",
    age: 21,
    data: 2002,
};

console.log(docTwo, docThree)
