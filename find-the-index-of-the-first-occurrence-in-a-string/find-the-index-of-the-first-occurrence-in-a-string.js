/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

const haystack = "leetcode";
const needle = "leeto";
console.log(strStr(haystack, needle));

const haystack1 = "sadbutsad";
const needle1 = "sad";
console.log(strStr(haystack1, needle1));
