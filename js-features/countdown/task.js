document.addEventListener('DOMContentLoaded', function() {
    const timerElement = document.getElementById('timer');
    const downloadButton = document.getElementById('downloadButton');
    let timerSeconds = parseInt(timerElement.textContent, 10);
    let timerInterval = null;

    function formatTime (seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds =  seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    function updateTimer () {
        if (timerSeconds > 0) {
            timerSeconds--;
            timerElement.textContent = formatTime(timerSeconds);
        } else {
            clearInterval(timerInterval);
            alert('Таймер завершён! Нажмите на кнопку чтобы забрать выйгрыш.');
            downloadButton.style.display = 'block';
        }
    }

    downloadButton.addEventListener('click', function() {
        const downloadLink = document.createElement('a');
        downloadLink.href = 'winner.jpg';
        downloadLink.download = 'winner.jpg';
        downloadLink.target = '_blank';
        downloadLink.style.display = 'block';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });

    timerElement.textContent = formatTime(timerSeconds);
    timerInterval = setInterval(updateTimer, 1000);
});
