const { NotImplementedError } = require("../extensions/index.js")

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = []
  let notValid = []
  matrix.forEach((line, idxOuter, arr) => {
    let newLine = []
    line.forEach((elem, idxInner) => {
      let sum =
        toNum(matrix, idxOuter - 1, idxInner - 1) +
        toNum(matrix, idxOuter - 1, idxInner) +
        toNum(matrix, idxOuter - 1, idxInner + 1) +
        toNum(matrix, idxOuter, idxInner - 1) +
        toNum(matrix, idxOuter, idxInner + 1) +
        toNum(matrix, idxOuter + 1, idxInner - 1) +
        toNum(matrix, idxOuter + 1, idxInner) +
        toNum(matrix, idxOuter + 1, idxInner + 1)
      newLine.push(sum)
    })
    result.push(newLine)
  })
  return result
}

function toNum(matrix, one, two) {
  try {
    return matrix[one][two] === true ? 1 : 0
  } catch (error) {
    return 0
  }
}
let matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false],
]
console.log(minesweeper(matrix))
module.exports = {
  minesweeper,
}
