document.addEventListener('DOMContentLoaded', () => {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');
    const loadingIndicator = document.getElementById('loading');
    const nextQuestionButton = document.getElementById('next-question');
    let pollId;

    async function fetchPollData() {
        try {
            loadingIndicator.style.display = 'block';
            const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
            const data = await response.json();
            if (data && data.data && data.data.answers) {
                pollId = data.id;
                displayPoll(data)
            } else {
                console.error('Некорректные данные:', data);
            }
        } catch (error) {
            console.log('Ошибка при получении данных опроса: ', error);
        } finally {
            loadingIndicator.style.display = 'none';
        }
    }

    function displayPoll(data) {
        pollTitle.textContent = data.data.title;
        pollAnswers.innerHTML = '';

        data.data.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'poll__answer';
            button.textContent = answer;
            button.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
                sendVote(pollId, index);
            });
            pollAnswers.appendChild(button);
        });
    }

    function sendVote(pollID, answerIndex) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        const postData = `vote=${pollID}&answer=${answerIndex}`;
        console.log('Отправка данных:', postData);
        xhr.send(postData);

        xhr.onload = function() {
            console.log('Статус ответа:', xhr.status);
            console.log('Ответ сервера:', xhr.responseText);
            if (xhr.status === 200 || xhr.status === 201) {
                const result = JSON.parse(xhr.responseText);
                displayResults(result.stat);
            } else {
                console.log('Ошибка при отправке голоса:', xhr.statusText);    
            }
        }
        xhr.onerror = function() {
            console.error('Ошибка при отправке запроса');
        };
    }

    function displayResults(stat) {
        pollAnswers.innerHTML = '';

        stat.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'poll__result';
            resultItem.innerHTML = `${result.answer}: ${result.votes} голосов`;
            pollAnswers.appendChild(resultItem);
        });
    }

    nextQuestionButton.addEventListener('click', fetchPollData);

    fetchPollData()
});