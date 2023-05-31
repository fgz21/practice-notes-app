///button primary

const button = document.getElementById("menu-1");
const dropdown = document.querySelector(".origin-top-right-1");

button.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});

//button register secundary

const button2 = document.getElementById("menu-2");
const dropdown2 = document.querySelector(".origin-top-right-2");

button2.addEventListener("click", () => {
  dropdown2.classList.toggle("hidden");
});
