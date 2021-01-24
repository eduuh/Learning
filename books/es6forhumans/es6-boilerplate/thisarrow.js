function Employee() {
   this.firstName = 'Edwin',
    this.department = 'HR',
    this.salary = 45000,

    this.getContext = () => {
        console.log(this);
    }
}

let edwin = new Employee();
edwin.getContext();

let context = edwin.getContext;
context();

var details = {
    number: 45,
    operation: function() {
       return () => console.log(this.number) 
    }
}

var details2 = {
    number: 56
}

details.operation().bind(details2)();

var product = (x,y) => x* y;

console.log(product.call(null,4,6));
console.log(product.apply(null, [2,5]))

var multiply = product.bind(null, 2,5);

console.log(
multiply()
)

var details = () => 56; 

console.log(details.hasOwnProperty("prototype"));
    


