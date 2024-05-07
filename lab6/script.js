
// Оголошення функції "Привітання користувача на музичному сайті"
function greetUser() {
    let readyToStart = false;

    // Цикл, щоб повторно запитати користувача, якщо він відмовився спочатку
    while (!readyToStart) {
        readyToStart = confirm("Вітаємо на нашому музичному сайті, готові почати слухати музику?");

        // Умовне розгалуження на основі відповіді користувача
        if (readyToStart) {
            alert("Чудово! Приємного прослуховування!");
        } else {
            alert("Шкода, що ви не готові почати. Приходьте до нас ще!");
        }
    }
}

// Виклик функції
greetUser();



// Функція порівняння двох рядків.
    function compareStrings() {
        var string1 = prompt("Введіть перший рядок:");
        var string2 = prompt("Введіть другий рядок:");
        if (string1 > string2) {
            alert(string1 + " більший за " + string2);
        } else if (string1 < string2) {
            alert(string2 + " більший за " + string1);
        } else {
            alert("Рядки рівні.");
        }
    }

// Завдання 2: Змінити фон сторінки на 30 секунд.
// script.js

// Функція для зміни кольору всіх посилань
function changeLinkColor() {
    // Використання querySelectorAll для вибору всіх посилань на сторінці
    var links = document.querySelectorAll('a');

    // Проходження по кожному посиланню і зміна його кольору
    links.forEach(function(link) {
        link.style.color = 'green'; // Зміна кольору на зелений
    });
}

// Функція для зміни фону сторінки на 30 секунд
function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
    setTimeout(function() {
        document.body.style.backgroundColor = "lightgrey";
    }, 30000);
}

// Виклик обох функцій при завантаженні сторінки
window.onload = function() {
    changeLinkColor(); // Зміна кольору посилань
    changeBackgroundColor(); // Зміна фону сторінки
};

// Отримання кнопки за її ідентифікатором
var redirectButton = document.getElementById("redirectButton");

// Додаємо обробник подій для кнопки
redirectButton.addEventListener("click", function() {
    // Зміна вмісту елемента з ідентифікатором "content"
    var contentElement = document.getElementById("content");
    contentElement.innerHTML = "<p>Перенаправлення через 3 секунди...</p>";

    // Затримка на 3 секунди перед перенаправленням
    setTimeout(function() {
        // Перенаправлення браузера на іншу сторінку
        location.href = "https://www.spotify.com/ua-uk/free/";
    }, 3000);
});

// inner
var element = document.getElementById("example-element");
// Використання властивості іппегНТИ для встановлення HTML вмісту елементу
element.innerHTML = "<p>Музика - це мистецтво, що виражає емоції та почуття через звукові вирази</p>";
// outerHTML
var element = document.getElementById ("example1-element") ;
element.outerHTML = "<div>Музика має велике значення у нашому житті, сприяючи розвагам, вираженню почуттів та релаксації.</div>";
// nodeValue/data
var textNode = document.createTextNode("<-Натисни сюди") ;
document.body.appendChild(textNode);
//textContent
var element = document.getElementById("example2-element");
element.textContent = "Музика може бути важливим аспектом нашого життя.";
var newParagraph = document.createElement("p");
var paragraphText = document.createTextNode("😄");
newParagraph.appendChild(paragraphText);
document.body.appendChild (newParagraph);
