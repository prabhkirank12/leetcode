// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.


var singleNumber = function(nums) {
    // object
    const exist = {};
    // for every number in the nums array
    for (let num of nums) {
        // if the number exist then delete it
        if (exist[num]) delete exist[num];
        // if it doesn't then add
        else exist[num] = true;
    }
    // return the numbers left
  return Object.keys(exist)[0];
};