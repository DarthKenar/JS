
const nums = [2, 7];
const target = 9;

var twoSum = function(nums, target) {
    for(let step = 0; step = nums.length-1; step++){
        if (nums[step]+nums[step+1] === target){
            return [step,step+1];
        };
    };
};