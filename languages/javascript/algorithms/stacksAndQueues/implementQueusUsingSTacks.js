//queus using stack
//stack Last in last out
//peek() // returns the lastelement
//pop() // returns the lastelment and remove it
//push(value) // add and element to the last
//isEmpty() // check is stack is empty

class Stack {
  constructor(arg) {
    this.data = []
  }
  peek() {
    if (!this.isEmpty()) return this.data[this.data.length - 1]
    throw "Empty"
  }
  push(value) {
    if (value) return this.data.push(value)
  }

  pop() {
    return this.data.pop()
  }

  isEmpty() {
    return this.data.length == 0
  }
}

// Fist come firt serve
// enqueue > add an elment tothe queue
// dequeue > removes an element from the queue
class Queus {
  constructor() {
    this.s1 = new Stack()
    this.queue = new Stack()
  }
  peek() {
    if (!this.isEmpty()) {
      while (!this.s1.isEmpty()) {
        let value = this.s1.pop()
        this.queue.push(value)
      }
    }
    return this.queue.peek()
  }
  enqueue(value) {
    return this.s1.push(value)
  }
  dequeue() {
    if (!this.isEmpty()) {
      while (!this.s1.isEmpty()) {
        let value = this.s1.pop()
        this.queue.push(value)
      }
    }
    return this.queue.pop()
  }
  isEmpty() {
    return this.s1.isEmpty() && this.queue.isEmpty()
  }
}

const myque = new Queus()
myque.enqueue("edwin")
myque.enqueue("muraya")
myque.enqueue("jackson")
myque.dequeue()
myque.dequeue()
let firtserve = myque.peek()
console.log(firtserve)

//TODO researh on implementing usin on stack and using recursin to implement push operationt
//TODO use recursion to implement peek
