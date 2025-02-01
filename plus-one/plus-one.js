/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const result = [];
  doPlus(digits, digits.length - 1, 1, result);

  return result.reverse();
};

/**
 * @param {number[]} digits
 * @param {number} index
 * @param {number} value
 * @param {number[]} result
 */
var doPlus = function (digits, index, value, result) {
  if (index < 0) {
    if (value) {
      result.push(value);
    }
    return;
  }

  if (digits[index] + value >= 10) {
    result.push(digits[index] + value - 10);
    doPlus(digits, index - 1, 1, result);
  } else {
    result.push(digits[index] + value);
    doPlus(digits, index - 1, 0, result);
  }
}

const digits = [1, 2, 3];
console.log(plusOne(digits));
