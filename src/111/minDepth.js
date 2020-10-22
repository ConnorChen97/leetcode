/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    const queue = []
    let depth = 1

    queue.push(root)
    if (!root) return 0;

    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift()
            if (!node.left && !node.right) return depth;
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        depth++
    }
    return depth
};
// @lc code=end

