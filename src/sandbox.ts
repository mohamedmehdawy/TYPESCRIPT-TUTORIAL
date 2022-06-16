// let greet: Function;

let greet: (a: string, b: boolean) => void;

greet = (name: string, status: boolean): void => {
    console.log(`my name is: ${name} and status is: ${status}`);
};

// -----------

let calc: (a: number, b: number, c: string) => number;

calc = (numberOne: number, numberTwo: number, action: string): number => {
    if (action == "add") return numberOne + numberTwo;
    else return numberOne - numberTwo;
};

// -------

let userInfo: (x: { name: string; age: number }) => void;

type person = { name: string; age: number }

userInfo = (user: person): void => {
    console.log(`${user.name} and have ${user.age}`);
};
