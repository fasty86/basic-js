const { NotImplementedError } = require("../extensions/index.js")

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  s1 = s1.split("").reduce((arr, ch) => {
    arr[ch] = !!arr[ch] ? arr[ch] + 1 : 1
    return arr
  }, {})
  s2 = s2.split("").reduce((arr, ch) => {
    arr[ch] = !!arr[ch] ? arr[ch] + 1 : 1
    return arr
  }, {})
  let res = 0
  Object.keys(s1).forEach((key) => {
    if (!!s1[key] && !!s2[key]) res += Math.min(s1[key], s2[key])
  })
  return res
}
console.log(getCommonCharacterCount("aabcc", "adcaa"))
module.exports = {
  getCommonCharacterCount,
}
