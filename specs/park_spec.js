const assert = require("assert");
const Park = require("../models/park.js");
const Dinosaur = require("../models/dinosaur.js");

describe("Park", function () {
  let dinosaur1;
  let dinosaur2;
  let park;

  beforeEach(function () {
    park = new Park("Jurassic Park", 10, [dinosaur1, dinosaur2]);
    dinosaur1 = new Dinosaur("Stegosaurus", "Vegan", 50);
    dinosaur2 = new Dinosaur("T-rex", "Carnivore", 100);
  });

  it("should have a name", function () {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it("should have a ticket price", function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it("should have a collection of dinosaurs", function () {
    const actual = park.checkLength();
    assert.strictEqual(actual, 2);
  });

  it("should be able to add a dinosaur to its collection", function () {
    const dinosaur3 = new Dinosaur("Diplodocus", "Vegan", 75);
    park.addDinosaur(dinosaur3);
    assert.strictEqual(park.checkLength(), 3);
  });

  it("should be able to remove a dinosaur from its collection", function () {
    park.removeDinosaur(dinosaur2);
    assert.strictEqual(park.checkLength(), 1);
  });

  it("should be able to find the dinosaur that attracts the most visitors", function () {
    assert.deepStrictEqual(park.attractMost(), dinosaur2);
  });

  it("should be able to find all dinosaurs of a particular species", function () {
    assert.deepStrictEqual(park.findDinoBySpecies("T-rex"), [dinosaur2]);
  });

  it("should be able to calculate the total number of visitors per day", function () {
    assert.strictEqual(park.getTotalVisitorsPerDay(), 150);
  });

  it("should be able to calculate the total number of visitors per year", function () {
    assert.strictEqual(park.getTotalVisitorsPerYear(), 54750);
  });

  it("should be able to calculate total revenue for one year", function () {
    assert.strictEqual(park.getTotalRevenuePerYear(), 547500);
  });
});
