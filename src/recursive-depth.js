const { NotImplementedError } = require("../extensions/index.js")

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let that = this
    if (arr.length == 0) return 1
    let res = arr.reduce((sum, el) => {
      let depth = 1
      if (Array.isArray(el)) {
        depth += that.calculateDepth(el)
      }
      console.log(el, "ddd:", depth)
      sum.push(depth)
      return sum
    }, [])
    // console.log(res)
    return Math.max(...res)
  }
}
const depthCalc = new DepthCalculator()
console.log(
  depthCalc.calculateDepth([
    1,
    [8, [[]]],
    2,
    3,
    [8, [[[[[[[[[[[[[]]]]]]]]]]]]]],
    4,
    5,
    ["6575", ["adas", ["dfg", [0]]]],
  ])
)
module.exports = {
  DepthCalculator,
}
