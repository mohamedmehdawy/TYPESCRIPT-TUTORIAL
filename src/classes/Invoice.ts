// classes
export class Invoice {
    constructor(
        readonly client:string,
        private details: string,
        public amount: number,
    ) {}

    format() {
        return `${this.client} and have ${this.amount}$, ${this.details}`;
    }
}