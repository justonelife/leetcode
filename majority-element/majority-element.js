/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];

  let majority = nums[0];
  let max = 0;
  let stat = {};

  nums.forEach(num => {
    if (!stat[num]) {
      stat[num] = 0;
    }
    stat[num]++;
    if (stat[num] > max) {
      majority = num;
      max = stat[num];
    }
  });

  return majority;
};

const nums = [2, 2, 1, 1, 1, 2, 2];
const nums1 = [3, 2, 3];
console.log(majorityElement(nums1));
