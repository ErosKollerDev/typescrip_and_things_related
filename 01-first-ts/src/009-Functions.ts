function add(a: number, b: number): number {
    return a + b;
}

console.log(add(1, 2));


function log(): void{
    console.log("Hello World");
}

log();

function logAndThrow(message: string): never {
    console.log(message);
    throw new Error("Something went wrong");
}

// logAndThrow("Calling never function");


function performSomething(cb: (msg : string) => void) {
    console.log("Performing something");
    return cb("Callback function executed");
}
let myFunc = (msg: string) => console.log(`Callback function: ${msg}`);
performSomething(myFunc);

 let cbTest = () => console.log(`Callback function`);
// setTimeout(cbTest, 2000);
// setInterval(cbTest, 2000);


// let birth = new Date(1976, 10, 14);

let  calculateAge = (birth:Date):number =>  {
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

type Person = {
    name: string;
    birth: Date;
    age: (birth:Date) => number;
}

let eros : Person = {
    name: "Eros",
    birth: new Date(1976, 10, 14),
    age:calculateAge
}

console.log(eros.age(eros.birth));


let valueToPay : number | null = null;

valueToPay = 100;

console.log(valueToPay);