// Last in first out
// arrays: indexed, it easy to remove the last item
// arrays push method
class Stack {
  constructor() {
    this.data = []
  }
  peek() {
    return this.data[this.data.length - 1]
  }
  push(value) {
    this.data.push(value)
  }

  pop() 
    // return the remove and return the head
    return this.data.pop()
  }
}

const mystack = new Stack()
mystack.push("Edwin")
mystack.push("Jackson")
mystack.push("Muraya")
console.log(mystack.peek())

// stack look
console.log(mystack.pop() == "Muraya") // Muraya
//// Jackson
console.log(mystack.pop() == "Jackson") // Muraya
//// Edwin
console.log(mystack.pop() == "Edwin") // Muraya

//let value = mystack.pop()
//console.log(value)
console.log(mystack)
