const add = document.querySelectorAll('.add');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const newsletterForm = document.querySelector('#newsletter-form');
const newsletterEmail = document.querySelector('#newsletter-email');
const menuItems = document.querySelectorAll('.menu-item');
const navLinks = document.querySelectorAll('.nav-menu ul li a');

add.forEach(e => {
    e.addEventListener('click', () => {
        const p = e.previousElementSibling.querySelector('p');
        const plusIcon = e.querySelector('.fa-plus');
        const minusIcon = e.querySelector('.fa-minus');

        // Toggle visibility of answer
        p.classList.toggle('show');
        // Toggle icons
        plusIcon.classList.toggle('hide');
        minusIcon.classList.toggle('hide');
    });
});

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterEmail.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    } else {
        alert('Please enter a valid email address.');
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.2 });

menuItems.forEach(item => {
    observer.observe(item);
});

document.querySelectorAll('.qns .add').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.parentElement.querySelector('p');
        const plusIcon = button.querySelector('.fa-plus');
        const minusIcon = button.querySelector('.fa-minus');

        if (answer.classList.contains('hide')) {
            answer.classList.remove('hide');
            answer.classList.add('show');
            plusIcon.classList.add('hide');
            minusIcon.classList.remove('hide');
        } else {
            answer.classList.remove('show');
            answer.classList.add('hide');
            plusIcon.classList.remove('hide');
            minusIcon.classList.add('hide');
        }
    });
});
