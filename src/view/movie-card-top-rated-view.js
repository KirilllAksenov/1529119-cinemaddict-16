import { getRandomInteger } from '../mock/generateCards.js';
export const createTopRatedFilmCardTepmplate = (data) => {
  const randomIndex = getRandomInteger(0, data.length - 1);
  if (data[randomIndex].raiting < 8) {
    return `
              <p class="film-card__description">${'Sorry, there are no highly rated movies at the moment.'}</p>
            `;
  } else {
    return data.slice(0,2).map((card) =>`
    <article class="film-card">
      <a class="film-card__link">
        <h3 class="film-card__title">The Man with the Golden Arm</h3>
        <p class="film-card__rating">${card.raiting}</p>
        <p class="film-card__info">
          <span class="film-card__year">${card.year}</span>
          <span class="film-card__duration">1h 59m</span>
          <span class="film-card__genre">${card.genre}</span>
        </p>
        <img src="./images/posters/${card.poster}" alt="" class="film-card__poster">
        <p class="film-card__description">${card.description}</p>
        <span class="film-card__comments">${card.comments.length} comments</span>
      </a>
      <div class="film-card__controls">
        <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
        <button class="film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
        <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
      </div>
    </article>`);
  }
};
