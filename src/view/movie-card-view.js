import { createElement } from '../render.js';

const createFilmCardTemplate = (data) => (
  `<article class="film-card">
  <a class="film-card__link">
    <h3 class="film-card__title">Popeye the Sailor Meets Sindbad the Sailor</h3>
    <p class="film-card__rating">${data.raiting}</p>
    <p class="film-card__info">
      <span class="film-card__year">${data.year}</span>
      <span class="film-card__duration">16m</span>
      <span class="film-card__genre">${data.genre}</span>
    </p>
    <img src="./images/posters/${data.poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${data.description}</p>
    <span class="film-card__comments">${data.comments.length} comments</span>
  </a>
</article>`
);

export default class FilmCard {
  #element = null;
  #data = null;

  constructor(data) {
    this.#data = data;
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return createFilmCardTemplate(this.#data);
  }

  removeElement() {
    this.#element = null;
  }
}
