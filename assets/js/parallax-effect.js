// Use a simple parallax effect for background
document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const background = document.querySelector('.hero');
    background.style.transform = 'translateY(' + scrollPosition * 0.2 + 'px)';
});
