const { NotImplementedError } = require("../extensions/index.js")

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: "",
  getLength() {
    return this.chain.split("~~").length
  },
  addLink(value) {
    this.chain = `${this.chain}~~( ${value} )`
    return this
  },
  removeLink(position) {
    if (typeof this.chain[position] == "undefined") return false
    this.chain.split("~~").splice(position, 1).join("~~")
    return this
  },
  reverseChain() {
    this.chain.split("~~").reverse().join("~~")
    return this
  },
  finishChain() {
    return this.chain
  },
}

module.exports = {
  chainMaker,
}
