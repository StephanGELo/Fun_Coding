/****

 ##  LeetCode Problem 706: Design HashMap

****/

/***************
 * Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.

Example:

MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found)

Note:

All keys and values will be in the range of [0, 1000000].
The number of operations will be in the range of [1, 10000].
Please do not use the built-in HashMap library.
 ****************/

/***** SOLUTION BELOW: *****/

// /**
//  * Initialize your data structure here.
//  */

var MyHashMap = function () {
  this.bucket = new Array(10000).fill(-1);
  this.size = 999999;
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const index = key % this.size;

  if (this.bucket[index] !== -1 && this.bucket[index] !== undefined) {
    let foundIndex = -1;
    for (let i = 0; i < this.bucket[index].length; i++) {
      if (this.bucket[index][i][0] === key) {
        foundIndex = i;
        break;
      }
    }
    if (foundIndex === -1) {
      this.bucket[index].push([key, value]);
    } else {
      this.bucket[index][foundIndex][1] = value;
    }
  } else {
    this.bucket[index] = [[key, value]];
  }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const index = key % this.size;

  if (this.bucket[index] !== -1 && this.bucket[index] !== undefined) {
    for (let item of this.bucket[index]) {
      if (item[0] === key) return item[1];
    }
  }

  return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const index = key % this.size;

  if (this.bucket[index] !== -1 && this.bucket[index] !== undefined) {
    for (let i = 0; i < this.bucket[index].length; i++) {
      if (this.bucket[index][i][0] === key) {
        this.bucket[index].splice(i, 1);
        if (this.bucket[index].length === 0) {
          this.bucket[index] = -1;
        }
      }
      return;
    }
  }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

// Test Cases:
const hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
console.log(hashMap.get(1)); // returns 1
console.log(hashMap.get(3)); // returns -1 (not found)
hashMap.put(2, 1); // update the existing value
console.log(hashMap.get(2)); // returns 1 ;
hashMap.remove(2); // remove the mapping for 2
console.log(hashMap.get(2)); // returns -1 (not found) ;
