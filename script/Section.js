import Card from "./Card.js";
export default class Section {
    constructor({ data, renderer }, containerSelector) {
        this._items = data;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
      }
      renderElements(){
        this._items.forEach((item) => {
            this._renderer(item)
          })
      }
      addItem(element){
        this._container.append(element)
      }
}