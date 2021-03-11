const basket = ["apples", "grapes", "pears"]

// Linked lists: apples --> grapse --> pears
// the arrow signifies --> pointer
//
// A more accurate example
// apples
//   5454  --> grapes
//                5456 --> pears
//                            545 -- null
//  numbers signifies memory address.
//
//
//  Let go to the : visualalgo

let myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
}

class LinkendList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    let headNode = {
      value: value,
      next: this.head,
    }
    headNode.next = this.head
    this.head = headNode
    this.length++
    return this
  }

  printList() {
    const array = []
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }

  // inserts,
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
    }

    let newNode = {
      value: value,
      next: null,
    }
    // 1-->2-->newnode-->3
    const leader = this.traverseToIndex(index - 1)
    const holdingPointer = leader.next
    leader.next = newNode
    newNode.next = holdingPointer
    this.length++
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1)
    const unwantedNode = leader.next
    leader.next = unwantedNode.next
    this.length--
  }

  traverseToIndex(index) {
    // TODO params
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }

  reverse() {
    //head as tail
    //tail as head
    //temp
    if (!this.head.next) {
      return this.head
    }
    //first item
    let first = this.head
    this.tail = this.head
    let second = first.next

    while (second) {
      const temp = second.next
      second.next = first
      first = second
      second = temp
    }
    this.head.next = null
    this.head = first

    return this
  }
}

const myl = new LinkendList(1)
myl.append(2)
myl.append(3)
console.log(myl.printList())
console.log(myl.reverse())

// You could decide to create a class for the Node Linked
