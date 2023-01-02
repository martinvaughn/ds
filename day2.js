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