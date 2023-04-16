const { NotImplementedError } = require("../extensions/index.js")

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date = null) {
  const SEASONS = ["winter", "spring", "summer", "autumn"]
  if (!date) return `Unable to determine the time of year!`
  if (
    Object.prototype.toString.call(date) != "[object Date]" ||
    !dateIsValid(date)
  )
    throw new Error("Invalid date!")
  // console.log(
  //   Object.getOwnPropertyNames(Object.getPrototypeOf(new Date())).length !=
  //     Object.getOwnPropertyNames(Object.getPrototypeOf(date)).length
  // )
  if (date instanceof Date) {
    if (date.getMonth() <= 1 || date.getMonth() == 11) {
      return SEASONS[0]
    }
    if (date.getMonth() <= 4) {
      return SEASONS[1]
    }
    if (date.getMonth() <= 7) {
      return SEASONS[2]
    }
    return SEASONS[3]
  } else throw new Error(`Invalid date!`)
}
function dateIsValid(date) {
  const propAll = Object.getOwnPropertyNames(new Date())
  const dateProp = Object.getOwnPropertyNames(date)
  let res = dateProp.every((el) => propAll.includes(el))
  // console.log(res)
  if (res) {
    return true
  }
  return false
}
module.exports = {
  getSeason,
}
