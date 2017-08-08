function alternatingSums(a) {
    var weight1 = 0;
    var weight2 = 0;
    newArray = [];

    for (var i=0; i<a.length; i+=2) {
        var num = a[i];
        weight1+=num;
    }

    for (var n=1; n<a.length; n+=2) {
        var num2 = a[n];
        weight2+=num2;
    }

    newArray.push(weight1);
    newArray.push(weight2);


    return newArray;
}
