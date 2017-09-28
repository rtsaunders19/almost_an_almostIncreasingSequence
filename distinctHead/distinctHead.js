function distinct(head) {
  var arr = [];
  var obj = {};
  var count = -1;
  for (var i=1; i<head.length; i++) {
    if (!obj.hasOwnProperty(head[i])) {
      arr.push(0);
      count++;
      obj[head[i]] = count;
    }
  }
  for (val in obj) {
    arr.splice(obj[val],1,val);
  }
  return arr
}
