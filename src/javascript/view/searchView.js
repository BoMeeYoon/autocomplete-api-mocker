import { $, createElement, addClassName } from "./hooks/elementHook";

const log = console.log;
const tag = "[searchView.js]";

export default class SearchView {
  constructor() {
    this.section = $(".section");
    this.logo = createElement("div", "search__logo");
    this.logo.textContent = `EVERYTHING IS HERE`;
    this.form = createElement("form", "search__form");

    this.inputBox = createElement("div", "search__input-wrapper");
    this.results = createElement("ul");

    this.icon = createElement("div", "search__input-icon");
    this.icon.textContent = `🔎`;
    this.inputEl = createElement("input", "search__input-text");
    this.inputEl.type = "text";
    this.inputEl.name = "search";
    this.inputEl.setAttribute("autocomplete", "off")
    
    this.inputBox.append(this.icon, this.inputEl);
    this.form.append(this.inputBox, this.results);
    this.section.append(this.logo, this.form);
    // this.onMountResultsBinder(null)
    return this;
  }
  onMountResultsBinder(data) {
    addClassName(this.results, "search__results");
  }
}
