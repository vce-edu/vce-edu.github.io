window.addEventListener('DOMContentLoaded', () => {
    const courseSelect = document.getElementById('course');
    const languageSelect = document.getElementById('language');

    courseSelect.value = 'null';
    languageSelect.value = 'null';
    const button = document.getElementById("download");
    button.disabled = true;
    button.classList.add("disabled");
});
