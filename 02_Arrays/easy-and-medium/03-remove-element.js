var removeElement = function(nums, val) {

    if(nums.length === 0) return 0

    let index = 0

    while(index < nums.length) {
        if(nums[index] === val) {
            nums.splice(index, 1)
            continue
        }
        index = index + 1
    }

    console.log(nums)

    return nums.length

};

console.log(removeElement([], 5))