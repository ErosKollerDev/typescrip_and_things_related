let hobbies = ["Sports", "Cooking", "Reading"];
// hobbies.push(10);

console.log(hobbies);

hobbies.forEach((item) => console.log(item));


// let numbers: (number | string)[] = [1, 2, 3, 4, 5, "6"];
let numbers: Array<number | string> = [1, 2, 3, 4, 5, "6"];

numbers.forEach((item) => console.log(item));


//Tuples
let possibleNumbers: [number, string, boolean] = [1, "Hello", true];

console.log(possibleNumbers);