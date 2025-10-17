enum Role {
    ADMIN,
    EDITOR,
    USER,
    GUEST
}

let role: Role = Role.ADMIN;

console.log(role);


// Another way to express Enum in typescript
type ROLES = "ADMIN" | "EDITOR" | "USER" | "GUEST";
let roleUser: ROLES = "ADMIN";
let places: 1 | 2 | 3 = 1;
let kafkaAck: -1 | 0 | 1 = 0;

let role2 = "USER";
type User = {
    name: string;
    age: number;
    role: ROLES;
}
console.log(role2);

function acces(role: ROLES) {
    console.log("Access granted");
}
acces(roleUser);


function checkUserAccess(user: User) {
    if (user.role === "ADMIN") {
        acces(user.role);
    }else{
        console.log("Access denied");
    }
}
let userAdmin: User = {
    name: "John",
    age: 36,
    role: 'EDITOR'
}
checkUserAccess(userAdmin);