/**
 * 阶乘
 * @param {*} n
 */
function factorial(n) {
  let res = 1;
  if (n < 0) {
    throw new Error("The argument should be a positive integer.");
  }
  while (n > 0) {
    res *= n;
    n--;
  }
  return res;
}

/**
 * 排列，Amn=n(n−1)(n−2)⋯(n−m+1)=n!/(n−m)!；全排列 Amm
 * @param {*} n
 * @param {*} m
 */
function arrangement(n, m) {
  return factorial(n) / factorial(n - m);
}

/**
 * 组合
 * @param {*} n
 * @param {*} m
 */
function combination(n, m) {
  return factorial(n) / (factorial(m) * factorial(n - m));
}

module.exports = {
  A: arrangement,
  C: combination,
  factorial,
};
