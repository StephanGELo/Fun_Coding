/*
155. Min Stack
*/

var MinStack = function() {
  this.stack = []
};

MinStack.prototype.push = function(x) {
  let min = this.stack.length === 0 ? x : this.stack[this.stack.length - 1].min
  this.stack.push( {val: x, min: Math.min(min, x)} )
};

MinStack.prototype.pop = function() {
  if (this.stack.length > 0){
    this.stack.pop()
  }
};

MinStack.prototype.top = function() {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1].val
  }
};

MinStack.prototype.getMin = function() {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1].min
  }
};


