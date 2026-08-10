# LeetCode 热题 100 冲刺仓库

以题型为主线，在 **21 天**内完成 LeetCode 热题 100 的第一轮训练，并通过间隔复习把“做过”变成“会做”。

> 当前进度：**0 / 100**。运行 `./scripts/progress.sh` 可随时统计；完成题目后在本页把 `[ ]` 改成 `[x]`。

题单来源：[LeetCode 热题 100 官方学习计划](https://leetcode.cn/studyplan/top-100-liked/)。

## 仓库结构

```text
.
├── 01-hash/                 # 哈希
├── 02-two-pointers/         # 双指针
├── 03-sliding-window/       # 滑动窗口
├── 04-substring/            # 子串 / 前缀和
├── 05-array/                # 普通数组
├── 06-matrix/               # 矩阵
├── 07-linked-list/          # 链表
├── 08-binary-tree/          # 二叉树
├── 09-graph/                # 图论
├── 10-backtracking/         # 回溯
├── 11-binary-search/        # 二分查找
├── 12-stack/                # 栈 / 单调栈
├── 13-heap/                 # 堆
├── 14-greedy/               # 贪心
├── 15-dynamic-programming/  # 一维动态规划
├── 16-multidimensional-dp/  # 多维动态规划
├── 17-techniques/           # 位运算 / 原地算法等技巧
├── templates/               # 解题记录模板
└── scripts/                 # 仓库维护脚本
```

每题建议在对应题型目录创建一个独立目录：`<题号>-<英文-slug>/`，其中至少包含解题记录 `README.md` 和代码文件。例如：

```text
01-hash/001-two-sum/
├── README.md
└── solution.ts              # 也可以使用 .py / .java / .go / .cpp
```

## 21 天刷题方案

| 周期 | 新题数 | 题型 | 训练目标 |
| --- | ---: | --- | --- |
| 第 1 周 | 35 | 哈希、双指针、滑动窗口、子串、数组、矩阵、链表 | 建立数组与链表基本功，能识别常见题型信号 |
| 第 2 周 | 35 | 二叉树、图论、回溯、二分查找 | 掌握递归、搜索、剪枝和边界控制 |
| 第 3 周 | 30 | 栈、堆、贪心、动态规划、技巧 | 形成状态设计、数据结构选择和综合解题能力 |

### 每日节奏（约 2 小时）

1. **20 分钟复习**：不看答案，重写昨天或复习队列中的 1～2 题。
2. **80 分钟新题**：每天 4～5 题；每题先独立思考 15～20 分钟，卡住再看提示。
3. **20 分钟总结**：补齐思路、复杂度、易错点，并把需要复习的题加入 D1 / D3 / D7 / D14 队列。

### 打钩标准

只有同时满足以下条件，才把题目前的 `[ ]` 改成 `[x]`：

- 不复制答案，能够独立写出并通过；
- 能用 1 分钟讲清核心思路和为什么正确；
- 能说出时间、空间复杂度；
- 已在对应题型目录留下代码和简短复盘。

如果看过题解后才完成，先不要打钩；第二天脱离答案重做通过后再勾选。

## LeetCode 热题 100 清单

### 01 哈希（3）

- [ ] **1. 两数之和**（简单）— [题目](https://leetcode.cn/problems/two-sum/)
- [ ] **49. 字母异位词分组**（中等）— [题目](https://leetcode.cn/problems/group-anagrams/)
- [ ] **128. 最长连续序列**（中等）— [题目](https://leetcode.cn/problems/longest-consecutive-sequence/)

### 02 双指针（4）

- [ ] **283. 移动零**（简单）— [题目](https://leetcode.cn/problems/move-zeroes/)
- [ ] **11. 盛最多水的容器**（中等）— [题目](https://leetcode.cn/problems/container-with-most-water/)
- [ ] **15. 三数之和**（中等）— [题目](https://leetcode.cn/problems/3sum/)
- [ ] **42. 接雨水**（困难）— [题目](https://leetcode.cn/problems/trapping-rain-water/)

### 03 滑动窗口（2）

- [ ] **3. 无重复字符的最长子串**（中等）— [题目](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)
- [ ] **438. 找到字符串中所有字母异位词**（中等）— [题目](https://leetcode.cn/problems/find-all-anagrams-in-a-string/)

### 04 子串 / 前缀和（3）

- [ ] **560. 和为 K 的子数组**（中等）— [题目](https://leetcode.cn/problems/subarray-sum-equals-k/)
- [ ] **239. 滑动窗口最大值**（困难）— [题目](https://leetcode.cn/problems/sliding-window-maximum/)
- [ ] **76. 最小覆盖子串**（困难）— [题目](https://leetcode.cn/problems/minimum-window-substring/)

### 05 普通数组（5）

- [ ] **53. 最大子数组和**（中等）— [题目](https://leetcode.cn/problems/maximum-subarray/)
- [ ] **56. 合并区间**（中等）— [题目](https://leetcode.cn/problems/merge-intervals/)
- [ ] **189. 轮转数组**（中等）— [题目](https://leetcode.cn/problems/rotate-array/)
- [ ] **238. 除自身以外数组的乘积**（中等）— [题目](https://leetcode.cn/problems/product-of-array-except-self/)
- [ ] **41. 缺失的第一个正数**（困难）— [题目](https://leetcode.cn/problems/first-missing-positive/)

### 06 矩阵（4）

- [ ] **73. 矩阵置零**（中等）— [题目](https://leetcode.cn/problems/set-matrix-zeroes/)
- [ ] **54. 螺旋矩阵**（中等）— [题目](https://leetcode.cn/problems/spiral-matrix/)
- [ ] **48. 旋转图像**（中等）— [题目](https://leetcode.cn/problems/rotate-image/)
- [ ] **240. 搜索二维矩阵 II**（中等）— [题目](https://leetcode.cn/problems/search-a-2d-matrix-ii/)

### 07 链表（14）

- [ ] **160. 相交链表**（简单）— [题目](https://leetcode.cn/problems/intersection-of-two-linked-lists/)
- [ ] **206. 反转链表**（简单）— [题目](https://leetcode.cn/problems/reverse-linked-list/)
- [ ] **234. 回文链表**（简单）— [题目](https://leetcode.cn/problems/palindrome-linked-list/)
- [ ] **141. 环形链表**（简单）— [题目](https://leetcode.cn/problems/linked-list-cycle/)
- [ ] **142. 环形链表 II**（中等）— [题目](https://leetcode.cn/problems/linked-list-cycle-ii/)
- [ ] **21. 合并两个有序链表**（简单）— [题目](https://leetcode.cn/problems/merge-two-sorted-lists/)
- [ ] **2. 两数相加**（中等）— [题目](https://leetcode.cn/problems/add-two-numbers/)
- [ ] **19. 删除链表的倒数第 N 个结点**（中等）— [题目](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)
- [ ] **24. 两两交换链表中的节点**（中等）— [题目](https://leetcode.cn/problems/swap-nodes-in-pairs/)
- [ ] **25. K 个一组翻转链表**（困难）— [题目](https://leetcode.cn/problems/reverse-nodes-in-k-group/)
- [ ] **138. 随机链表的复制**（中等）— [题目](https://leetcode.cn/problems/copy-list-with-random-pointer/)
- [ ] **148. 排序链表**（中等）— [题目](https://leetcode.cn/problems/sort-list/)
- [ ] **23. 合并 K 个升序链表**（困难）— [题目](https://leetcode.cn/problems/merge-k-sorted-lists/)
- [ ] **146. LRU 缓存**（中等）— [题目](https://leetcode.cn/problems/lru-cache/)

### 08 二叉树（15）

- [ ] **94. 二叉树的中序遍历**（简单）— [题目](https://leetcode.cn/problems/binary-tree-inorder-traversal/)
- [ ] **104. 二叉树的最大深度**（简单）— [题目](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)
- [ ] **226. 翻转二叉树**（简单）— [题目](https://leetcode.cn/problems/invert-binary-tree/)
- [ ] **101. 对称二叉树**（简单）— [题目](https://leetcode.cn/problems/symmetric-tree/)
- [ ] **543. 二叉树的直径**（简单）— [题目](https://leetcode.cn/problems/diameter-of-binary-tree/)
- [ ] **102. 二叉树的层序遍历**（中等）— [题目](https://leetcode.cn/problems/binary-tree-level-order-traversal/)
- [ ] **108. 将有序数组转换为二叉搜索树**（简单）— [题目](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/)
- [ ] **98. 验证二叉搜索树**（中等）— [题目](https://leetcode.cn/problems/validate-binary-search-tree/)
- [ ] **230. 二叉搜索树中第 K 小的元素**（中等）— [题目](https://leetcode.cn/problems/kth-smallest-element-in-a-bst/)
- [ ] **199. 二叉树的右视图**（中等）— [题目](https://leetcode.cn/problems/binary-tree-right-side-view/)
- [ ] **114. 二叉树展开为链表**（中等）— [题目](https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/)
- [ ] **105. 从前序与中序遍历序列构造二叉树**（中等）— [题目](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
- [ ] **437. 路径总和 III**（中等）— [题目](https://leetcode.cn/problems/path-sum-iii/)
- [ ] **236. 二叉树的最近公共祖先**（中等）— [题目](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/)
- [ ] **124. 二叉树中的最大路径和**（困难）— [题目](https://leetcode.cn/problems/binary-tree-maximum-path-sum/)

### 09 图论（4）

- [ ] **200. 岛屿数量**（中等）— [题目](https://leetcode.cn/problems/number-of-islands/)
- [ ] **994. 腐烂的橘子**（中等）— [题目](https://leetcode.cn/problems/rotting-oranges/)
- [ ] **207. 课程表**（中等）— [题目](https://leetcode.cn/problems/course-schedule/)
- [ ] **208. 实现 Trie（前缀树）**（中等）— [题目](https://leetcode.cn/problems/implement-trie-prefix-tree/)

### 10 回溯（8）

- [ ] **46. 全排列**（中等）— [题目](https://leetcode.cn/problems/permutations/)
- [ ] **78. 子集**（中等）— [题目](https://leetcode.cn/problems/subsets/)
- [ ] **17. 电话号码的字母组合**（中等）— [题目](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/)
- [ ] **39. 组合总和**（中等）— [题目](https://leetcode.cn/problems/combination-sum/)
- [ ] **22. 括号生成**（中等）— [题目](https://leetcode.cn/problems/generate-parentheses/)
- [ ] **79. 单词搜索**（中等）— [题目](https://leetcode.cn/problems/word-search/)
- [ ] **131. 分割回文串**（中等）— [题目](https://leetcode.cn/problems/palindrome-partitioning/)
- [ ] **51. N 皇后**（困难）— [题目](https://leetcode.cn/problems/n-queens/)

### 11 二分查找（6）

- [ ] **35. 搜索插入位置**（简单）— [题目](https://leetcode.cn/problems/search-insert-position/)
- [ ] **74. 搜索二维矩阵**（中等）— [题目](https://leetcode.cn/problems/search-a-2d-matrix/)
- [ ] **34. 在排序数组中查找元素的第一个和最后一个位置**（中等）— [题目](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)
- [ ] **33. 搜索旋转排序数组**（中等）— [题目](https://leetcode.cn/problems/search-in-rotated-sorted-array/)
- [ ] **153. 寻找旋转排序数组中的最小值**（中等）— [题目](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/)
- [ ] **4. 寻找两个正序数组的中位数**（困难）— [题目](https://leetcode.cn/problems/median-of-two-sorted-arrays/)

### 12 栈（5）

- [ ] **20. 有效的括号**（简单）— [题目](https://leetcode.cn/problems/valid-parentheses/)
- [ ] **155. 最小栈**（中等）— [题目](https://leetcode.cn/problems/min-stack/)
- [ ] **394. 字符串解码**（中等）— [题目](https://leetcode.cn/problems/decode-string/)
- [ ] **739. 每日温度**（中等）— [题目](https://leetcode.cn/problems/daily-temperatures/)
- [ ] **84. 柱状图中最大的矩形**（困难）— [题目](https://leetcode.cn/problems/largest-rectangle-in-histogram/)

### 13 堆（3）

- [ ] **215. 数组中的第 K 个最大元素**（中等）— [题目](https://leetcode.cn/problems/kth-largest-element-in-an-array/)
- [ ] **347. 前 K 个高频元素**（中等）— [题目](https://leetcode.cn/problems/top-k-frequent-elements/)
- [ ] **295. 数据流的中位数**（困难）— [题目](https://leetcode.cn/problems/find-median-from-data-stream/)

### 14 贪心（4）

- [ ] **121. 买卖股票的最佳时机**（简单）— [题目](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)
- [ ] **55. 跳跃游戏**（中等）— [题目](https://leetcode.cn/problems/jump-game/)
- [ ] **45. 跳跃游戏 II**（中等）— [题目](https://leetcode.cn/problems/jump-game-ii/)
- [ ] **763. 划分字母区间**（中等）— [题目](https://leetcode.cn/problems/partition-labels/)

### 15 动态规划（10）

- [ ] **70. 爬楼梯**（简单）— [题目](https://leetcode.cn/problems/climbing-stairs/)
- [ ] **118. 杨辉三角**（简单）— [题目](https://leetcode.cn/problems/pascals-triangle/)
- [ ] **198. 打家劫舍**（中等）— [题目](https://leetcode.cn/problems/house-robber/)
- [ ] **279. 完全平方数**（中等）— [题目](https://leetcode.cn/problems/perfect-squares/)
- [ ] **322. 零钱兑换**（中等）— [题目](https://leetcode.cn/problems/coin-change/)
- [ ] **139. 单词拆分**（中等）— [题目](https://leetcode.cn/problems/word-break/)
- [ ] **300. 最长递增子序列**（中等）— [题目](https://leetcode.cn/problems/longest-increasing-subsequence/)
- [ ] **152. 乘积最大子数组**（中等）— [题目](https://leetcode.cn/problems/maximum-product-subarray/)
- [ ] **416. 分割等和子集**（中等）— [题目](https://leetcode.cn/problems/partition-equal-subset-sum/)
- [ ] **32. 最长有效括号**（困难）— [题目](https://leetcode.cn/problems/longest-valid-parentheses/)

### 16 多维动态规划（5）

- [ ] **62. 不同路径**（中等）— [题目](https://leetcode.cn/problems/unique-paths/)
- [ ] **64. 最小路径和**（中等）— [题目](https://leetcode.cn/problems/minimum-path-sum/)
- [ ] **5. 最长回文子串**（中等）— [题目](https://leetcode.cn/problems/longest-palindromic-substring/)
- [ ] **1143. 最长公共子序列**（中等）— [题目](https://leetcode.cn/problems/longest-common-subsequence/)
- [ ] **72. 编辑距离**（中等）— [题目](https://leetcode.cn/problems/edit-distance/)

### 17 技巧（5）

- [ ] **136. 只出现一次的数字**（简单）— [题目](https://leetcode.cn/problems/single-number/)
- [ ] **169. 多数元素**（简单）— [题目](https://leetcode.cn/problems/majority-element/)
- [ ] **75. 颜色分类**（中等）— [题目](https://leetcode.cn/problems/sort-colors/)
- [ ] **31. 下一个排列**（中等）— [题目](https://leetcode.cn/problems/next-permutation/)
- [ ] **287. 寻找重复数**（中等）— [题目](https://leetcode.cn/problems/find-the-duplicate-number/)

## 维护约定

1. 用 `templates/solution-template.md` 复制一份解题记录，不在提交中粘贴完整题面。
2. 一题一目录、一题一提交，推荐提交信息：`solve: 001 two sum`。
3. 代码至少覆盖官方示例和自己补充的边界用例。
4. 第一次依赖题解完成时，在解题记录中标记“待复习”，不要勾选本页。
5. 复习发现写不出时，取消勾选，修正记录后重新进入 D1 / D3 / D7 / D14 队列。
