// document.getElementById("form").addEventListener("submit", (event) => {
//     event.preventDefault();
//     alert("Form submitted!");
// });
const nameInput = document.getElementById("user-name") as HTMLInputElement | null;
console.log(nameInput.value);

document.getElementById("form").addEventListener("submit", (event) => {
    const name: string | null = nameInput.value;
    event.preventDefault();
    alert(`name is ${name}`);

    console.log(name);
});




