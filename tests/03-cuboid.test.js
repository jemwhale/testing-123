const {Cuboid} = require('../src/03-cuboid');

describe('The Cuboid class should', () => {
    let c1 = new Cuboid(5,4,10)
    test('have the correct property values', () => {
        expect(c1.width).toEqual(5);
        expect(c1.height).toEqual(4);
        expect(c1.depth).toEqual(10);
        expect(c1.colour).toEqual('blue');
    })

    test('have a method that return the correct volume', () => {
        expect(c1.volume()).toEqual(200);
    })

    test('have a method that lets you change the colour', () => {
        c1.paint('red')
        expect(c1.colour).toEqual('red');
    })

})