const signinForm = document.getElementById('signin__form');
const signinButton = document.getElementById('signin__btn');
const welcomeBlock = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');
const logoutButton = document.getElementById('logout-button');

window.onload = () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
        showWelcome(userId);
    }
};

signinButton.addEventListener('click', (event) => {
    event.preventDefault();

    const formData = new FormData(signinForm);
    const login = formData.get('login');
    const password = formData.get('password');

    fetch('https://students.netoservices.ru/nestjs-backend/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login, password })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Ошибка при авторизации');
        }
    })
    .then(data => {
        if (data.success) {
            localStorage.setItem('userId', data.user_id);
            showWelcome(data.user_id);
        } else {
            alert('Неверный логин или пароль!');
        }
    })
    .catch(error => {
        console.error('Ошибка при отправке запроса: ', error);
        alert('Произошла ошибка. попробуйте позже.');
    })
});

function showWelcome(userId) {
    signinForm.style.display = 'none';
    welcomeBlock.style.display = 'block';
    userIdSpan.textContent = userId;

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('userId');
        hideWelcome();
    });
}

function hideWelcome() {
    signinForm.style.display = 'block';
    welcomeBlock.style.display = 'none';
}