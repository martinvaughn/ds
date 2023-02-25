// Two Sum Brute Force
// Loop through each element of array
// Loop through each el of array, starting @ second idx.
// If the element @ idx is equal to the target - el @ next idx && not same idx, then it's a match
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] === target - nums[j] && i != j) {
                return new Array(i, j);
            }
        }

    }
};


// Two Sum O(n) time & O(n) space
// Create a map
// For each item...
// Create var equal to the idx of a number which is the target minus the current number. This the # we want to find
// Try map.get on the var
// If it returns an idx & it's not the same idx as the current
//   then return an array w/ both idxs
// otherwise add a new value with it's index to the map.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    seenMap = new Map();
    for (let idx = 0; idx < nums.length; idx++) {
        let solutionIdx = seenMap.get(target - nums[idx]);
        if (Number.isFinite(solutionIdx) && solutionIdx != idx) {
            return new Array(solutionIdx, idx);
        }
        seenMap.set(nums[idx], idx);
    }
};


// Merge two sorted arrays

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Brute Force
/**
 * @param {number[]} nums1
 * @param {number} m // length of m
 * @param {number[]} nums2
 * @param {number} n // length of n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // insert
    // .splice(start, deleteCount, item1, item2, itemN)
    // Therefore, insert starting at the end of nums1, overwriting for the length of nums2.
    nums1.splice(m, n, ...nums2);
    nums1.sort((second, first) => second - first);
};


function increasingPaths(matrix) {
    let dp = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0));
    let max = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (dp[i][j] === 0) {
                dfs(matrix, i, j, dp);
            }
            max = Math.max(max, dp[i][j]);
        }
    }

    return max;
}

function dfs(matrix, i, j, dp) {
    if (dp[i][j] !== 0) {
        return dp[i][j];
    }
    let dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    dp[i][j] = 1;
    for (let k = 0; k < dir.length; k++) {
        let x = i + dir[k][0];
        let y = j + dir[k][1];
        if (x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length && matrix[x][y] > matrix[i][j]) {
            dp[i][j] = Math.max(dp[i][j], dfs(matrix, x, y, dp) + 1);
        }
    }
    return dp[i][j];
}