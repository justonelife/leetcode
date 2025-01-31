/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    const val = nums[middle];

    if (target === val) {
      return middle;
    } else if (target < val) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return left;
};

const nums = [1, 3, 5, 6];
const target = 2;
console.log(searchInsert(nums, target));
