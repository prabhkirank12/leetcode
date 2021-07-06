// Complexity is O(n^2) because it has to iterate over the array twice
var twoSum = function(nums, target) {
    const len = nums.length;
    for (let i = 0; i < len; i++){
        for (let j = i + 1; j < len; j++){
            if (nums[i] + nums[j] === target) return [i,j];
        }
    }    
};

    // A better solution with complexity of O(n)
    // function twoSum(nums, target){
    //     const nums = {}
    //     for ( const num of nums){
    //         const match = target - num;
    //         if(match in nums){
    //             return [match, num]
    //         } else{
    //             nnums[num] = true;
    //         }
    //     }
    //     return [];
    // }
    // first creating a new map called comp which will store complements
    const comp = new Map();
    const len = nums.length;
    // iterate over all the elements, if the complement already exist in the map then it will return the pair
    // otherwise it will add it
    for (let i = 0; i < len; i++){
        // checking if it exists in the map
        if (comp[nums[i]] >= 0) return [comp[nums[i]], i];
        // addinng to the map
        comp[target-nums[i]] = i
    }
}

