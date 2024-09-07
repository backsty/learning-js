function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function getCookie(name) {
    return document.cookie.split('; ')
        .reduce((acc, current) => {
            const [key, value] = current.split('=');
            return key === name ? decodeURIComponent(value) : acc;
    }, '');
}

window.onload = () => {
    const modal = document.getElementById('subscribe-modal');
    const closeButton = document.querySelector('.modal__close');

    if (!getCookie('modalClosed')) {
        modal.classList.add('modal_active');
    }

    closeButton.addEventListener('click', () => {
        modal.classList.remove('modal_active');
        setCookie('modalClosed', 'true', 365);
    });
};