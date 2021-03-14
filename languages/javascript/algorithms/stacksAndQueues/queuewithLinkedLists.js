// first come first server basis
// add to the last
// I remove the first
class Node {
  constructor(value) {
    this.value = value
    this.pointer = null
  }
}

// nodes: 1 node ,firt and last
class Queue {
  constructor(arg) {
    this.first = null
    this.last = null
    this.length = 0
  }

  enqueue(value) {
    // add to the last element
    const node = new Node(value)
    if (this.length == 0) {
      this.first = node
      this.last = node
    } else {
      this.last.pointer = node
      this.last = node
    }
    this.length++
    return this
  }
  dequeue() {
    // remve the firt element
    if (!this.first) {
      return null
    }
    if (this.length == 0) {
      this.last = null
    }
    const holdingPointer = this.first
    this.first = holdingPointer.pointer
    this.length--
    return holdingPointer
  }
}

const que = new Queue()
que.enqueue("google")
que.enqueue("facebook")
que.enqueue("edwin")
console.log(que)
que.dequeue()
que.dequeue()
que.dequeue()
console.log(que)
