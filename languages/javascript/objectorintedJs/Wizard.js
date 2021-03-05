class Player {
  constructor(name, type) {
    this.type = type
    this.name = name
  }

  introduce() {
    console.log(`Hi I am ${this.name} of type ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }

  play() {
    console.log(`I ame a wizard ${this.name}`)
  }
}

const wizard = new Wizard("Edwin", "Wizard")
const wizard2 = new Wizard("Shawn", "Dark Magic")
