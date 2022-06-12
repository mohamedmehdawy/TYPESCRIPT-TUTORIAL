let greet: Function;

greet = () => {
    console.log("hello");
};

function add(a: number, b: number, c: number | string = 10): void {
    console.log(c);
    console.log(a + b);
}

const minus = (a: number, b: number): number => {
    return a + b;
};

let result = minus(10, 20);

