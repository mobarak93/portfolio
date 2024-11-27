// Smooth Scroll to Sections
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Theme Toggle (Light/Dark Mode)
const themeToggleButton = document.getElementById('themeToggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggleButton.textContent = document.body.classList.contains('dark-theme') 
        ? 'Light Mode' 
        : 'Dark Mode';
});

// Animation on Scroll
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});
