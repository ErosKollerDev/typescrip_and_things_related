// document.getElementById("form").addEventListener("submit", (event) => {
//     event.preventDefault();
//     alert("Form submitted!");
// });
var nameInput = document.getElementById("user-name");
console.log(nameInput.value);
document.getElementById("form").addEventListener("submit", function (event) {
    var name = nameInput.value;
    event.preventDefault();
    alert("name is ".concat(name));
    console.log(name);
});
