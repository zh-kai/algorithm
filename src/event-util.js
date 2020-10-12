/**
 * 添加事件监听
 * @param {HTMLElement} el bind element
 * @param {String} type event type
 * @param {Function} handler handler function
 */
function addEventHandler(el, t, handler) {
  if (el.addEventListener) {
    // DOM2
    el.addEventListener(t, handler, false);
  } else if (el.attachEvent) {
    // IE
    el.attachEvent("on" + t, handler);
  } else {
    // DOM0
    el["on" + t] = handler;
  }
}

/**
 * 移除元素事件
 * @param {HTMLElement} el bind element
 * @param {String} type event type
 * @param {Function} handler handler function
 */
function removeEventHandle(el, t, handler) {
  if (el.removeEventListener) {
    // DOM2
    el.removeEventListener(t, handler, false);
  } else if (el.detachEvent) {
    // IE
    el.detachEvent("on" + t, handler);
  } else {
    // DOM0
    el["on" + t] = null;
  }
}

module.exports = {
  addEventHandler,
  removeEventHandle,
};
