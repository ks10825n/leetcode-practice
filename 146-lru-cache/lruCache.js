/**
 *
 * Implement a LRU cache
 */

var LRUCache = function(capacity) {
  this.capacity = capacity
  this.map = new Map();
};

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (!this.map.has(key)) return -1

  // if get, move key to the top
  const temp = this.map.get(key);
  this.map.delete(key);
  this.map.set(key, temp);
  return this.map.get(key);
};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  // if key already exists, delete and move up
  if (this.map.has(key)) {
      this.map.delete(key)
  };
  this.map.set(key, value);
  // if adding, and is above capacity, eject the least used
  if (this.map.size > this.capacity) {
    this.map.delete(this.map.keys().next().value);
  }
};