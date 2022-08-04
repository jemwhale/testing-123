const {Point} = require('../src/02-point');



describe('The Point class should', () => {
    p1 = new Point(5,4);
    test('have the correct property values', () => {
        expect(p1.x).toBe(5);
        expect(p1.y).toBe(4);
    })

    

    test('have a move function that returns the correct value', () => {
        p1.move(5,4);
        expect(p1.x).toBe(10);
        expect(p1.y).toBe(8);
    })

    

    test('have a reflect function that returns the correct value', () => {
        p1.reflect();
        expect(p1.x).toBe(8);
        expect(p1.y).toBe(10);
    })

    

    test('have a stretch function that returns the correct value', () => {
        p1.stretch(10);
        expect(p1.x).toBe(80);
        expect(p1.y).toBe(100);
    })
})