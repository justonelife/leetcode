/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (isOpenBracket(s[i])) {
      stack.push(s[i]);
    } else {
      if (!stack.length || !closingBracket(stack[stack.length - 1], s[i])) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return !!!stack.length;
};

/**
 * @param {string} char
 * @return {boolean}
 */
var isOpenBracket = function (char) {
  return char === '(' || char === '[' || char === '{';
}

/**
 * @param {string} openBr
 * @param {string} closeBr
 * @return {boolean}
 */
var closingBracket = function (openBr, closeBr) {
  const pair = openBr + closeBr;
  return pair === '()' || pair === '[]' || pair === '{}';
}

const s = '((()))';
console.log(isValid(s));

