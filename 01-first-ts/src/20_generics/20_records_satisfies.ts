let someObj: Record<string, string>;

someObj = {name: "John", surname: "Smith"};

// satisfies ....
console.log(someObj.zipCode);

let user =
    {name: "John", surname: "Smith", age: "20"}  satisfies  Record<string, string>;
