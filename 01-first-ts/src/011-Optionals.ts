type User = {
    name: string,
    age?: number,
    height?: number,
    weight?: number,
    address?: {
        street: string,
        city: string,
        state: string
    }
}


let user: User = {
    name: "John",
    age: 36,
    height: 180,
    weight: 80,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
}

console.log(user);

let input = "eros";
const didProvideInput = input ?? false;
console.log(didProvideInput);


let inputv2 = null;
const didProvide = inputv2 ?? 'neh';
console.log(didProvide);


function add(a: number, b: number) {
    return a + b;
}