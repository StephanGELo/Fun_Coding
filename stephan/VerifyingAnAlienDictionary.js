/************************************* 

 ##  LeetCode Problem 953: VERIFYING AN ALIEN DICTIONARY

*****
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.
*****************************************/

const isAlienSorted = (words, order) => {
  const alphabetOrder = {};

  for (let i = 0; i < order.length; i++) {
    alphabetOrder[order[i]] = i;
  }

  for (let i = 0; i < words.length - 1; i++) {
    let firstWord = words[i];
    let secondWord = words[i + 1];
    let shorterWordLen = Math.min(firstWord.length, secondWord.length);

    for (let j = 0; j < shorterWordLen; j++) {
      if (firstWord[j] !== secondWord[j]) {
        if (alphabetOrder[firstWord[j]] > alphabetOrder[secondWord[j]]) {
          return false;
        } else break;
      } else if (firstWord.length > secondWord.length) {
        if (firstWord[j] === secondWord[j] && secondWord[j + 1]) {
          continue;
        } else {
          return false;
        }
      }
    }
  }

  return true;
};

// TEST CASES
let words1 = ["hello", "leetcode"],
  order1 = "hlabcdefgijjmnopqrstuvwxyz";
let words2 = ["word", "world", "row"],
  order2 = "worldabcefghijkmnpqstuvxyz";
let words3 = ["apple", "app"],
  order3 = "abcdefghijklmnopqrstuvwxyz";
let words4 = ["kuvp", "q"],
  order4 = "ngxlkthsjuoqcpavbfdermiywz";
let words5 = ["my", "f"],
  order5 = "gelyriwxzdupkjctbfnqmsavho";
let words6 = ["apap", "app"],
  order6 = "abcdefghijklmnopqrstuvwxyz";

console.log(isAlienSorted(words1, order1)); // true
console.log(isAlienSorted(words2, order2)); // false
console.log(isAlienSorted(words3, order3)); // false
console.log(isAlienSorted(words4, order4)); // true
console.log(isAlienSorted(words5, order5)); // false
console.log(isAlienSorted(words6, order6)); // true
