function matrixElementsSum(matrix) {
var sum = 0;
 for (var i=0; i<matrix[0].length; i++) {
  for (var n=0; n<matrix.length; n++) {
    if (matrix[n][i]>0) {
     sum+=matrix[n][i];
    } else {
     break;
    }
  }
 }
 return sum
}
