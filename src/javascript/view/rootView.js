import { $, createElement } from "./hooks/elementHook.js";
import "../../css/autocomplete.css";

export default class RootView {
  constructor() {
    this.root = $("#root");
    this.header = createElement("header", "header");
    this.section = createElement("section", "section");
    this.footer = createElement("footer", "footer")
    this.root.append(this.header, this.section, this.footer);
    return this;
  }
}
