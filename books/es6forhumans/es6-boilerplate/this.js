let myobj = {
    name: 'fancy',
    operation: function() {
      console.log(this);
    }
}

console.log(myobj.operation())

let x = myobj.operation

if(x() === global){
    console.log("window object")
};

x.call(myobj)

function Employee(name,departure, salary) {
   this.name = name;
   this.departure = departure;
   this.salary = salary;
  console.log(
     "Welcome " + this.name + "!"
  )

  this.getInfo = function() {
     return function() {
       console.log(this.name + " from" + this.departure);
     };
  }

  this.getContext = () => {
      console.log(this);
  }
}

let edwin = new Employee('Edwin', 'sale', 20000);

let printInfo = edwin.getInfo();
printInfo();

