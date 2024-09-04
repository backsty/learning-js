document.getElementById('form').onsubmit = function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('file');
    const progress = document.getElementById('progress');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

    xhr.upload.onprogress = function(event) {
        const percentComplete = (event.loaded / event.total) * 100;
        progress.value = percentComplete / 100;
    };

    xhr.onload = function() {
        if (200 <= xhr.status && xhr.status < 300) {
            console.log('Файл успешно загружен!');
        } else {
            console.error('Произошла ошибка при загрузке файла!');
        }
    };

    xhr.onerror = function() {
        alert('Ошибка запроса!');
    }

    xhr.send(formData);
}
