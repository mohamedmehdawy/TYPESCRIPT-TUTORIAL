// classes
class Invoice {
    client: string;
    details: string;
    amount: number;
    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} and have ${this.amount}$, ${this.details}`;
    }
}

const invoceOne: Invoice = new Invoice("mohamed", "from egypt", 200);
const invoceTwo: Invoice = new Invoice("elsayed", "from egypt", 500);

const invoces: Invoice[] = [];
invoces.push(invoceOne);
console.log(invoces);
