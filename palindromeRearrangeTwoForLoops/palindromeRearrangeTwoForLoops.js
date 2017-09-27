function palindromeRearranging(inputString) {
    var arr = inputString.split('');
    var wordLength = arr.length;
    var counter = 0;

    for (var i=0; i<wordLength; i++) {
        if (counter%2===0) {
        for (var j=0; j<wordLength; j++) {
            if (arr[i]==arr[j]) {
                counter++;
            }
        }
    } else {
        arr.splice(i-1,1);
        console.log(arr);
        if (arr.length%2===0) {
          return true;
        } else {
          return false;
        }
    }
  }
    return true;
}
