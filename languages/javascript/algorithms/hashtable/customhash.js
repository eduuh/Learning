class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set(key, value) {
    if (!key || !value) {
      return "cannot add nothing"
    }
    const data = [key, value]
    let address = this._hash(key)
    if (!this.data[address]) {
      this.data.push(data)
    }
    this.data.push(data)
  }

  get(key) {
    if (!key) {
      return "Please provide a string"
    }
    const address = this._hash(key)
    const currentBucket = this.data[]
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
        }
      }
    }

    return undefined
  }
}

const myHastTable = new HashTable(56)
myHastTable.set("grapes", 1000000)
console.log(myHastTable.get("grapes")[1])
