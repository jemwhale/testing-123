const {Book, User} = require('../src/04-library');

let book = new Book('My Thoughts On Laminate Flooring',12345,'Jack Whale')

describe('The Book class should', () => {
    test('have the correct property values', () => {
        expect(book.title).toEqual('My Thoughts On Laminate Flooring');
        expect(book.ISBN).toEqual(12345);
        expect(book.author).toEqual('Jack Whale');
        expect(book.isAvailable).toEqual(true);
        expect(book.currentOwner).toEqual(null);
    })
})

let user = new User('jw', 'pw')

describe('The User class should', () => {
    test('have the correct property values', () => {
        expect(user.username).toEqual('jw');
        expect(user.password).toEqual('pw');
        expect(user.books).toEqual([]);
    })

    test('have a method that updates the username if the password is correct', () => {
        user.updateUsername('jw2', 'pw');
        expect(user.username).toEqual('jw2');
    })

    test("have a method that doesn't update the username if the password is incorrect", () => {
        user.updateUsername('jw3', 'pp');
        expect(user.username).toEqual('jw2');
    })

    test("have a method that checks out a book correctly", () => {
        user.checkoutBook(book);
        expect(book.isAvailable).toEqual(false);
        expect(book.currentOwner).toEqual(user.username);
        expect(user.books).toEqual([book]);
    })

    test("have a method that returns a book correctly", () => {
        user.returnBook(book);
        expect(book.isAvailable).toEqual(true);
        expect(book.currentOwner).toEqual(null);
        expect(user.books).toEqual([]);
    })

})