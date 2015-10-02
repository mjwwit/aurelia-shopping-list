import {customElement, bindable, inject} from 'aurelia-framework';
import {ShoppingList} from '../shopping-list/shopping-list';

@customElement('shopping-list-item')
@inject(ShoppingList)
export class ShoppingListItem {
    @bindable item;

    constructor(list) {
        this.list = list;
    }

    remove() {
        this.list.remove(this.item);
    }
}
