function isLucky(n) {
  numArray = [];
  var sum1 = 0;
  var sum2 = 0
  var arr = n.toString().split('');
  var half = arr.length/2;

  for (var i=0; i<arr.length; i++) {
    numArray.push(Number(arr[i]));
  }
  console.log(numArray);
  for (var x=0; x<half; x++) {
    sum1+=numArray[x];
  }
  for (var r=half; r<arr.length; r++) {
    sum2+=numArray[r];
  }
  if (sum1===sum2) {
    return true;
  } else {
    return false
  }
}
