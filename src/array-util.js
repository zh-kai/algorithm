/**
 * 类数组转换为数组
 * @param {*} nodes
 */
function convertToArray(nodes) {
  var arr = null;
  if (Array.from) {
    // ES6
    arr = Array.from(nodes);
  } else {
    try {
      arr = Array.prototype.slice.call(nodes, 0);
    } catch (e) {
      arr = new Array();
      for (var i = 0, len = nodes.length; i < len; i++) {
        arr.push(nodes.item(i));
      }
    }
  }
  return array;
}

module.exports = {
  convertToArray,
};
