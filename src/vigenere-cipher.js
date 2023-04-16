const { NotImplementedError } = require("../extensions/index.js")

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode
  }
  encrypt(str = null, pattern = null) {
    if (!str || !pattern) throw new Error("Incorrect arguments!")
    let result = ""
    this.origin = str
    this.str = str.toUpperCase()
    // console.log(this.str)
    this.pattern = pattern.toUpperCase()
    this.toLength()
    let skip = 0
    for (let i = 0; i < this.str.length; i++) {
      if (
        this.str[i].charCodeAt(0) >= "A".charCodeAt(0) &&
        this.str[i].charCodeAt(0) <= "A".charCodeAt(0) + 25
      ) {
        let ch =
          (this.str[i].charCodeAt(0) + this.pattern[i - skip].charCodeAt(0)) %
          26
        ch += "A".charCodeAt(0)
        result += String.fromCharCode(ch)
        // skip = 0
      } else {
        skip += 1
        result += this.str[i]
      }
    }

    this.encoded = result

    return this.mode ? result : result.split("").reverse().join("")
  }

  decrypt(str = null, pattern = null) {
    if (!str || !pattern) throw new Error("Incorrect arguments!")
    let result = ""
    this.origin = str
    this.str = str.toUpperCase()
    // console.log(this.str)
    this.pattern = pattern.toUpperCase()
    this.toLength()
    let skip = 0
    for (let i = 0; i < this.str.length; i++) {
      if (
        this.str[i].charCodeAt(0) >= "A".charCodeAt(0) &&
        this.str[i].charCodeAt(0) <= "A".charCodeAt(0) + 25
      ) {
        let ch =
          (this.str[i].charCodeAt(0) -
            this.pattern[i - skip].charCodeAt(0) +
            26) %
          26

        ch += "A".charCodeAt(0)
        result += String.fromCharCode(ch)
      } else {
        skip += 1
        result += this.str[i]
      }
    }
    console.log(result)
    return this.mode ? result : result.split("").reverse().join("")
  }
  toLength() {
    let str = this.str
      .split("")
      .filter(
        (el) =>
          el.charCodeAt(0) >= "A".charCodeAt(0) &&
          el.charCodeAt(0) <= "A".charCodeAt(0) + 25
      )
      .join("")
    while (this.pattern.length < str.length) {
      this.pattern = this.pattern.repeat(3)
    }
    this.pattern = this.pattern.slice(0, str.length)

    console.log(this.pattern)
  }
}
// let test = new VigenereCipheringMachine()
// // test.encrypt("attack at dawn!", "alphonse") // => 'AEIHQX SX DLLU!'
// test.decrypt("AEIHQX SX DLLU!", "alphonse")
module.exports = {
  VigenereCipheringMachine,
}
