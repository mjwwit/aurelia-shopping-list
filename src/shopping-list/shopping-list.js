import {singleton} from 'aurelia-framework';

@singleton()
export class ShoppingList {
    items = [
        {
            text: 'Milk',
            done: false
        }, {
            text: 'Cheese',
            done: true
        }
    ];

    add(item) {
        this.items.push(item);
    }

    remove(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}
