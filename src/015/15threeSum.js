/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    let sum = 0;
    let length = 0;
    const set = new Set();
    const result = [];
    for (let i = 0; i < nums.length - 2; i ++) {
        for (let j = i + 1; j < nums.length - 1; j ++) {
            for (let k = j + 1; k < nums.length; k ++) {
                sum = nums[i] + nums[j] + nums[k];
                if (!sum) {
                    length = set.size;
                    const arr = [nums[i], nums[j], nums[k]];
                    const arr2 = arr.filter(_ => !!_);
                    
                    let re = 1;
                    for (const a of arr2) {
                        re = re * a;
                    }
                    set.add(re);
                    if (set.size == length + 1) {
                        result.push(arr);
                    }
                }
            }
        }
    }

    return result;
};

const data = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];
console.log(threeSum(data));