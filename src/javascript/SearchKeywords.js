const log = console.log;
const tag = "[SearchKeywords.js]";
import { $, all$, createElement, addClassName, removeClassName } from "./hook/elementHook.js";
import "../css/autocomplete.css";

export default class SearchKeywords {
  constructor() {
    this.root = $("#root");
    this.header = createElement("header", "header");
    this.section = createElement("section", "section");
    this.footer = createElement("footer", "footer");
    this.root.append(this.header, this.section, this.footer);
    
    this.section = $(".section");
    this.logo = createElement("div", "search__logo");
    this.logo.textContent = `AUTOCOMPLETE`;
    this.form = createElement("form", "search__form");

    this.inputBox = createElement("div", "search__input-wrapper");
    this.results = createElement("ul");

    this.icon = createElement("div", "search__input-icon");
    this.icon.textContent = `🔎`;
    this.inputEl = createElement("input", "search__input-text");
    this.inputEl.type = "text";
    this.inputEl.name = "keyword";
    this.inputEl.setAttribute("autocomplete", "off")
    
    this.inputBox.append(this.icon, this.inputEl);
    this.form.append(this.inputBox, this.results);
    this.section.append(this.logo, this.form);
    this.searchKeyword;
    this.init();
    return this;
  }
  init() {
    this.bindChangeKeywords();
  }

  bindChangeKeywords() {
    this.inputEl.addEventListener("keyup", e => {
      if(!this.inputEl.value.length) return this.bindResetResults();
      const {value} = e.target
      this.searchKeyword = value.toLowerCase().trim();
      this.sendApiHandler();
    })
  }

  async sendApiHandler () {
    const response = await fetch("/api/keywords");
    const results = await response.json();
    await this.bindGetResults(results.keywords);
  }
  
  bindGetResults(data) {
    addClassName(this.results, "search__results");
    const isFiltered = data.filter( lists => lists.includes(this.searchKeyword));
    isFiltered.length = isFiltered.length > 5 ? 5 : isFiltered.length;
    
    this.bindMountResults(isFiltered);
    
  }

  bindMountResults(data) {
    this.results.innerHTML = !data.length ? `<li>일치하는 검색어가 없습니다</li>` : data.reduce((acc, crr) => acc += `<li>${crr}</li>`, "");
    this.bindClickList();
  }

  bindClickList() {
    const lists = all$('li');
    Array.from(lists).forEach( list => list.addEventListener("click", e => {
      e.preventDefault();
      this.inputEl.value = e.target.textContent;
      this.bindResetResults()
    }))
  }

  bindResetResults() {
    while(this.results.firstChild) {
      this.results.removeChild(this.results.firstChild);
    }  
    removeClassName(this.results, "search__results");
  }
}
