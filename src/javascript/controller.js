const log = console.log
const tag = '[controller.js]'

import RootView from './view/rootView.js';
import SearchView from './view/searchView.js';

export default class Controller {
  constructor() {
    this.rootView = new RootView();
    this.searchView = new SearchView();
  }
}