"use strict";
//
// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  * > sayHello("codeup") // returns "Hello, codeup!"
// //  */
// function sayHello(name) {
//     if (name) {
//         return "Hello, " + name + "!";
//
//    }
// }
//
// // function sayHello(name) {
// //     alert('Hello ' + name + '!');
// // }
// //
// // }
// //
// // /**
// //  * TODO:
// //  * Call the function 'sayHello' and pass your name as a string literal argument.
// //  * Store the result of the function call in a variable named 'helloMessage'.
// //  *
// //  * console.log 'helloMessage' to check your work
// //  */
// function sayHello(name) {
//     return "Hello" + name  + "!";
// }
// console.log(sayHello(" Ron "));
//
// /**
//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */

var myName = "Ron";
console.log(sayHello(myName));

//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);
//
// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
//  *
//  * Example
//  * > isTwo(1) // returns false
//  * > isTwo(2) // returns true
//  * > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */

var isTwo = function isTwo(num){
    if (num === 2){
    return true;}
    else{
        return false;
    }
}
console.log(isTwo(1));
console.log(isTwo(2));
console.log(isTwo(3));
console.log(isTwo(random));


// }
//
// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip
//  *
//  * Examples:
//  * > calculateTip(0.20, 20) // returns 4
//  * > calculateTip(0.25, 25.50) // returns 6.37
//  * > calculateTip(0.15, 33.42) // returns 5.013
//  */
//


var calculateTip = function (tipPercent, billTotal){
    return tipPercent + billTotal;
}
console.log(calculateTip(.20, billTotal 20));
console.log(calculateTip(.25, 25.50));
console.log(calculateTip(.15, 33.42));


var bill = number(prompt("What is your bill?));
var tipPercent = number(prompt("What do you want to tip?));


var calculateTip =number(prompt( bill * tipPercde);


var totalPay = (calculateTip) + (bill);

var alertMessage = "Your total pay is:$" + totalPay;
alert(alertMessage);
//
//
//
//
//
// // function calculateTip() {
// //     var bill = Number(document.getElementById('bill').value);
// //     var tip = bill * .15;
// //     var total_bill = bill + tip;
// //     document.getElementById("tip").innerHTML= "$"+Number(tip).toFixed(2);
// //     document.getElementById("total").innerHTML= "$"+Number(total_bill).toFixed(2);
// // }
// // function calculateTip() {
// //     var bill = Number(document.getElementById('bill').value);
// //     var tip = bill * .20;
// //     var total_bill = bill + tip;
// //     document.getElementById("tip").innerHTML= "$"+Number(tip).toFixed(2);
// //     document.getElementById("total").innerHTML= "$"+Number(total_bill).toFixed(2);
// // }
// // function calculateTip() {
// //     var bill = Number(document.getElementById('bill').value);
// //     var tip = bill * .25;
// //     var total_bill = bill + tip;
// //     document.getElementById("tip").innerHTML= "$"+Number(tip).toFixed(2);
// //     document.getElementById("total").innerHTML= "$"+Number(total_bill).toFixed(2);
// // }
//
//
//
// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */

var tipPercentage=parseFloat(prompt("What percentage would you like to tip? 0.00 to 1.00?"));
var billTotal=prompt("What is the total for your bill?");
var amountToTip=calculateTip(tipPercentage, billTotal);
console.log("Leave $ "+ amountToTip +"as a tip");


//
// function prompt("What was your "bill"  and what percentage would you like to "tip?" ")
// {
//     var bill = Number(document.getElementById('bill').value);
//     var tip = bill * (tip percentage);
//     var total_bill = bill + tip;
//     document.getElementById("tip").innerHTML= "$"+Number(tip).toFixed(2);
//     document.getElementById("total").innerHTML= "$"+Number(total_bill).toFixed(2);
//
// /**
//  * TODO:
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.
//  *
//  * Example:
//  * > var originalPrice = 100
//  * > var dicountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, dicountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
//  */

var applyDiscount = function(price, discountPercentage){
var discountAmount = price * discountPercentage;
    return price - discountPercentage;
}

var orginalPrice=100
var discountPercent = .2;
//
//
// var originalPrice = number(prompt("What is your origninal Price?));
//     var discountPercentage= number(prompt("What is your discount percentage?));
//
//
//     var applyDiscount =number(prompt( originalPrice - (originalPrice * discountPercentage));
//
//
//
//     var alertMessage = "Your new price  is:$" + applyDiscount;
//     alert(alertMessage);
// //
//
// //
// // function applyDiscount () {
// //     var originalPrice = Number(document.getElementById("price").value);
// //     var discountPercent = Number(document.getElementById("discount").value) / 100;
// //     var applyDiscount = originalPrice - (originalPrice* applyDiscount)
// //     document.getElementById("total").value = applyDiscount.toFixed(2);
// //     }
//
