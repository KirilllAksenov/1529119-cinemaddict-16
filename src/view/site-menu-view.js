import AbstractView from './abstract-view.js';
import createFilterTemplate from './filter-view.js'
const createSiteMenuTemplate = () =>
  `<nav class="main-navigation">

    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;

export default class SiteMenuView extends AbstractView {
    #data = null;

    constructor(data) {
      super();
      this.#data = data;
    }

    get template() {
      return createSiteMenuTemplate(this.#data);
    }
}
