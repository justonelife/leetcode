/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const mark = {};
  let index = 0;

  while (nums[index] !== undefined) {
    const num = nums[index];

    if (mark[num]) {
      nums.splice(index, 1);
    } else {
      mark[num] = true;
      index++;
    }
  }

  return nums.length;
};

const arr = [1, 1, 2];
console.log(removeDuplicates(arr));

const arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(arr1));
