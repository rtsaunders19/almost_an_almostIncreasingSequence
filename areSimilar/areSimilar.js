function areSimilar(arr1, arr2) {
  for (var i=0; i<arr1.length; i++) {
    if (arr1[i]!==arr2[i]) {
      for (var j=i; j<arr1.length; j++) {
        if (arr1[i]===arr2[j]) {
          var swap1 = parseInt(arr2.splice(i,1));
          var swap2 = parseInt(arr2.splice(j-1,1));
          arr2.splice(j,0,swap1);
          arr2.splice(i,0,swap2);
          console.log(arr1, arr2);
        }
      }
    }
  }
  for (var k=0; k<arr1.length; k++) {
    if (arr1[k]!==arr2[k]) {
      return false;
    }
  }
  return true;
}
