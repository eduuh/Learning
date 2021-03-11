class DoublyLinkendList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    }
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    let headNode = {
      value: value,
      next: this.head,
      prev: null,
    }

    this.head = headNode
    this.head.prev = headNode
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
    const follower = leader.next
    leader.next = newNode
    newNode.prev = leader
    newNode.next = follower
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
}

const myl = new DoublyLinkendList(1)
myl.append(2)
myl.append(3)
console.log(myl)

// You could decide to create a class for the Node Linked
// List
