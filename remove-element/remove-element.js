/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let index = 0;

  while (nums[index] !== undefined) {
    if (nums[index] === val) {
      nums.splice(index, 1);
    } else {
      index++;
    }
  }

  return nums.length;
};

const nums = [0, 1, 1, 2, 3];
const val = 1;

console.log(removeElement(nums, val));
