console.log("Hello World ...")


let userName: string;
let age: number;
let height = 180;

// height = "kdjf";


userName = "John";
age = 20;
console.log(userName);
console.log(age);
console.log(height);

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(1, 2));

let addVar = (a: number, b: number): number => {
    return a + b;
}
console.log(addVar(1, 2));
