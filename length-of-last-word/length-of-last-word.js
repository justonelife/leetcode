/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s.trim().split(/[\s\t]+/g).pop().length;
};

const s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s));
