import {App} from '../../src/app';

class ShoppingListStub {
    list = [1, 2];
}

describe('the App', () => {
    let mockedShoppingList,
        app;

    beforeEach(() => {
        mockedShoppingList = new ShoppingListStub();
        app = new App(mockedShoppingList);
    });

    it('should have a list', () => {
        expect(app.list).toEqual([1, 2]);
    });
});
