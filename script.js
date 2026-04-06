const root = document.documentElement;
const hero = document.querySelector('.hero-section');
const revealElements = document.querySelectorAll('.reveal');

function updateParallax(event) {
    const x = (event.clientX / window.innerWidth - 0.5) * 20;
    const y = (event.clientY / window.innerHeight - 0.5) * 20;
    hero.style.setProperty('--mouse-x', `${x}px`);
    hero.style.setProperty('--mouse-y', `${y}px`);
}

function createAshParticles() {
    const container = document.querySelector('.ash-clouds');
    const count = 28;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('span');
        const size = Math.random() * 5 + 4;
        particle.className = 'ash-particle';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 12 + 10}s`;
        particle.style.animationDelay = `${Math.random() * -8}s`;
        container.appendChild(particle);
    }
}

function revealOnScroll() {
    const offset = window.innerHeight * 0.82;
    revealElements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < offset) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('mousemove', updateParallax);
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
    createAshParticles();
    revealOnScroll();
});
