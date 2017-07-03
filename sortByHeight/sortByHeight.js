function sortByHeight(a) {
  var nums = []
  var newArray = []
  for (var i=0; i<a.length; i++) {
    if (a[i]===-1) {
      nums.push(i)
    }
   }
  for (var n=0; n<a.length; n++) {
    if (a[n]!=-1) {
      newArray.push(a[n])
    }
  }
  newArray.sort(function(a,b) {
    return a-b;
  })
  for (var x=0; x<nums.length; x++) {
    newArray.splice(nums[x], 0, -1)
  }
  return newArray
}
