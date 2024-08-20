const dropdownElements = document.querySelectorAll('.dropdown');

dropdownElements.forEach(dropdown => {
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');

    dropdownValue.addEventListener('click', () => {
        dropdownList.classList.toggle('dropdown__list_active');
    });

    dropdownList.addEventListener('click', event => {
        if (event.target.classList.contains('dropdown__link')) {
            event.preventDefault();
            dropdownValue.textContent = event.target.textContent;
            dropdownList.classList.remove('dropdown__list_active');
        }
    });
});