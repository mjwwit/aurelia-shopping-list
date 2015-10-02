import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

import {inject} from 'aurelia-framework';
import {ShoppingList} from 'shopping-list/shopping-list';

@inject(ShoppingList)
export class App {
    constructor(list) {
        this.list = list;
    }
}
