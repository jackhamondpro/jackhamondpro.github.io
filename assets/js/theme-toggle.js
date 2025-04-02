// Check the stored theme preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme'); // Get the saved theme from localStorage

    // If a theme is saved in localStorage, apply it
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    } else {
        // If no theme is saved, default to dark mode
        document.body.classList.add('dark-mode');
    }

    // Toggle the theme and save the preference in localStorage
    themeToggleButton.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode'); // Save light mode preference
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode'); // Save dark mode preference
        }
    });
});
