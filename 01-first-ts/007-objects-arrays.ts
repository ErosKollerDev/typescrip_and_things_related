type User = { name: string, age: number, city?: string, hobbies?: string[], role?: { type: string, desc: string } };

let user: User = {name: "John", age: 30, city: "New York"};
// user = {name: "Jane", age: 25, hobbies: ["reading", "swimming"]};
user = {name: "Bob", age: 40, role: {type: "admin", desc: "can do anything"}};

// means any value that is not null or undefined
let val: {} = 'some text';
type AnyObject = { name: string };
let data: Record<string, number | string>;

data = {name: "John", age: 30};

console.log(data);