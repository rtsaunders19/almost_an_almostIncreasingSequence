function almostIncreasingSequence(sequence) {
    if(sequence.length == 2) return true;

    var error = 0;

    for(var i = 0; i < sequence.length - 1; i++){
        // if current value is greater than next value
        if(sequence[i] >= sequence[i+1]){
            // Test whether stepping back or forwards can fix the sequence
            var noStepBack = sequence[i-1] >= sequence[i+1];
            var noStepFoward = sequence[i] >= sequence[i+2];
            // We only test for bridge gaps when i > 0
            if(i > 0 && noStepBack && noStepFoward) {
                // Cannot step back over gap forwards or backwards
                // Counts as two errors ONLY WHEN BOTH PRESENT
                error+=2;
            } else{
                // Typical error
                error++;
            }
        }
        if(error > 1) return false;
    }

    return true;
}
