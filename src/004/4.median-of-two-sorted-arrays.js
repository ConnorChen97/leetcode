// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
// 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
// 你可以假设 nums1 和 nums2 不会同时为空。

/**
 * 首先想到的第一种方法就是暴力破解，合并排序，找出中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    const nums = (nums1.concat(nums2)).sort((a, b) => a - b);
    return (nums.length % 2 == 0) ? (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2 : nums[Math.floor((nums.length - 1) / 2)];
};

/**
 * 第二种方式想到这是两个已排序的数组，那我们考虑如何做合并就好了
 * @param {*} nums1 
 * @param {*} nums2 
 */
const findMedianSortedArrays2 = (nums1, nums2) => {
    const nums = merge(nums1, nums2);
    return (nums.length % 2 == 0) ? (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2 : nums[Math.floor((nums.length - 1) / 2)];
};

/**
 * 两数组从后向前比较，谁大放在末端，一个数组用尽后，直接把另一个数组的剩余元素插入。
 * @param {*} nums1 
 * @param {*} nums2 
 */
const merge = (nums1, nums2) => {

    let i = nums1.length - 1; 
    let j = nums2.length - 1; 
    let index = nums1.length + nums2.length - 1;
    
    while(i>=0 && j>=0)
    {
        nums1[index--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }
    
    while(j >= 0)
    {
        nums1[index--] = nums2[j--];
    }
    return nums1;
}

console.log(findMedianSortedArrays2([1,2,5], [3,4]));