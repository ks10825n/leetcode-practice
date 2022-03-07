// current trips = { id: { stationName: stationName, t: t} }
// { 5: { stationName: 'lincoln', t: '9' } }
// checkout, check if trips[id] exist, if yes
    // put into taken trips in the following format
    // by concate endStation to startStation, find the difference in times, and add push it to takenTrips array
// takenTrips = { startStationName-endStationName: [ times ]}

// getAverageTime, look within object by the given parameters. If exists, return the average time of the array

var UndergroundSystem = function() {
  this.currentTrips = {};
  this.takenTrips = {};
};

/**
* @param {number} id
* @param {string} stationName
* @param {number} t
* @return {void}
*/
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.currentTrips[id] = { stationName, t };
};

/**
* @param {number} id
* @param {string} stationName
* @param {number} t
* @return {void}
*/
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  const startStation = this.currentTrips[id].stationName;
  const checkInTime = this.currentTrips[id].t;
  delete this.currentTrips[id];
  // if path exists
  if (this.takenTrips[`${startStation}-${stationName}`]) this.takenTrips[`${startStation}-${stationName}`].push(t - checkInTime);
  else this.takenTrips[`${startStation}-${stationName}`] = [t - checkInTime];
};

/**
* @param {string} startStation
* @param {string} endStation
* @return {number}
*/
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  const times = this.takenTrips[`${startStation}-${endStation}`];
  // sum of times
  const totalTime = times.reduce((prev, curr) => {
      return prev + curr
  });

  const totalTrips = times.length;
  return totalTime/totalTrips
};

/**
* Your UndergroundSystem object will be instantiated and called as such:
* var obj = new UndergroundSystem()
* obj.checkIn(id,stationName,t)
* obj.checkOut(id,stationName,t)
* var param_3 = obj.getAverageTime(startStation,endStation)
*/