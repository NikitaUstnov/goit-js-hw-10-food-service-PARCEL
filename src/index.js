import cardsEl from './menu.json'; // массив карточек
import swisher from './swich-menu'; // кнока темы
import foodCardsTpl from './template.hbs'; // шаблон карточки

const templateMenuRef = document.querySelector('.js-menu');

function makeCardsTemplate(cardsEl) {
  return foodCardsTpl(cardsEl);
}

templateMenuRef.insertAdjacentHTML('afterBegin', makeCardsTemplate(cardsEl));
