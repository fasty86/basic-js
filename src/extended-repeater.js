const { NotImplementedError } = require("../extensions/index.js")

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(
  str,
  {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  }
) {
  str = String(str)
  additionSeparator = String(additionSeparator)
  let res = `${str}${`${addition}${additionSeparator}`
    .repeat(additionRepeatTimes)
    .slice(0, -additionSeparator.length)}${separator}`
    .repeat(repeatTimes)
    .slice(0, -separator.length)
  return res
}
console.log(
  repeater("TESTstr", {
    separator: "ds",
    addition: "ADD!",
    additionSeparator: ")))000",
  })
)
module.exports = {
  repeater,
}
