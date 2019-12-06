"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 *
 */

var confirmed = confirm("Would you like to enter a number");
if(confirmed === true){
    var num = (prompt("Please enter your number");
}
else if{
    function isOdd(num){
    return (num % 2);
    alert("your number is odd");
}
}
else if{
    function isEven(num) {
    return (num === 0 || !!(n && !(n%2));
    alert("your number is odd");
    }
}
else if{
    var numPlus100;
    var plusHundredtotal;
    function numPlus100(num){
        return(num + 100);
        alert("your number plus 100 =" + plusHundredtotal)
}
}
else if{
   var numIsNegative;
   function numIsNegative(num){
       return (num < 0);
       alert("your numer is negative");
   }
else if{
    var numIsPositve;
function numIsPositive(num){
    return (num >0);
    alert("your numer is positive");
}
else {
    var notANumber;
function notANumber(input){
    alert("This is not a number. Please enter a number.")
}

} if what the user enters is not a number, use an alert to tell them that, and
    * do *not* display any of the above information.
    *

}




//     // (alert(alertMessage)"The number is even or odd");
// }

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(input) {
//     if (input === blue) {
//         return ("blue is the color of the sky");
//     }
//     else if (input === red) {
//         return ("Stawberries are red");
//     }
//     if else (input === cyan){
//         return ("I don't know anything about cyan");
//     }
// }
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
    function randomColor() {
        console.log(randomColor);
    }
//
// /**
//  * TODO:
//  * Refactor your above function to use a switch-case statement
//  */

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
var colorMessage;
function randomColor() {
        switch (colors) {
        case "red":
            colorMessage = "Ruby Tuesday!";
            break;
            case "orange":
                colorMessage = "Go Horns";
                break;
            case "yellow":
                colorMessage = "Bumblebee";
                break;
                case "green";
                colorMessage = "Go Gators"
            case "blue":
                colorMessage = "Manic Monday";
                break;
            case "indigo":
                colorMessage = "the snobby word for purple";
                break;
            case "violet":
                colorMessage = "the snobbier word for purple";
                break;
            default:
                colorMessage = "not in my rainbow";
                break;
        }
}
//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */

var favoriteColorRainbow = prompt("What is your favorite color of the rainbow?");
    function analyzeColor(input) {
        return randomColor(input);
        alert( input +  "is another color you might like!");
    }



//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * all for free!.
//  *
//  * Write a function named `calculateTotal` that accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
var luckyNumberZero;
var luckyNumberOne;
var luckyNumberTwo;
var luckyNumberThree:
var luckyNumberFour;
var luckNumberFive
//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 6.
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
// // var luckyNumber = Math.floor(Math.random() * 6);
