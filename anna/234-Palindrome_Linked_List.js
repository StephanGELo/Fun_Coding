/*
234. Palindrome Linked List
*/

var isPalindrome = function(head) {

    var rec = "";
    var seq = "";

    while(head != null){
        seq += head.val;
        rec = head.val + rec;
        head = head.next;
    }
    return seq == rec;
};


