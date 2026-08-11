/**
 * 128. 最长连续序列
 * https://leetcode.cn/problems/longest-consecutive-sequence/
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  throw new Error("TODO: implement longestConsecutive");
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const realNums = new Set(nums);
  let realCount = 0;

  for(const num of realNums) {
      let count = 1;
      let plus = 1;
      if(!realNums.has(num - 1)) {
          while(realNums.has(num + plus)) {
              count++;
              plus++;
          }


          if(count > realCount) realCount = count;
      }

  }

  return realCount;
};