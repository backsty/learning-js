'use strict';

const revealElement = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    revealElement.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
            element.classList.add('reveal_active');
        }
    });
});