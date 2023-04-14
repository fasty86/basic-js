const { NotImplementedError } = require("../extensions/index.js")

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number}
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = String(n).split("")
  let res = []

  for (let i = 0; i < n.length; i++) {
    res.push(n.filter((el, idx) => idx != i))
  }

  console.log(n)
  res = res.map((arr) => Number(arr.join("")))
  res = Math.max(...res)
  return res
}

deleteDigit(152)
module.exports = {
  deleteDigit,
}
