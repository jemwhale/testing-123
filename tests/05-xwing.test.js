const {Spaceship, Xwing} = require('../src/05-xwing');

describe('The Spaceship class should', () => {
    let sp1 = new Spaceship(10,10)
    let sp2 = new Spaceship(20,20)
    let sp3 = new Spaceship(10,10)

    test('have the correct property values', () => {
        expect(sp1.health).toEqual(10);
        expect(sp1.shield).toEqual(10);
        expect(sp1.xp).toEqual(0);
        expect(sp1.isDead).toEqual(false);
    })

    test('have the correct static values', () => {
        expect(Spaceship.hangar).toEqual([]);
    })

    test("have a levelUp function that levels up by the correct amount and doesn't go below 0", () => {
        sp1.levelUp(10);
        sp1.levelUp(10);
        expect(sp1.xp).toEqual(20);
        sp1.levelUp(-21)
        expect(sp1.xp).toEqual(0);
    })

    test("have a takeDamage function that depletes the shields to 0 before depleting the health (to 0)", () => {
        sp1.takeDamage(9);
        expect(sp1.shield).toEqual(1);
        expect(sp1.health).toEqual(10);
        expect(sp1.isDead).toEqual(false);
        sp1.takeDamage(9);
        expect(sp1.shield).toEqual(0);
        expect(sp1.health).toEqual(2);
        expect(sp1.isDead).toEqual(false);
        sp1.takeDamage(9);
        expect(sp1.shield).toEqual(0);
        expect(sp1.health).toEqual(0);
        expect(sp1.isDead).toEqual(true);
    })

    test("adds the ship to the hangar when the shields are depleted and doesn't add it in more than once", () => {
        sp1.shield = 10;
        Spaceship.hangar = [];
        expect(Spaceship.hangar).toEqual([]);
        sp1.takeDamage(9);
        expect(Spaceship.hangar).toEqual([]);
        sp1.takeDamage(9);
        expect(Spaceship.hangar).toEqual([sp1]);
        sp1.takeDamage(9);
        expect(Spaceship.hangar).toEqual([sp1]);
    })

    test('have a static function that reduces the health of 2 ships by 10% when they collide', () => {
        Spaceship.collide(sp3,sp2);
        expect(sp3.health).toEqual(9);
        expect(sp2.health).toEqual(18);
    })

})



describe('The Xwing class should', () => {

    let xw1 = new Xwing(10,10,10)
    let xw2 = new Xwing(10,10,10)
    let xw3 = new Xwing(10,10,10)

    test('is an extended class of Spaceship', () => {
        expect(xw1 instanceof Spaceship).toEqual(true)
    })

    test('have the correct property values', () => {
        expect(xw1.health).toEqual(10);
        expect(xw1.shield).toEqual(10);
        expect(xw1.xp).toEqual(0);
        expect(xw1.isDead).toEqual(false);
        expect(xw1.basicSpeed).toEqual(10);
    })

    test('have a heal method that increases health by 10% of the xp', () => {
        xw1.xp = 10
        xw1.heal()
        expect(xw1.health).toEqual(11);
    })

    test('have a speed method that returns double the speed if the sheilds are fully depleted', () => {
        console.log(xw3.basicSpeed);
        console.log(xw3.shield);
        expect(xw3.speed()).toEqual(10);
        xw3.shield = 0
        expect(xw3.speed()).toEqual(20);
    })

    test("have a level up method adds one to the ship's health when one xp is added", () => {
        xw2.levelUp(2)
        expect(xw2.health).toEqual(12);
        xw2.levelUp(-2)
        expect(xw2.health).toEqual(12);
    })

})