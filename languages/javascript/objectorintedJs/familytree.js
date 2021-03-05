class FamilyTree {
  constructor() {
    this.family = {
      name: "Doleres",
      child: {
        name: "Marth",
        child: {
          name: "Dyan",
          child: { name: "Bea" },
        },
      },
    }
  }
  //getMembers() {
  //const family = []
  //let node = this.family
  //while (node) {
  //family.push(node.name)
  //node = node.child
  //}
  //return family
  //}
  //
  // Implementing above code with generators
  *[Symbol.iterator]() {
    let node = this.family
    while (node) {
      yield node.name
      node = node.child
    }
  }
}

// TODO find out how to parse xml with iterators and Json objects
const family = new FamilyTree()
console.log([...family])
