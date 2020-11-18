/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head)  return null;

  let node = head;

  let stack = [];
  while (node != null) {
    stack.push(node.val);
    node = node.next;
  }

  let currVal = stack.pop();
  let currNode = new ListNode(currVal, null);

  let head2 = currNode;
  let nextNode;

  while (stack.length != 0) {
    nextNode = new ListNode(stack.pop(), null);
    currNode.next = nextNode;
    currNode = nextNode;
  }
  return head2;
};
