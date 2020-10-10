/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    const up = (num, i) => {
        let next = Number(num[i]) + 1;
        if (num[i] == '9') {
            next = '0';
        }
        return num.substring(0, i) + next + num.substring(i + 1)
    }

    const down = (num, i) => {
        let next = Number(num[i]) - 1;
        if (num[i] == '0') {
            next = '9';
        }
        return num.substring(0, i) + next + num.substring(i + 1)
    }

    const queue = [];
    const deadendsSet = new Set(deadends);
    const visited = new Set();
    visited.add('0000');
    queue.push('0000');

    let step = 0;
    while (queue.length) {
        const sz = queue.length;
        for (let j = 0; j < sz; j++) {
            const node = queue.shift();
            if (deadendsSet.has(node)) continue;
            if (node == target) return step;

            for (let i = 0; i < 4; i++) {
                const upNum = up(node, i);
                if (!visited.has(upNum)) {
                    queue.push(upNum);
                    visited.add(upNum);
                }
                const downNum = down(node, i);
                if (!visited.has(downNum)) {
                    queue.push(downNum)
                    visited.add(downNum);
                }
            }
        }
        step++;
    }
    return -1;
};
// @lc code=end

