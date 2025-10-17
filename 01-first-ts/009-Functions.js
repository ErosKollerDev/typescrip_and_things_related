function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
function log() {
    console.log("Hello World");
}
log();
function logAndThrow(message) {
    console.log(message);
    throw new Error("Something went wrong");
}
// logAndThrow("Calling never function");
function performSomething(cb) {
    console.log("Performing something");
    return cb("Callback function executed");
}
var myFunc = function (msg) { return console.log("Callback function: ".concat(msg)); };
performSomething(myFunc);
var cbTest = function () { return console.log("Callback function"); };
// setTimeout(cbTest, 2000);
// setInterval(cbTest, 2000);
// let birth = new Date(1976, 10, 14);
var calculateAge = function (birth) {
    var today = new Date();
    var age = today.getFullYear() - birth.getFullYear();
    var monthDiff = today.getMonth() - birth.getMonth();
    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
};
var eros = {
    name: "Eros",
    birth: new Date(1976, 10, 14),
    age: calculateAge
};
console.log(eros.age(eros.birth));
var valueToPay = null;
valueToPay = 100;
console.log(valueToPay);
