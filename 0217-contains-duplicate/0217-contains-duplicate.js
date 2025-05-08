/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let set = new Set()

  for (let num of nums) {
    if (set.has(num)) return true;
    else set.add(num)
  }

  return false
};
// @lc code=end

//적어도 두번이면됨