const twoSumMap = function (nums, target) {
    let i, j;
    let n = nums.length;
    for (i = 0; i < n - 1; i++) {
        for (j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] == target) {
                console.log("Value : [" + nums[i] + "," + nums[j] + "]");
                console.log("position : [" + i + "," + j + "]");
                return;
            }
        }
    }
    console.log("No addition is possible");
}

// optimized code
const sumTwoObject = function (nums, target) {
    let i;
    let object = {};
    for (i = 0; i < nums.length; i++) {
        if (!object.hasOwnProperty(target - nums[i])) {
            object[nums[i]] = i;
        }
        else {
            return [object[target - nums[i]], i];
        }
    }
}

let nums = [2, 7, 11, 15];
let target = 9;
twoSumMap(nums, target);
console.log(sumTwoObject(nums, target));