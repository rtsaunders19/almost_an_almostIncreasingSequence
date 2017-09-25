function arrayChange(inputArray) {
    var counter = 0;

    for (var i=0; i<inputArray.length; i++) {
        if (inputArray[i]-inputArray[i+1]<-1) {
            counter+=inputArray[i+1]-inputArray[i] - 1
        }
        if (inputArray[i]-inputArray[i+1]>=0) {
            var addition = inputArray[i]-inputArray[i+1] + 1
            var newValue = inputArray[i+1]+addition;
            counter+=addition
            inputArray.splice(i+1,1,newValue);
        }
    }
    return counter;
}
