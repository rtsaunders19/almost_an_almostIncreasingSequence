function allLongestStrings(inputArray) {
    var newArray = [];
    var nums = [];
    for (var i=0; i<inputArray.length; i++) {
        var num = inputArray[i].length
        nums.push(num)
    }
    for (var n=0; n<nums.length; n++) {
        var maximum = Math.max.apply(null, nums)
        if (nums[n]===maximum) {
            newArray.push(inputArray[n])
        }
    }
    return newArray;
}
