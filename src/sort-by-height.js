const { NotImplementedError } = require("../extensions/index.js")

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let ones = []
  arr.forEach((el, idx) => {
    if (el == -1) ones.push(idx)
  })
  let others = arr.filter((el) => el != -1).sort((a, b) => a - b)
  ones.forEach((el) => others.splice(el, 0, -1))
  return others
}
// sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])
module.exports = {
  sortByHeight,
}
