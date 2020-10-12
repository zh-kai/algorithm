/**
 * 冒泡排序
 * 时间复杂度：O(N^2)
 * @param {*} nums
 */
function bubble_sort(nums) {
  let arr = nums.slice(0);
  for (let i = 1, len = arr.length; i <= len - 1; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

/**
 * 快速排序
 * 时间复杂度：O(N*logN)
 * @param {*} nums
 */
function quick_sort(nums) {
  let start = 0,
    end = nums.length,
    i = start,
    j = end - 1,
    ret = nums.slice(0);
  if (end <= 1) return ret;
  if (end < start) return;

  // 基准
  let curr = ret[start];
  while (i !== j) {
    while (ret[j] >= curr && i < j) {
      j--;
    }
    while (ret[i] <= curr && i < j) {
      i++;
    }
    if (i < j) {
      [ret[i], ret[j]] = [ret[j], ret[i]];
    }
  }

  // 基数归位
  ret[start] = ret[i];
  ret[i] = curr;

  return quick_sort(ret.slice(start, i)).concat(
    [curr],
    quick_sort(ret.slice(i + 1, end))
  );
}

/**
 * 插入排序
 * 时间复杂度：O(n^2)
 * @param {*} nums
 */
function insertion_sort(nums) {
  let ret = nums.slice(0);

  for (let i = 1, len = ret.length; i < len; i++) {
    // 已排序个数
    let j = i - 1;
    let curr = ret[i];
    // 寻找位置
    while (j >= 0) {
      if (ret[j] > curr) {
        ret[j + 1] = ret[j];
        j--;
      } else {
        break;
      }
    }
    ret[j + 1] = curr;
  }

  return ret;
}

/**
 * 归并排序
 * 时间复杂度：O(N*logN)
 */
function merge_sort(nums) {
  if (nums.length === 1) return nums;

  let middle = Math.floor(nums.length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  return merge_handler(merge_sort(left), merge_sort(right));

  /**
   * 合并操作子程序
   * @param {*} arr1
   * @param {*} arr2
   */
  function merge_handler(arr1, arr2) {
    const ret = [];
    let i = 0,
      j = 0;
    let len1 = arr1.length,
      len2 = arr2.length;

    while (i < len1 && j < len2) {
      if (arr1[i] < arr2[j]) ret.push(arr1[i++]);
      else ret.push(arr2[j++]);
    }

    while (i < len1) {
      ret.push(arr1[i++]);
    }
    while (j < len2) {
      ret.push(arr2[j++]);
    }

    return ret;
  }
}

module.exports = {
  bubble: bubble_sort,
  quick: quick_sort,
  insertion: insertion_sort,
  merge: merge_sort,
};
