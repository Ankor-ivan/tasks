'use strict';

let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    adv = document.getElementsByClassName('adv')[0],
    title = document.getElementById("title"),
    promptforApple = document.querySelector('#prompt'),
    menuitemli = document.createElement('li');

    

menu.insertBefore(menuItem[2], menuItem[1]);                   //поменял местами

menuitemli.classList.add('menu-item');                         //добавил элемент       
menuitemli.textContent = 'Пятый Пункт';
menu.appendChild(menuitemli);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";     //поменял фон

title.textContent = 'МЫ продаем только подлинную технику Apple';

adv.remove(); //удалил блок

let yourOpinion = prompt('Ваше отгошение к технике Apple?');
promptforApple.textContent = yourOpinion;

