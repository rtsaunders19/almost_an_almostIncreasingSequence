function reverseParentheses(s) {
  var counter = 0;
  for(var i=0; i<s.length; i++) {
    if (s[i]==='(') {
      var arr = s.split('');
      var regularBracket = arr.splice(i+1, 2);
      console.log(regularBracket);
      var putBack = regularBracket.reverse().join('');
      console.log(putBack);
      console.log(arr);
      arr.splice(i+1,0,putBack);
      var newString = arr.join('')
    }
  }
  return newString;
}

reverseParentheses('wer(gw)erg');
