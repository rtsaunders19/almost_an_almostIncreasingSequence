function almostIncreasingSequence(sequence) {
   if (sequence[0]>sequence[1]){
     for(var x=1; x<sequence.length-1; x++) {
        var deff = sequence[x]<sequence[x+1];
        if (deff===false) {
          return false
        }
     }
     return true
   }
  for(var i=1; i<sequence.length-1; i++) {
    var diff = sequence[i]<sequence[i+1];
    console.log('diff', diff);
    if(diff===false && sequence[i-1]<sequence[i+1]) {
      sequence.splice((i), 1);
      console.log('firstcheck', sequence)
      break;
      }

    if(diff===false) {
      sequence.splice((i+1), 1);
      console.log('second check', sequence);
      break;
      }

    }
    for(var n=1; n<sequence.length-1; n++) {
        var deff2 = sequence[n]<=sequence[n+1];
        if (deff2===false) {
          return false
        }
  }
  console.log('shortcut')
  return true
}
