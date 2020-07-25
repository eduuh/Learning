class Vehicles {
  constructor(public color: string) {}
  protected honk(): void {
    console.log("beep ");
  }
}

class Car extends Vehicles {
  //color: string dont put public since you dont want to recreate a new property
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}
const car = new Car(4, "orange");
car.startDrivingProcess();
console.log(car.color);
// modifiers : Public  private and protected
// Public : This method can be called anywhere any time.
// private: This method can only be called by other method in this class.
// protected; this method can oly be called by other methods in this class and in child classes

//Why to use classes and where to use classe

