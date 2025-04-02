// Check the user's preference on page load
document.addEventListener("DOMContentLoaded", function() {
    const currentTheme = localStorage.getItem("theme");
    
    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode"); // Set dark mode as default
    } else if (currentTheme === "light") {
        document.body.classList.remove("dark-mode"); // Set light mode
    } else {
        // If no preference is stored, default to dark mode
        document.body.classList.add("dark-mode");
    }

    // Listen for the theme toggle button click
    const toggleButton = document.getElementById("theme-toggle");
    if (toggleButton) {
        toggleButton.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");

            // Store the user's preference in localStorage
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
    }
});
