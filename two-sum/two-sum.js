/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    const remain = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === remain) {
        return [i, j];
      }
    }
  }
};

const nums = [1, 2, 3, 4];
const target = 4;
console.log(twoSum(nums, target));
