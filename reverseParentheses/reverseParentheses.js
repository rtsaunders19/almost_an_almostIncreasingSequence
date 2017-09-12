function reverseParentheses(s) {
    const sArray = s.split("")
    const stack = []

    while (sArray.indexOf('(') !== -1){
        for (var i = 0; i < sArray.length; i++){
            var curr = sArray[i]
            if (curr === '(') {
                stack.push(i)
                continue;
            }
            if (curr === ')') {
                var startIndex = stack.pop()
                var reversed = sArray.slice(startIndex + 1, i).reverse()
                sArray.splice(startIndex, i - startIndex + 1, ...reversed)
                break;
            }
        }
    }
    return sArray.join("")
}
