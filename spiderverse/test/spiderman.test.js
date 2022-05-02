const Spiderman = require('./../app/spiderman')

describe("Unit Test for Spiderman class", () => {
  test('1) create an siperman object', () => {
    const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Spiderman awesome", "Sony")
    expect(andrewGarfield.name).toBe("Spiderman Sony");
    expect(andrewGarfield.age).toBe(31);
    expect(andrewGarfield.actor).toBe("Andrew Garfield");
    expect(andrewGarfield.movies).toBe(31);
    expect(andrewGarfield.studio).toBe("Sony");
  });
})