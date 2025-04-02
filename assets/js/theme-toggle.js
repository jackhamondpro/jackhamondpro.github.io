document.addEventListener("DOMContentLoaded", function() {
    // By default, add dark mode
    document.body.classList.add("dark-mode");

    // Toggle dark and light mode
    const toggleButton = document.getElementById("theme-toggle");
    if (toggleButton) {
        toggleButton.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");
        });
    }
});
