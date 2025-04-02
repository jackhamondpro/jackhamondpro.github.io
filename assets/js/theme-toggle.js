// theme-toggle.js
const toggleButton = document.querySelector("#theme-toggle");

// Check if the user prefers dark mode (system preference)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark-mode");
}

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
