'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach(rotator => {
        const cases = document.querySelectorAll('.rotator__case');
        let activeIndex = 0;
        let timerId;

        function rotateCases() {
            cases[activeIndex].classList.remove('rotator__case_active');
            activeIndex = (activeIndex + 1) % cases.length;
            cases[activeIndex].classList.add('rotator__case_active');

            cases[activeIndex].style.color = cases[activeIndex].dataset.color || 'black';
        }

        timerId = setTimeout(rotateCases, cases[activeIndex].dataset.speed || 1000);

        clearInterval(timerId);

        timerId = setInterval(rotateCases, cases[activeIndex].dataset.speed || 1000);
    });
});