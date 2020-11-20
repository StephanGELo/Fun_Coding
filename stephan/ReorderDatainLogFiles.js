/**** 
 
 ##  LeetCode Problem 937: Reorder Data in Log Files

****/

/*************** 
 
    You have an array of logs.  Each log is a space delimited string of words.

    For each log, the first word in each log is an alphanumeric identifier.  Then, either:

    Each word after the identifier will consist only of lowercase letters, or;
    Each word after the identifier will consist only of digits.
    We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

    Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

    Return the final order of the logs.

    Example 1:

Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
 

Constraints:

0 <= logs.length <= 100
3 <= logs[i].length <= 100
logs[i] is guaranteed to have an identifier, and a word after the identifier.


****************/

/**
 * @param {string[]} logs
 * @return {string[]}
 */

var reorderLogFiles = function (logs) {
  let letters = [];
  let digits = [];

  const sortArrays = (str1, str2) => {
    let str1SpaceIndex = str1.indexOf(" ");
    let str1Id = str1.slice(0, str1SpaceIndex);
    let str1Logs = str1.slice(str1SpaceIndex);

    let str2SpaceIndex = str2.indexOf(" ");
    let str2Id = str2.slice(0, str2SpaceIndex);
    let str2Logs = str2.slice(str2SpaceIndex);

    if (str1Logs < str2Logs) return -1;
    if (str1Logs > str2Logs) return 1;
    if (str1Id < str2Id) return -1;
    if (str1Id > str2Id) return 1;

    return 0;
  };

  const reorderFiles = files => {
    if (files.length === 0) {
      letters.sort((str1, str2) => sortArrays(str1, str2));
      return letters.concat(digits);
    }

    if (Number(files[0][files[0].length - 1]) >= 0) {
      digits.push(files[0]);
      files.splice(0, 1);
    } else {
      letters.push(files[0]);
      files.splice(0, 1);
    }
    return reorderFiles(files);
  };

  return reorderFiles(logs);
};

let logs1 = [
  "dig1 8 1 5 1",
  "let1 art can",
  "dig2 3 6",
  "let2 own kit dig",
  "let3 art zero"
];
let logs2 = [
  "a1 9 2 3 1",
  "g1 act car",
  "zo4 4 7",
  "ab1 off key dog",
  "a8 act zoo"
];
let logs3 = ["w 7 2", "l 1 0", "6 066", "o aay", "e yal"];

console.log("results are/: ", reorderLogFiles(logs1)); // ['let1 art can','let3 art zero','let2 own kit dig','dig1 8 1 5 1',dig2 3 6']
console.log("results are/: ", reorderLogFiles(logs2)); // ['g1 act car','a8 act zoo','ab1 off key dog','a1 9 2 3 1','zo4 4 7']
console.log("results are/: ", reorderLogFiles(logs3)); //  [ 'o aay', 'e yal', 'w 7 2', 'l 1 0', '6 066' ]
