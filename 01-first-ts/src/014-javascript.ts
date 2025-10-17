const user = {
    name: "John",
    age: 36,
}
console.log(user);
const anotherUser = {...user};
console.log(anotherUser);

console.log(user === anotherUser);


const add = (a: number, b: number) => a + b;
console.log(add(1, 2));

function addMultiples(...numbers: number[]) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(addMultiples(1, 2, 3, 4));
const _arrays = [1, 2, 3, 4];
const anotherArray = [11,12,13,..._arrays];
console.log(anotherArray);

