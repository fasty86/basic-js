const { NotImplementedError } = require("../extensions/index.js")

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
let matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]
function getMatrixElementsSum(matrix) {
  let notValid = []
  let sum = 0
  matrix.forEach((line, idx) => {
    if (Array.isArray(line)) {
      line.forEach((elem, idx) => {
        if (elem == 0) notValid.push(idx)
        else if (!notValid.includes(idx)) {
          sum += elem
        }
      })
    } else {
    }
  })
  return sum
}
console.log(getMatrixElementsSum(matrix))
module.exports = {
  getMatrixElementsSum,
}
