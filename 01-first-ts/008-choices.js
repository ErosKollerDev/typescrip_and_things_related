var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["EDITOR"] = 1] = "EDITOR";
    Role[Role["USER"] = 2] = "USER";
    Role[Role["GUEST"] = 3] = "GUEST";
})(Role || (Role = {}));
var role = Role.ADMIN;
console.log(role);
var roleUser = "ADMIN";
var places = 1;
var kafkaAck = 0;
var role2 = "USER";
console.log(role2);
function acces(role) {
    console.log("Access granted");
}
acces(roleUser);
function checkUserAccess(user) {
    if (user.role === "ADMIN") {
        acces(user.role);
    }
    else {
        console.log("Access denied");
    }
}
var userAdmin = {
    name: "John",
    age: 36,
    role: 'EDITOR'
};
checkUserAccess(userAdmin);
