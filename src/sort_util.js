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
 * 选择排序
 * 时间复杂度：O(N^2)
 * @param {*} nums
 */
function select_sort(nums) {
  const ret = nums.slice(0);

  for (let i = 0, len = ret.length; i < len - 1; i++) {
    let minIndex = i;
    // 寻找最小值
    for (let j = i + 1; j < len; j++) {
      if (ret[minIndex] > ret[j]) {
        minIndex = j;
      }
    }

    // 将最小值交换至前方
    if (minIndex !== i) {
      [ret[minIndex], ret[i]] = [ret[i], ret[minIndex]];
    }
  }

  return ret;
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

/**
 * 基数排序
 *
 * @param {*} nums
 */
function base_sort(nums) {
  let max = Math.max(...nums);
  let digit = 1;
  let ret = nums.slice(0);

  while (true) {
    if (Math.floor(max / Math.pow(10, digit))) {
      digit++;
    } else {
      break;
    }
  }

  let bucketList = [];

  for (let i = 1; i <= digit; i++) {
    let base = Math.pow(10, i);
    // 初始化所有的桶
    bucketList = init_buckets();

    distribute(base, ret, bucketList);

    ret = collect(bucketList);
  }

  /**
   * 清空桶内元素
   * @param {*} buckets
   */
  function init_buckets() {
    const buckets = [];
    for (let i = 0; i < 10; i++) {
      let bucket = new Array();
      buckets.push(bucket);
    }
    return buckets;
  }

  /**
   * 向桶内分发元素
   * @param {*} base
   * @param {*} datas
   * @param {*} buckets
   */
  function distribute(base, datas, buckets) {
    for (let j = 0, len = datas.length; j < len; j++) {
      let index = Math.floor((datas[j] % base) / (base / 10));
      buckets[index].push(datas[j]);
    }
  }

  /**
   * 收集桶内元素
   * @param {*} buckets
   */
  function collect(buckets) {
    let datas = [];
    buckets.map((item) => {
      datas = datas.concat(item);
    });
    return datas;
  }

  return ret;
}

module.exports = {
  bubble: bubble_sort,
  quick: quick_sort,
  insertion: insertion_sort,
  merge: merge_sort,
  select: select_sort,
  base: base_sort,
};
