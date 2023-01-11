const Park = function (name, ticketPrice, dinosaurCollection) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = dinosaurCollection;

  Park.prototype.checkLength = function () {
    return this.dinosaurCollection.length;
  };

  Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurCollection.push(dinosaur);
  };

  Park.prototype.removeDinosaur = function (dinosaur) {
    const index = this.dinosaurCollection.indexOf(dinosaur);
    this.dinosaurCollection.splice(index, 1);
  };

  Park.prototype.attractMost = function () {
    const list = this.dinosaurCollection.sort(
      (a, b) => b.guestsAttractedPerDay - a.guestsAttractedPerDay
    );
    return list[0];
  };
};

Park.prototype.findDinoBySpecies = function (species) {
  let dinoSpecies = [];
  for (const dinosaur of this.dinosaurCollection) {
    if (dinosaur.species === species) {
      dinoSpecies.push(dinosaur);
    }
  }
  return dinoSpecies;
};

Park.prototype.getTotalVisitorsPerDay = function () {
  let total = 0;
  for (const dinosaur of this.dinosaurCollection) {
    total += dinosaur.guestsAttractedPerDay;
  }
  return total;
};

Park.prototype.getTotalVisitorsPerYear = function () {
  return this.getTotalVisitorsPerDay() * 365;
};

Park.prototype.getTotalRevenuePerYear = function () {
  return this.ticketPrice * this.getTotalVisitorsPerYear();
};

module.exports = Park;
