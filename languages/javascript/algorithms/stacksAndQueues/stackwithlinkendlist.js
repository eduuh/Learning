// Last in first out
// a set o nodes
// thes first node head
// the last node is tail
// nodes: value , pointer
class Node {
  constructor(value) {
    this.value = value
    this.pointer = null
  }
}
class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }
  peek() {
    return this.top
  }
  push(value) {
    // value is node: tail or other nodes
    // top > node > node > node > bottom
    // node > node > node > node top
    let node = new Node(value)
    if (this.length == 0) {
      this.top = node // node is top
      this.bottom = node
    } else {
      let current = this.top
      this.top = node
      this.top.pointer = current
    }
    this.length++
    // prepend: head
  }
  pop() {
    // return the remove and return the head
    if (!this.top) {
      return null
    }
    if (this.length == 1) {
      let node = this.top
      this.top = null
      this.bottom = null
      this.length--
      return node
    } else {
      let node = this.top
      let next = node.pointer
      this.top = next
      this.length--
      return node
    }
  }
}

const mystack = new Stack()
mystack.push("Edwin")
mystack.push("Jackson")
mystack.push("Muraya")

// stack look
//console.log(mystack.pop().value == "Muraya") // Muraya
//// Jackson
//console.log(mystack.pop().value == "Jackson") // Muraya
//// Edwin
//console.log(mystack.pop().value == "Edwin") // Muraya

//let value = mystack.pop()
//console.log(value)
console.log(mystack)
