const { NotImplementedError } = require("../extensions/index.js")

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730
const LN2 = 0.693

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity = false) {
  // console.log(Number("woot"))
  if (typeof sampleActivity != "string") return false
  if (
    !(
      typeof Number(sampleActivity) == "number" &&
      !isNaN(Number(sampleActivity))
    )
  )
    return false
  if (!sampleActivity) return false
  if (sampleActivity > 15 || sampleActivity < 1) return false
  sampleActivity
  return Math.ceil(
    Math.log(MODERN_ACTIVITY / Number(sampleActivity)) /
      (LN2 / HALF_LIFE_PERIOD)
  )
}
console.log(dateSample("3.142")) //22387
//  *dateSample('WOOT!') => false
console.log(typeof Number("33.323"))
module.exports = {
  dateSample,
}
