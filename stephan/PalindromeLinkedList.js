/****

 ##  LeetCode Problem 234: Palindrome Linked List

****/

/***************
 * Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?

 ****************/

/***** SOLUTION BELOW: *****/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function (head) {
  let array = [];
  let currentNode = head;
  let element1 = 0;
  let element2 = 0;

  while (currentNode !== null) {
    array.push(currentNode.val);
    if (currentNode.next === null) {
      element2 = array.length - 1;
    }
    currentNode = currentNode.next;
  }

  while (element1 <= element2) {
    if (array[element1] !== array[element2]) {
      return false;
    }
    element1++;
    element2--;
  }

  return true;
};
