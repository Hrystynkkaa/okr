// Функція виводу інформації про розробника сторінки.
function showDeveloperInfo(lastName, firstName, position = "Розробник") {
    // Створення рядка з інформацією про розробника
    let infoString = "Прізвище: " + lastName + "<br>" +
        "Ім'я: " + firstName + "<br>" +
        "Посада: " + position;

    // Отримання елемента, в який будемо виводити інформацію
    let developerInfoElement = document.getElementById("developer-info");

    // Виведення інформації на сторінку
    developerInfoElement.innerHTML = infoString;
}

// Виклик функції з встановленими параметрами
showDeveloperInfo("Петров", "Іван");

