// theme-toggle.js
const toggleButton = document.querySelector("#theme-toggle");

// Check if the user has a system preference for dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark-mode");
}

// Add event listener for toggling dark/light mode manually
toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  
  // Save the user's preference in localStorage so it's remembered
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Check if the user previously set a theme preference (from localStorage)
const userTheme = localStorage.getItem("theme");
if (userTheme) {
  if (userTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}
