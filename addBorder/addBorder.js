function addBorder(picture) {
    var size = picture[0].length + 2
    var astrics = []
    var newArray = []

    for (var i=0; i<size; i++) {
        astrics.push('*');
    }

    for (var j=0; j<picture.length; j++) {
      var arr = picture[j].split('');
      arr.unshift('*');
      arr.push('*');
      var middle = arr.join('');
      newArray.push(middle);
    }

    var border = astrics.join('');
    newArray.unshift(border);
    newArray.push(border);

    return newArray
}
