document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tasks__form');
    const input = document.getElementById('task__input');
    const taskList = document.getElementById('tasks__list');

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(taskText => addTask(taskText));
    }

    function addTask(taskText) {
        const task = document.createElement('div');
        task.className = 'task';

        task.innerHTML = `
            <div class="task__title">${taskText}</div>
            <a href="#" class="task__remove">&times;</a>
        ;`

        // Обработчик уудаления только для новой задачи
        const removeButton = task.querySelector('.task__remove');
        removeButton.addEventListener('click', function(e) {
            e.preventDefault();
            task.remove();
            saveTasks();
        });
        taskList.appendChild(task);
    }

    function saveTasks() {
        const tasks = Array.from(taskList.children).map(task => task.querySelector('.task__title').innerText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    loadTasks();

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = input.value.trim();
        if (taskList) {
            addTask(taskText);
            saveTasks();
            input.value = ''; // Очищаем поле ввода
        } else {
            alert('Задача не может быть пустой!');
        }
    });

    // Обработка нажатия Enter в поле ввода 
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            form.dispatchEvent(new Event('submit'));
        }
    });
});