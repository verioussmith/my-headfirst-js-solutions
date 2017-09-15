
//create a price variable set it to the value of 28.99

var price = 28.99;

// create a discount variable and set it to the value of 10

var discount = 10;

// create a variable named total and assign it the value of the price minus the discount multiplied by 100

var total = price - (price * (discount / 100));

// if the total is greater than 25 then call the freeShipping function
if (total > 25) {
	freeShipping();
}

// create a variable named count and set it to 10
var count = 10; 

// While the count  is greater than 0 call the juggle function and subtract the count by 1
while (count > 0) {

juggle();

count = count - 1; }

//create an object called dog, give it the name of rover & the weight of 35
var dog = {name: "Rover", weight: 35}; 

// if the weight of the dog wieght is greater than 30 call the alert function and output "WOOF WOOF" (ALL CAPS)  or else if the dog weight is less than 30 output "woof woof" (lowercase)
if (dog.weight > 30) {

alert("WOOF WOOF");

	} else {

alert("woof woof"); 

}

// create a variable circleRadius and set it to 20
var circleRadius = 20; 

// create a variable circleArea and set it to the product of PI times circleRadius multiplied by itself
var circleArea = Math.PI * (circleRadius * circleRadius);



