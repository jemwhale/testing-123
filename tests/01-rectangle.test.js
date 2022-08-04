const {Rectangle} = require('../src/01-rectangle');

let r1 = new Rectangle(8,10);

describe('The Rectangle class should', () => {
    test('have the correct property values', () => {
        expect(r1.width).toEqual(8);
        expect(r1.height).toEqual(10);
    })
    test('have a perimeter method that returns the correct value', () => {
        expect(r1.perimeter()).toEqual(36);
    })
    test('have an area method that returns the correct value', () => {
        expect(r1.area()).toEqual(80);
    })
})