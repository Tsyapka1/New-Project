// const h1 = document.getElementById();// Стучимся к айди.
// const h2s = document.getElementsByTagName();// находим нужный элемент.
// const queryH1 = document.querySelector();// Поик по CSS селектору.При использовании # обращаемся в тегу.
// const claass = document.getElementsByClassName();// 

const textElement = document.querySelectorAll('lesson_text')

const textElementContent = textElement.innerHTML;
// console.log(textElementContent);

textElement.innerHTML = '<p>${textElementContent}</p> <p>Живи, а работай в <span class="yellow">свободное время!</p>';

console.log(textElement.innerHTML);