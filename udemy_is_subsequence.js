/*
JavaScript Algorithms and Data Structures Masterclass

Multiple Pointers - isSubsequence

Write a function called isSubsequence which takes in two strings and checks
whether the characters in the first string from a subsequence of the 
characters in the second string.  In other words, the function should check
whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:
Time: O(N)
Space: O(1)
*/

const isSubsequence = (str1, str2) => {
  let pointer1 = 0;
  let pointer2 = 0;
  if(str1.length > str2.length) {
    return false;
  }
  while(pointer1 < str1.length) {
    if(pointer1 === str1.length - 1 && str1[pointer1] === str2[pointer2]){
      return true;
    }
    if(str1[pointer1] === str2[pointer2]) {
      pointer1++;
      pointer2++;
    }
    if(str1[pointer1] !== str2[pointer2]) {
      pointer2++;
    }
    if(str2[pointer2] === undefined) {
      return false;
    }
  }
}