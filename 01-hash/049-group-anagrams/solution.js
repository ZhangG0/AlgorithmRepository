/**
 * 49. 字母异位词分组
 * https://leetcode.cn/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  const a = 'a'.charCodeAt(0);
  for(str of strs) {
    const arrNum = new Array(26).fill(0);

    for(char of str) {
      arrNum[char.charCodeAt() - a]++;
    }

    if(map.has(arrNum.toString())) {
      map.get(arrNum.toString()).push(str);
    } else {
      map.set(arrNum.toString(), [str]);
    }
  }

  console.log([...map.values()]);
  return Array.from(map.values());
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);

// 思路
// 1. 遍历字符串数组，将每个字符串转换为字符数组，并排序
// 2. 将排序后的字符数组转换为字符串，作为键
// 3. 将原始字符串作为值，添加到键对应的数组中
// 4. 返回所有值的数组

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams2 = function(strs) {
  const map = new Map();
  for(str of strs) {
      const key = Array.from(str).sort().toString();
      const list = map.get(key) ? map.get(key) : new Array();
      list.push(str);
      map.set(key, list);
  }
  return Array.from(map.values());

};