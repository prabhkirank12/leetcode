// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
var containsDuplicate = function (nums) {
    if (nums.length <= 1) return false;
    if (nums.length === 2) {
        if (nums[0] === nums[1]) return true
    }
    //  TC and SC => O(n)
    const numsCount = {};
    for (let i = 0; i < nums.length; i++) {
        if (!numsCount[nums[i]]) {
            numsCount[nums[i]] = 1;
        } else {
            numsCount[nums[i]] += 1;
        }
    }

    for (num in numsCount) {
        if (numsCount[num] >= 2) return true;
    }

    return false;
};