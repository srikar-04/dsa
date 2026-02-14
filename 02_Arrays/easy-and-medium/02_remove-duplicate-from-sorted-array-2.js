var removeDuplicates = function(nums) {

    let ptr2 = 1

    if(nums.length <= 2) {
        return nums.length
    }

    // if(nums.length === 3) {
    //     if(nums[1] == nums[2]) return 2
    //     else return 3
    // }

    while(ptr2 < nums.length - 1) {
        // console.log('inside while block')

        // if(nums.length <= 2) {
        //     return nums.length
        // }
    
        // if(nums.length === 3) {
        //     if(nums[1] == nums[2]) return 2
        //     else return 3
        // }

        if(nums[ptr2-1] === nums[ptr2 + 1]) {
            // remove ptr2+1 element
            let start = ptr2 + 1
            nums.splice(start, 1)
            continue
        } 
        ptr2 = ptr2 + 1
    }

    console.log(nums)

    return nums.length
    
};

console.log(removeDuplicates([1, 2, 2]))