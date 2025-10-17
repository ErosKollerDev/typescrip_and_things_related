type User = { name: string, age: number, city?: string, hobbies?: string[], role?: { type: string, desc: string } };

let user: User = {name: "John", age: 30, city: "New York"};


console.log(user);

user = {name: "Jane", age: 25, hobbies: ["reading", "swimming"]};

console.log(user);

user = {name: "Bob", age: 40, role: {type: "admin", desc: "can do anything"}};
console.log(user);