/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const str = x.toString();
  let isCenter = false;
  let index = 0;

  while (!isCenter) {
    if (index === Math.floor(str.length / 2)) {
      isCenter = true;
    }
    if (str[index] !== str[str.length - 1 - index]) {
      return false;
    }
    index++;
  }

  return true;
};

const number = 121;
console.log(isPalindrome(number));

