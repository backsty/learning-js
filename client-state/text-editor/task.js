const editor = document.getElementById('editor');
const clearButton = document.getElementById('clear-button');

window.onload = () => {
    const savedText = localStorage.getItem('editorText');
    if (savedText) {
        editor.value = savedText;
    }
};

editor.addEventListener('input', () => {
    localStorage.setItem('editorText', editor.value);
});

clearButton.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('editorText');
});