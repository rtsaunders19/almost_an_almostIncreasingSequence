function palindromeRearranging(inputString) {
    var arr = inputString.split('');

    var obj = {};


for (var i=0; i<arr.length; i++) {
    if (!obj.hasOwnProperty(arr[i])) {
    obj[arr[i]] = 1;
    } else {
    obj[arr[i]]++;
    }
}

var counter = 0;
for (val in obj) {
    if(obj[val]%2!=0) {
        counter++;
    }
  }
return counter > 1 ? false : true;
}
