// document.getElementById("form").addEventListener("submit", (event) => {
//     event.preventDefault();
//     alert("Form submitted!");
// });
const nameInput = document.getElementById("user-name") as HTMLInputElement | null;

// Safely access value only if the element exists
if (nameInput) {
  console.log(nameInput.value);
}

const form = document.getElementById("form") as HTMLFormElement | null;

// Add listener only if the form exists
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name: string | null = nameInput ? nameInput.value : null;
  alert(`name is ${name}`);
  console.log(name);
});




