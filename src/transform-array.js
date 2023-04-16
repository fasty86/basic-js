const { NotImplementedError } = require("../extensions/index.js")

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  const cmdList = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ]
  if (!Array.isArray(arr))
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  // console.log(arr)
  // let cmd = arr.filter((el, idx) => typeof el == "string")
  let result = []
  let discarded = null
  arr.reduce((cmd, el) => {
    if (cmdList.includes(el)) {
      cmd = el
    } else {
      if (cmd) {
        switch (cmd) {
          case "--discard-next":
            discarded = 1
            break
          case "--discard-prev":
            if (discarded) discarded = null
            else result.pop()
            result.push(el)
            break
          case "--double-next":
            result.push(el)
            result.push(el)
            break
          case "--double-prev":
            if (discarded) discarded = null
            else if (result[result.length - 1])
              result.push(result[result.length - 1])
            result.push(el)
            break
        }
        cmd = null
      } else {
        result.push(el)
      }
    }
    return cmd
  }, null)
  return result
}
console.log(
  transform([1, 2, 3, "--discard-next", 1337, "--discard-prev", 4, 5])
)

module.exports = {
  transform,
}
