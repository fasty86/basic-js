const { NotImplementedError } = require("../extensions/index.js")

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  // chain: "",
  getLength() {
    return this.chain.split("~~").length
  },
  addLink(value) {
    if (!this.chain) this.chain = `( ${value} )`
    else {
      this.chain = `${this.chain}~~( ${value} )`
    }

    return this
  },
  removeLink(position) {
    position = position - 1
    if (typeof this.chain.split("~~")[position] == "undefined") {
      delete this.chain
      throw new Error("You can\'t remove incorrect link!")
    }
    this.chain = this.chain.split("~~")
    this.chain.splice(position, 1)
    this.chain = this.chain.join("~~")
    // console.log(this.chain)
    return this
  },
  reverseChain() {
    if(!!this.chain) this.chain = this.chain.split("~~").reverse().join("~~")
    return this
    
  },
  finishChain() {
    let str = `${this.chain}`
    delete this.chain
    console.log(str)
    return str
  },
}
console.log(
  chainMaker.reverseChain().addLink('ABC').reverseChain().reverseChain().reverseChain().addLink(Infinity).addLink(false).addLink(0).addLink('8.963').removeLink(2).removeLink(1).reverseChain().finishChain()
)
module.exports = {
  chainMaker,
}
