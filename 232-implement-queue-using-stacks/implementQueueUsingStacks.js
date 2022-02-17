/**
 * Implement a FIFO Queue using only two stacks (as a constructor). The Queue
 * should support all the functions of a normal queue (push, peek, pop, and
 * empty)
 *
 * push(x) -> pushes element x to the back of the queue
 * pop() -> removes the element from the front of the queue and returns it
 * peek() -> returns the element at the front of the queue
 * empty() -> returns a boolean if queue is empty or not
 *
 * Use an array as a stack, but you can NOT use shift or unshift. You are only
 * allowed to use push, pop, and length methods from Array.prototype.
 */

var MyQueue = function() {
  this.normal = [];
  this.reverse = [];
};

MyQueue.prototype.push = function(x) {
  this.normal = [];
  this.reverse.push(x);
  for (let i = this.reverse.length - 1; i >= 0; i--) {
    this.normal.push(this.reverse[i]);
  };
};

MyQueue.prototype.pop = function() {
  const popped = this.normal.pop();
  this.reverse = [];
  for (let i = this.normal.length - 1; i >= 0; i--) {
    this.reverse.push(this.normal[i]);
  };
  return popped;
};

MyQueue.prototype.peek = function() {
  return this.normal[this.normal.length - 1];
};

MyQueue.prototype.empty = function() {
  if (this.normal.length === 0) return true;
  else return false;
};

const test = new MyQueue;
test.push(1);
test.push(2);
test.push(3);
const popped = test.pop();
console.log(popped);
test.push(4);
console.log(test.peek())
console.log(test.empty());
test.pop();
test.pop();
test.pop();
console.log(test.empty());
console.log(test);

