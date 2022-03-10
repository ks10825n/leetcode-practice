/**
 * constructor
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 * addCar
 * @param {number} carType
 * @return {boolean}
 * removeCar
 * @param {number} carType
 * @return {boolean}
 * spacesLeft
 * @param {number} carType
 * @return {number}
 * spacesTaken
 * @param {number} carType
 * @return {number}
 */

// space complexity is O(1) -> space the algorithim uses is independent of variables
// time complexity is also O(1) -> there is no iteration, time is not dependent on the size of inputs

class ParkingSystem {
  constructor(big, medium, small) {
    this.lotSpaces = [null, big, medium, small];
    this.emptySpaces = [null, big, medium, small];
  }

  addCar(carType) {
    if (this.emptySpaces[carType]) {
      this.emptySpaces[carType]--;
      return true;
    }
    return false;
  }

  removeCar(carType) {
    if (this.emptySpaces[carType] < this.lotSpaces[carType]) {
      this.emptySpaces[carType]++;
      return true;
    }
    return false;
  };

  spacesLeft(carType) {
    return this.emptySpaces[carType];
  };

  spacesTaken(carType) {
    return this.lotSpaces[carType] - this.emptySpaces[carType];
  };
}

const parkingLot = new ParkingSystem(1, 1, 0);
console.log(parkingLot.addCar(1));
console.log(parkingLot.addCar(1)); // should give false as its overcapacity
console.log(parkingLot);
console.log(parkingLot.removeCar(1));
console.log(parkingLot.removeCar(1)); // should give false as it is removing too many cars
console.log(parkingLot);
console.log(parkingLot.spacesLeft(2));
console.log(parkingLot.spacesTaken(2));