function commonCharacterCount(s1, s2) {
    var common = 0;
    var word1 = s1.split('');
    var word2 = s2.split('');
    for (var i=0; i<word1.length; i++) {
        for (var n=0; n<word2.length; n++) {
            if (word1[i]===word2[n]) {
                word2.splice(n, 1)
                common++
                break;
            }
        }
    }
    return common
}
