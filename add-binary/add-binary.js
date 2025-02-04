/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  while (a.length < b.length) {
    a = '0' + a;
  }

  while (b.length < a.length) {
    b = '0' + b;
  }

  let remember = 0;
  let result = '';

  for (let i = a.length - 1; i >= 0; i--) {
    let value = parseInt(a[i]) + parseInt(b[i]) + remember;

    if (value === 3) {
      result = '1' + result;
      remember = 1;
    } else if (value === 2) {
      result = '0' + result;
      remember = 1;
    } else if (value === 0) {
      result = '0' + result;
      remember = 0;
    } else {
      result = '1' + result;
      remember = 0;
    }
  }

  if (remember === 1) {
    result = '1' + result;
  }

  return result;
};

const a = '1111';
const b = '1111';
console.log(addBinary(a, b));
