// classes
class Invoice {
    constructor(
        readonly client:string,
        private details: string,
        public amount: number,
    ) {}

    format() {
        return `${this.client} and have ${this.amount}$, ${this.details}`;
    }
}

const invoceOne: Invoice = new Invoice("mohamed", "from egypt", 200);

const invoceTwo: Invoice = new Invoice("elsayed", "from egypt", 500);
console.log(invoceOne.client)
const invoces: Invoice[] = [];
invoces.push(invoceOne); 
invoces.push(invoceTwo); 

invoces.forEach(ele => {
    console.log(ele.format())
})
