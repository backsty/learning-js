document.addEventListener('DOMContentLoaded', function() {
    const cookie = document.getElementById('cookie');
    const counterElement = document.getElementById('clicker__counter');
    const speedElement = document.getElementById('click-speed');

    let counter = 0;
    let lastClicktime = new Date();
    let flag = true;

    cookie.style.width = '200px';
    cookie.style.height = '200px';

    cookie.addEventListener('click', function() {
        counter++;
        counterElement.textContent = counter;

        if (flag) {
            cookie.style.width = `${parseInt(cookie.style.width) + 10}px`;
            cookie.style.height = `${parseInt(cookie.style.height) + 10}px`;
        } else {
            cookie.style.width = `${parseInt(cookie.style.width) - 10}px`;
            cookie.style.height = `${parseInt(cookie.style.height) - 10}px`;
        }
        flag = !flag;

        // обновление скорости клика
        const currentTime = new Date();
        const elapsedTime = (currentTime - lastClicktime) / 1000;
        const speed = 1 / elapsedTime;
        speedElement.textContent = speed.toFixed(2);
        lastClicktime = currentTime;
    });
});