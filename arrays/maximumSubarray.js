// Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest sum and return its sum.
var maxSubArray = function (nums) {
    let maxCurr = nums[0];
    let maxGlobal = nums[0];

    // we start at 1 because we have already captured 0th index element above
    for(let i = 1; i < nums.length; i++) {
        // this will find the max between the curr number we are on or the total of previous and current;
        maxCurr = Math.max(nums[i], maxCurr + nums[i]);
        if(maxCurr > maxGlobal) maxGlobal = maxCurr;
    }

    return maxGlobal;
};