import {customElement, inject} from 'aurelia-framework';
import {ShoppingList} from '../shopping-list/shopping-list';

@customElement('new-list-item')
@inject(ShoppingList)
export class NewListItem {
    constructor(list) {
        this.list = list;
    }

    add(item) {
        this.list.add({
            text: item,
            done: false
        });
        this.newItem = '';
    }
}
