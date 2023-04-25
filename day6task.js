function Person() {
    this.firstName = "unknown";
    this.lastName = "unknown";
}

var person1 = new Person();
person1.firstName = "Deepak";
person1.lastName = "Suthan";

console.log(person1.firstName + " " + person1.lastName); 

var person2 = new Person();
person2.firstName = "Suthan";
person2.lastName = "Deepak";

console.log(person2.firstName + " " + person2.lastName); 



function uberPrice (){
    this.price;
    this.distance;
}
var perkm = 8;

var passenger1 = new uberPrice();
passenger1.distance = 10;
passenger1.price = passenger1.distance*perkm;
console.log(passenger1.price); 