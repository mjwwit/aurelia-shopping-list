import {CSSClass} from '../../../src/css-class/css-class';
import {Container} from 'aurelia-dependency-injection';
import {BehaviorInstance} from 'aurelia-templating';

describe('the CSSClass module', () => {
    let cssClass,
        container;

    beforeEach(() => {
        container = new Container().makeGlobal();
        container.registerElement(Element, '<div>');
        cssClass = BehaviorInstance.createForUnitTest(CSSClass);
    });

    it('should construct', () => {
        expect(cssClass.name).toBeNull();
        expect(cssClass.value).toBeFalsy();
    });
});
