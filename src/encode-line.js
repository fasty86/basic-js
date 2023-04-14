const { NotImplementedError } = require("../extensions/index.js")

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str == "") return str
  let encoded = []
  let t = str.split("").reduce((res, el) => {
    if (!res.length) res.push(el)
    else if (res[0] == el) res.push(el)
    else {
      encoded.push(res)
      res = [el]
    }
    return res
  }, [])
  encoded.push(t)
  encoded = encoded.map((ch) => `${ch.length > 1 ? ch.length : ""}${ch[0]}`)
  return encoded.join("")
}
console.log(encodeLine("aaaatttt"))
module.exports = {
  encodeLine,
}
