// Находим ползунок длины пароля по его ID
const lengthSlider = document.getElementById("length");

// Находим элемент, где показывается число (длина пароля)
const lengthValue = document.getElementById("lengthValue");

// Когда пользователь двигает ползунок
lengthSlider.oninput = function () {
    // Обновляем текст (показываем текущую длину)
    lengthValue.textContent = this.value;
};

// Функция генерации пароля
function generatePassword() {

    // Получаем выбранную длину пароля
    const length = lengthSlider.value;

    // Проверяем, включены ли опции
    const useLetters = document.getElementById("letters").checked; // буквы
    const useNumbers = document.getElementById("numbers").checked; // цифры
    const useSymbols = document.getElementById("symbols").checked; // символы

    // Наборы символов
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // буквы
    const numbers = "0123456789"; // цифры
    const symbols = "!@#$%^&*()_+"; // специальные символы

    // Здесь будем хранить все доступные символы
    let characters = "";

    // Если выбраны буквы — добавляем их
    if (useLetters) characters += letters;

    // Если выбраны цифры — добавляем их
    if (useNumbers) characters += numbers;

    // Если выбраны символы — добавляем их
    if (useSymbols) characters += symbols;

    // Если пользователь ничего не выбрал
    if (characters === "") {
        // Показываем предупреждение
        alert("Выберите хотя бы один вариант!");
        return; // Останавливаем функцию
    }

    // Переменная для будущего пароля
    let password = "";

    // Запускаем цикл столько раз, какая длина пароля
    for (let i = 0; i < length; i++) {

        // Берём случайный индекс из строки characters
        const randomIndex = Math.floor(Math.random() * characters.length);

        // Добавляем случайный символ к паролю
        password += characters.charAt(randomIndex);
    }

    // Вставляем готовый пароль в поле
    document.getElementById("password").value = password;

    // Очищаем сообщение (если было "скопировано")
    document.getElementById("message").textContent = "";
}

// Функция копирования пароля
function copyPassword() {

    // Получаем поле с паролем
    const passwordField = document.getElementById("password");

    // Если пароль ещё не создан
    if (passwordField.value === "") {
        alert("Сначала создайте пароль!");
        return; // Останавливаем функцию
    }

    // Выделяем текст в поле
    passwordField.select();

    // Копируем в буфер обмена
    document.execCommand("copy");

    // Показываем сообщение пользователю
    document.getElementById("message").textContent = "Пароль скопирован!";
}