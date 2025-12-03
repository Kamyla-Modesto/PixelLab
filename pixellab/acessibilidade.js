document.addEventListener('DOMContentLoaded', () => {

    // ---- ELEMENTOS ----
    const btnIncreaseFont = document.getElementById('increase-font');
    const btnDecreaseFont = document.getElementById('decrease-font');
    const btnHighContrast = document.getElementById('high-contrast');
    const btnReset = document.getElementById('normal-view');

    let currentFontSize = 100; // porcentagem padrão

    // ---- FUNÇÃO: Aumentar Fonte ----
    btnIncreaseFont.addEventListener('click', () => {
        currentFontSize += 10;
        document.body.style.fontSize = currentFontSize + '%';
    });

    // ---- FUNÇÃO: Diminuir Fonte ----
    btnDecreaseFont.addEventListener('click', () => {
        if (currentFontSize > 50) { // limite mínimo
            currentFontSize -= 10;
            document.body.style.fontSize = currentFontSize + '%';
        }
    });

    // ---- FUNÇÃO: Contraste Alto ----
    btnHighContrast.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    // ---- FUNÇÃO: Resetar Configurações ----
    btnReset.addEventListener('click', () => {
        document.body.classList.remove('high-contrast');
        document.body.classList.remove('monochrome');
        currentFontSize = 100;
        document.body.style.fontSize = '100%';
    });

});