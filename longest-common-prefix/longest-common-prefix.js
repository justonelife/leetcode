/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs[0].length) return "";

  let count = 0;
  while (true) {
    if (count > strs[0].length) {
      break;
    }

    const char = strs[0][count];
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][count] !== char) {
        return strs[0].slice(0, count);
      }
    }
    count++;
  }

  return strs[0].slice(0, count);
};

const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
