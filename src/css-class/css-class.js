import {customAttribute, bindable, inject} from 'aurelia-framework';

@customAttribute('css-class')
@inject(Element)
export class CSSClass {
    @bindable name = null;
    @bindable value = false;

    constructor(element) {
        this.element = element;
    }

    valueChanged(newValue) {
        if(newValue) {
            this.element.classList.add(this.name);
        } else {
            this.element.classList.remove(this.name);
        }
    }
}
