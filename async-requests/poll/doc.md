# Опросник

Этот проект представляет собой простой опросник, который позволяет пользователям участвовать в опросах, отправлять свои голоса и видеть результаты голосования в реальном времени.

## Инициализация и получение элементов DOM

- **pollTitle**: элемент для отображения заголовка опроса.
- **pollAnswers**: контейнер для кнопок с вариантами ответов.
- **loadingIndicator**: элемент для отображения индикатора загрузки.
- **nextQuestionButton**: кнопка для загрузки следующего вопроса.
- **pollId**: переменная для хранения идентификатора текущего опроса.

## Функция для получения данных опроса с сервера

- **fetchPollData**: асинхронная функция для получения данных опроса.
  - `loadingIndicator.style.display = 'block'`: показывает индикатор загрузки.
  - **fetch**: отправляет запрос на сервер для получения данных опроса.
  - `response.json()`: преобразует ответ сервера в JSON.
  - **displayPoll(data)**: отображает данные опроса на странице.
  - `loadingIndicator.style.display = 'none'`: скрывает индикатор загрузки.

## Функция для отображения данных опроса

- **displayPoll(data)**: функция для отображения данных опроса.
  - `pollTitle.textContent = data.data.title`: устанавливает заголовок опроса.
  - `pollAnswers.innerHTML = ''`: очищает контейнер с ответами.
  - `data.data.answers.forEach`: создает кнопки для каждого варианта ответа.
  - `button.addEventListener('click', ...)`: добавляет обработчик клика для отправки голоса.

## Функция для отправки голоса на сервер

- **sendVote(pollID, answerIndex)**: функция для отправки голоса.
  - `xhr.open('POST', ...)`: открывает POST-запрос.
  - `xhr.setRequestHeader('Content-type', ...)`: устанавливает заголовок запроса.
  - `xhr.send(postData)`: отправляет данные на сервер.
  - `xhr.onload`: обработчик для обработки ответа сервера.
  - **displayResults(result.stat)**: отображает результаты голосования.

## Функция для отображения результатов голосования

- **displayResults(stat)**: функция для отображения результатов голосования.
  - `pollAnswers.innerHTML = ''`: очищает контейнер с ответами.
  - `stat.forEach`: создает элементы для каждого результата.

## Обработчик для кнопки "Следующий вопрос"

Добавляет обработчик клика для кнопки "Следующий вопрос", который вызывает функцию **fetchPollData**.

## Инициализация

Вызывает функцию **fetchPollData** при загрузке страницы для получения и отображения первого вопроса.

## Пример данных

### Ответ от сервера при запросе данных опроса

```json
{
  "id": 2,
  "data": {
    "title": "Как вы относитесь к собакам?",
    "answers": ["Хорошо", "Отлично", "Я люблю собак", "Кто тут?"]
  }
}
```

### Отправка голоса
При клике на кнопку ответа отправляется POST-запрос с pollID и answerIndex. Пример данных: vote=2&answer=1

Ответ от сервера при отправке голоса
Визуализация работы с данными
Получение данных опроса
Сервер возвращает объект с id, title и массивом answers

```js
[
  {"answer": "Хорошо", "votes": 251},
  {"answer": "Отлично", "votes": 433},
  {"answer": "Я люблю собак", "votes": 345},
  {"answer": "Кто тут?", "votes": 103}
]
```

## Визуализация работы с данными
### Получение данных опроса
Сервер возвращает объект с id, title и массивом answers.

### Отображение данных опроса
Заголовок опроса устанавливается в элемент pollTitle.
Для каждого ответа создается кнопка, которая добавляется в pollAnswers.

### Отправка голоса
При клике на кнопку ответа отправляется POST-запрос с pollID и answerIndex.

### Получение и отображение результатов
Сервер возвращает массив объектов с answer и votes. Результаты отображаются в pollAnswers в виде элементов div.

Этот код позволяет пользователю участвовать в опросе, отправлять свой голос и видеть результаты голосования в реальном времени.