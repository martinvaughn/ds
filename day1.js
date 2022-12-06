// Given a list of nums, determine if there are any duplicates in the nums.

function calcDups(nums) {
    // return nums.sort().some((num, idx) => num === nums[idx - 1]) // O(n log n) time but no additional memory usage
    return new Set(nums).size < nums.length; //  O(n) time, but takes up memory
}

var tests = 2;

var dupNums = calcDups([1, 2, 3, 4, 4]);
var noDupNums = calcDups([1, 2, 3, 4, 5])

console.log(`There should be ${tests} prints`)
if (dupNums) { console.log("Passed.") }
if (!noDupNums) { console.log("Passed.") }


// Given a list of nums, determine the largest contiguous sub array.

function calcLargestSub(nums) {
    let currentSubArray = nums[0];
    let maxSubArray = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        currentSubArray = Math.max(num, currentSubArray + num);
        maxSubArray = Math.max(maxSubArray, currentSubArray);

    }
    return maxSubArray
}

var tests = 2;

var largestSum = calcLargestSub([1, 2, -3, 4, 4]);
var largestSum2 = calcLargestSub([1, 2, -3]);

console.log(`There should be ${tests} prints`)
if (largestSum === 8) { console.log("Passed largest.") }
if (largestSum2 === 3) { console.log("Passed.") }