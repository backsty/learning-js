'use strict';

// Словари для хранения названий CSS-классов, применяемых к элементу .book__content
// Индексы словарей соответствуют размерам:
// 0 - маленький, 1 - средний, 2 - большой
const fontSizeDict = {
    0: 'book_fs-small',
    1: '', // не имеет дополнительного класса
    2: 'book_fs-big',
};

const fontColorDict = {
    0: '',
    1: 'book_color-gray',
    2: 'book_color-whitesmoke',
};

const backgroundColorDict = {
    0: 'book_bg-black',
    1: 'book_bg-gray',
    2: '',
};

// Получение ссылок на элементы управления из DOM
const fontSizeLinks = Array.from(document.querySelectorAll('a.font-size'));
const bookContent = document.querySelector('div.book__content');
const fontColorLinks = Array.from(document.querySelectorAll('div.book__control_color a.color'));
const backgroundColorLinks = Array.from(document.querySelectorAll('div.book__control_background a.color'));

/* 
  * Определяет тип элемента: 'color', 'font_size' или пустая строка.
  *
  * @param {HTMLElement} element - элемент, для которого нужно определить тип.
  * @returns {string} Тип элемента.
*/
function getAttributeType(element) {
    return element.classList.contains('color') ? 'color' : element.classList.contains('font-size') ? 'font_size' : '';
}

/* 
  * Проверяет является ли элемент активным (имеет класс 'color_active' или 'font_size_active').
  *
  * @param {HTMLElement} element - элемент, для которого нужно проверить активность.
  * @returns {boolean} True, усли элемент активен, иначе false.
*/
function isActive(element) {
    let type = getAttributeType(element);
    return type === 'color' ? element.classList.contains('color_active') : type === 'font_size' ? element.classList.contains('font-size_active') : false;
}

/* 
  * Изменяет классы элемента .book__content, добавляя или удаляя классы из словаря,
  * в зависимости от типа и индекса элемента управления.
  *
  * @param {HTMLElement} item - Элемент управления по которому был произведён клик.
  * @param {number} currentIndex - Индекс предыдущего активного элемента.
  * @param {number} index - Индекс текущего элемента.
*/
function changeClassForBookContent(item, currentIndex, index) {
    const controlDiv =  item.closest('div');
    if (controlDiv.classList.contains('book__control_font-size')) {
        fontSizeDict[index] ? bookContent.classList.toggle(fontSizeDict[index]) : '';
        fontSizeDict[currentIndex] ? bookContent.classList.toggle(fontSizeDict[currentIndex]) : '';
    } else if (controlDiv.classList.contains('book__control_color')) {
        fontColorDict[index] ? bookContent.classList.toggle(fontColorDict[index]) : '';
        fontColorDict[currentIndex] ? bookContent.classList.toggle(fontColorDict[currentIndex]) : '';
    } else if (controlDiv.classList.contains('book__control_background')) {
        backgroundColorDict[index] ? bookContent.classList.toggle(backgroundColorDict[index]) : '';
        backgroundColorDict[currentIndex] ? bookContent.classList.toggle(backgroundColorDict[currentIndex]) : '';
    };
}

/* 
  * Прикрепляет обработчик события 'onclick' к каждому элементу в массиве,
  * изменяя классы элемента .book__content при клике.
  *
  * @param {Array<HTMLElement} array - Массив элементов, к которым нужно прикрепить обработчик.
*/
function clickEvent(array) {
    array.forEach(function (item, index, array) {
        item.onclick = function () {
            let oldIndex = array.findIndex(isActive);
            let type = getAttributeType(item);
            if (type === 'color') {
                if (oldIndex !== -1) array[oldIndex].classList.toggle('color_active');
                item.classList.toggle('color_active');
                changeClassForBookContent(item, oldIndex, index);
                return false; 
            } else if (type === 'font_size') {
                if (oldIndex !== -1) array[oldIndex].classList.toggle('font-size_active');
                item.classList.toggle('font-size_active');
                changeClassForBookContent(item, oldIndex, index);
                return false;
            };
        };
    });
};

clickEvent(fontSizeLinks);
clickEvent(fontColorLinks);
clickEvent(backgroundColorLinks);