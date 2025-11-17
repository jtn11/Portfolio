// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Copy email functionality
function copyEmail() {
    const email = 'jatinsainii2003@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const message = document.getElementById('copyMessage');
        message.textContent = 'Email copied to clipboard!';
        setTimeout(() => {
            message.textContent = '';
        }, 2000);
    });
}

// Animate skill bars on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('style').split('width:')[1];
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-progress').forEach(bar => {
    observer.observe(bar);
});
