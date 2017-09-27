var countSmaller = function(nums) {
    var counts = [];
    for (var i=0; i<nums.length; i++) {
        counts.push(0);
        for (var j=i+1; j<nums.length; j++) {
            if (nums[i]>nums[j]) {
                counts[i]++;
            }
        }
    }
    return counts;
};
