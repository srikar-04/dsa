var removeDuplicates = function(nums) {
    let pointer1 = 0
    let pointer2 = 1

    if(nums.length <= 1) {
        return 1
    }

    while(pointer2 < nums.length) {
        if(nums[pointer1] === nums[pointer2]) {
            nums.splice(pointer2, 1)
            continue
        }
        pointer1 = pointer2
        pointer2 = pointer2 + 1
    }

    console.log(nums)

    return nums.length
};

console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5]))