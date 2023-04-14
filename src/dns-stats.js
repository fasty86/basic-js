const { NotImplementedError } = require("../extensions/index.js")

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains.reduce((res, url) => {
    url = url.split(".").reverse()
    url.reduce((sum, curr) => {
      if (sum == "") sum = curr
      else sum = `${sum}.${curr}`
      console.log(res)
      res[`.${sum}`] = !!res[`.${sum}`] ? res[`.${sum}`] + 1 : 1
      return sum
    }, "")

    return res
  }, {})
}
domains = ["code.yandex.ru", "music.yandex.ru", "yandex.ru"]
console.log(getDNSStats(domains))
module.exports = {
  getDNSStats,
}
