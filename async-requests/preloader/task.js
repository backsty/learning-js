document.addEventListener('DOMContentLoaded', async () => {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');
    const localStorageKey = 'currancyData';

    const displayData = (data) => {
        itemsContainer.innerHTML = '';
        const valutes = data.response.Valute;
        for (const key in valutes) {
            if (valutes.hasOwnProperty(key)) {
                const valute = valutes[key];
                const item = document.createElement('div');
                item.classList.add('item');
    
                const itemCode = document.createElement('div');
                itemCode.classList.add('item__code');
                itemCode.textContent = valute.CharCode;
    
                const itemValue = document.createElement('div');
                itemValue.classList.add('item__value');
                itemValue.textContent = valute.Value;
    
                const itemCurrency = document.createElement('div');
                itemCurrency.classList.add('item__currency');
                itemCurrency.textContent = 'руб.';
    
                item.appendChild(itemCode);
                item.appendChild(itemValue);
                item.appendChild(itemCurrency);
    
                itemsContainer.appendChild(item);
            }
        }
    };
    
    const cacheData = localStorage.getItem(localStorageKey);
    if (cacheData) {
        const parsedData = JSON.parse(cacheData);
        displayData(parsedData);
    }


    try {
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        localStorage.setItem(localStorageKey, JSON.stringify(data));
        displayData(data);
    } catch (error) {
        console.log('Ошибка загрузки данных: ', error);
    } finally {
        loader.classList.remove('loader_active');
    }
});