import cardsEl from './menu.json'; // массив карточек
import swisher from './swich-menu'; // кнока темы
import foodCardsTpl from './template.hbs'; // шаблон карточки


function cardsTemplate(cardsEl) {
    return foodCardsTpl(cardsEl) ;
};

const templateMenuPiker = document.querySelector('.js-menu');
templateMenuPiker.insertAdjacentHTML("afterBegin", cardsTemplate(cardsEl));


