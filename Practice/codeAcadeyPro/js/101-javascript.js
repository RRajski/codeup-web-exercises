"use strict"; // leave this line here :)

// Keep this function definition in order to test expected vs. actual results
const assert = function(actual, expected, message = "") {

    // This compares primitive values and collections. If they differ, throw an error.
    if(JSON.stringify(actual) !== JSON.stringify(expected)) {
        console.error('[assert] expected:    ' + expected)
        console.error('[assert] instead got: ' + actual)
        throw Error("Assert failed in " + message);
    }
};


// Keep this function here in order to add correct questions to the counter
function addToDone(message) {
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(message);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    node.classList.add("finished");
    document.querySelector(".correct ul").appendChild(node);
    document.querySelector("#count").innerHTML = document.querySelectorAll('.finished').length + " of 101";
}


// Welcome to 101 Exercises in JS
// If you get "ReferenceError: someVariableName is not defined", that means you need to create a variable

// Exercise #0, Example Problem:
// Example problem setup: Create a variable named doingJSRightNow and assign it the boolean true.
// The line below creates the variable named doingJSRightNow and assigns the boolean value true
// To complete Exercise #0, uncomment the following line of JS
var doingJSRightNow = true

// The lines below will test your answer. If you see an error, then it means that your answer is incorrect or incomplete.
assert(doingJSRightNow, true, "Exercise 0");
addToDone("Exercise 0 is correct");


//  Exercise 1
// On the line below, create a variable named onMarsRightNow and assign it the boolean value of false
var onMarsRightNow = false;
assert(onMarsRightNow, false, "Exercise 1");
addToDone("Exercise 1 is correct.");

// Exercise 2
// Create a variable named fruits and assign it an array of strings containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.
var fruits = ["mango", "banana", "guava", "kiwi", "strawberry"];
assert(fruits, ["mango", "banana", "guava", "kiwi", "strawberry"], "Exercise 2");
addToDone("Exercise 2 is correct.");

//  Exercise 3
//  Create a variable named vegetables and assign it an array of fruits containing the following vegetable names as strings:
//  eggplant, broccoli, carrot, cauliflower, and zucchini
var vegetables =["eggplant", "broccoli","carrot","cauliflower", "zucchini"];
assert(vegetables, ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"], "Exercise 3");
addToDone("Exercise 3 is correct.");


// Exercise 4
// Create a variable named numbers and assign it an array of numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
var numbers = [1,2,3,4,5,6,7,8,9,10];

assert(numbers, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "Exercise 4");
addToDone("Exercise 4 is correct.");


// Exercise 5
// Add the string "tomato" to the end of the fruits array.
// *Hint* Recommend finding and using a built-in JS operation to add to an array rather than recreating the array.
fruits.push('tomato');
assert(fruits, ["mango", "banana", "guava", "kiwi", "strawberry", "tomato"], "Exercise 5");
addToDone("Exercise 5 is correct");

// Exercise 6
// add the string "tomato" onto the end of the vegetables array.
// Recommend using the built-in JS operation to add to an array.
vegetables.push("tomato");


assert(vegetables,["eggplant", "broccoli", "carrot", "cauliflower", "zucchini", "tomato"], "Exercise 6");
addToDone("Exercise 6 is correct")


// Exercise 7
// Given the array of numbers defined below, reverse the array of numbers that you created above.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.reverse();


assert(numbers, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "Exercise 7")
addToDone("Exercise 7 is correct")



// Exercise 8
// Sort the vegetables in alphabetical order. Recommend finding a way to sort the array with a built-in method
vegetables.sort();
assert(vegetables, ['broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'], "Exercise 8")
addToDone("Exercise 8 is correct.")



// Exercise 9
// Write the code necessary to sort the fruits in reverse alphabetical order
fruits.sort(function (a, b) {
    if (a > b) {
        return -1;
    }
    if (b > a) {
        return 1;
    }
    return 0;
});
assert(fruits, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana'], "Exercise 9")
addToDone("Exercise 9 is correct.")


// Exercise 10
// Write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above.
// Assign the result to a variable named fruitsAndVeggies.
// *hint* the search engine search here would be "how to combine two arrays in JavaScript", for example.
let fruitsAndVeggies = fruits.concat(vegetables);
assert(fruitsAndVeggies, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana', 'broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'], "Exercise 10")
addToDone("Exercise 10 is correct")

// This function generates a random number that is both positive and even
function randomPositiveEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 !== 0) {
        return randomPositiveEvenNumber()
    }

    return randomNumber;
}

// this function generates a random number that is both positive and odd
function randomPositiveOddNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 === 0) {
        return randomPositiveOddNumber();
    }

    return randomNumber;
}

// this function generates a random number that is both negative and even.
function randomNegativeEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if(randomNumber % 2 === 0) {
        return randomNumber;
    }

    return randomNegativeEvenNumber();
}

// this function generates a random number that is both negative and odd.
function randomNegativeOddNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if(randomNumber % 2 === 0) {
        return randomNegativeOddNumber();
    }

    return randomNumber;
}

// The next 4 lines create variables that hold these generated random numbers
var positiveEvenNumber = randomPositiveEvenNumber()
var positiveOddNumber = randomPositiveOddNumber();
var negativeEvenNumber = randomNegativeEvenNumber();
var negativeOddNumber = randomNegativeOddNumber();

// Writing functions
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions for help with writing functions
// Be sure to return values from your function definitions. The assert statements will call/run your function(s) for you.


// Example function defintion:
// Write a sayHello function that adds the string "Hello, " to the beginning and "!" to the end of any given input.
function sayHello(name) {
    return "Hello, " + name + "!";
}

assert(sayHello("Jane"), "Hello, Jane!");
assert(sayHello("Pat"), "Hello, Pat!");
assert(sayHello("Astrud"), "Hello, Astrud!");
assert(sayHello("June"), "Hello, June!");
assert(sayHello("World"), "Hello, World!");


// Heres another example function definition
// This plusTwo function takes in a variable and adds the number 2 to it.
function plusTwo(x) {
    return x + 2;
}

assert(plusTwo(3), 5, "3 plus 2 is five")
assert(plusTwo(-2), 0, "-2 plus 2 is zero")
assert(plusTwo(0), 2, "zero plus 2 is two")



// Exercise 11
// Write a function definition for a function named addOne that takes in a number and returns that number plus one
function addOne(x){
    return x+1;
}


assert(addOne(2), 3, "Exercise 11");
assert(addOne(0), 1, "Exercise 11");
assert(addOne(positiveEvenNumber), positiveEvenNumber + 1, "Exercise 11");
assert(addOne(negativeOddNumber), negativeOddNumber + 1, "Exercise 11");
addToDone("Exercise 11 is correct.")


// Exercise 12
// Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.
function isPositive(x){
    if(x>0)
    {return true}
    else
    {return false}
}
assert(isPositive(positiveOddNumber), true, "Exercise 12");
assert(isPositive(positiveEvenNumber), true, "Exercise 12");
assert(isPositive(negativeOddNumber), false, "Exercise 12");
assert(isPositive(negativeEvenNumber), false, "Exercise 12");
addToDone("Exercise 12 is correct.")


// Exercise 13
// Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.

function isNegative(num){
    if(num<0)
    {return true}
    else
    {return false}
}

assert(isNegative(positiveOddNumber), false, "Exercise 13");
assert(isNegative(positiveEvenNumber), false, "Exercise 13");
assert(isNegative(negativeOddNumber), true, "Exercise 13");
assert(isNegative(negativeEvenNumber), true, "Exercise 13");
addToDone("Exercise 13 is correct.");

function isOdd(num){
    return (num % 2 !== 0);
}


// Exercise 14
// Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.
function isOdd(num){
//   console.log("exercise14")
//   console.log(num)
    if(num % 2 !== 0){
        return true;
    }
    else{
        return false;
    }
}


// function isOdd(num){
//   console.log("exercise14")
//   console.log(num)
//   if(num % 2 !== 0){
//     return true;
//   }else{
//     return false;
//   }
// // }


assert(isOdd(positiveOddNumber), true, "Exercise 14");
assert(isOdd(positiveEvenNumber), false, "Exercise 14");
assert(isOdd(negativeOddNumber), true, "Exercise 14");
assert(isOdd(negativeEvenNumber), false, "Exercise 14");
addToDone("Exercise 14 is correct.");


// // Exercise 15
// // Write a function definition named isEven that takes in a number and returns true or false if that number is even.
function isEven(num){
    if (num % 2 == 0)
        return true;
    else
        return false;
}


assert(isEven(2), true, "Exercise 15");
assert(isEven(positiveOddNumber), false, "Exercise 15");
assert(isEven(positiveEvenNumber), true, "Exercise 15");
assert(isEven(negativeOddNumber), false, "Exercise 15");
assert(isEven(negativeEvenNumber), true, "Exercise 15");
addToDone("Exercise 15 is correct.")


// Exercise 16
// Write a function definition named identity that takes in any input and returns that input. Don't overthink this one!
function identity(input){
    return input;
}
assert(identity(fruits), fruits, "Exercise 16");
assert(identity(vegetables), vegetables, "Exercise 16");
assert(identity(positiveOddNumber), positiveOddNumber, "Exercise 16");
assert(identity(positiveEvenNumber), positiveEvenNumber, "Exercise 16");
assert(identity(negativeOddNumber), negativeOddNumber, "Exercise 16");
assert(identity(negativeEvenNumber), negativeEvenNumber, "Exercise 16");
addToDone("Exercise 16 is correct.")


// Exercise 17
// Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd
function isPositiveOdd(num) {
    return num > 0 && num % 2 !==0
}



//  function isOdd(num){
//   console.log("exercise14")
//   console.log(num)
//   if(num % 2 !== 0)
//   {return true;}
//   else
//     {return false;}




assert(isPositiveOdd(3), true, "Exercise 17");
assert(isPositiveOdd(positiveOddNumber), true, "Exercise 17");
assert(isPositiveOdd(positiveEvenNumber), false, "Exercise 17");
assert(isPositiveOdd(negativeOddNumber), false, "Exercise 17");
assert(isPositiveOdd(negativeEvenNumber), false, "Exercise 17");
addToDone("Exercise 17 is correct.")


// Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even
function isPositiveEven(x){
    if (x%2 == 0 && x>0)
        return true;
    else
        return false;
}
// }
assert(isPositiveEven(4), true, "Exercise 18" );
assert(isPositiveEven(positiveOddNumber), false, "Exercise 18");
assert(isPositiveEven(positiveEvenNumber), true, "Exercise 18");
assert(isPositiveEven(negativeOddNumber), false, "Exercise 18");
assert(isPositiveEven(negativeEvenNumber), false, "Exercise 18");
addToDone("Exercise 18 is correct.")


// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.
// function isNegativeOdd(num){
//   return (num % 2 !== 0 && num <0)
function isNegativeOdd(x){
    if (x%2 !== 0 && x<0)
        return true;
    else
        return false;
}



assert(isNegativeOdd(-3), true, "Exercise 19" );
assert(isNegativeOdd(positiveOddNumber), false, "Exercise 19");
assert(isNegativeOdd(positiveEvenNumber), false, "Exercise 19");
assert(isNegativeOdd(negativeOddNumber), true, "Exercise 19");
assert(isNegativeOdd(negativeEvenNumber), false, "Exercise 19");
addToDone("Exercise 19 is correct.")

// Exercise 20
// Write a function definition named isNegativeEven that takes in a number and returns true or false if the value is both less than zero and even.
function isNegativeEven(num) {
    return num < 0 && num % 2 === 0
}

assert(isNegativeEven(-4), true, "Exercise 20" );
assert(isNegativeEven(positiveOddNumber), false, "Exercise 20");
assert(isNegativeEven(positiveEvenNumber), false, "Exercise 20");
assert(isNegativeEven(negativeOddNumber), false, "Exercise 20");
assert(isNegativeEven(negativeEvenNumber), true, "Exercise 20");
addToDone("Exercise 20 is correct.")


// // Exercise 21
// // Write a function definition named half that takes in a number and returns half the provided number.
function half(num) {
    return .5 * num
}



assert(half(4), 2, "Exercise 21");
assert(half(5), 2.5, "Exercise 21");
assert(half(positiveOddNumber), positiveOddNumber / 2, "Exercise 21");
assert(half(positiveEvenNumber), positiveEvenNumber / 2, "Exercise 21");
assert(half(negativeOddNumber), negativeOddNumber / 2, "Exercise 21");
assert(half(negativeEvenNumber), negativeEvenNumber / 2, "Exercise 21");
addToDone("Exercise 21 is correct.")



// // Exercise 22
// // Write a function definition named double that takes in a number and returns double the provided number.
function double (x){
    return ((x) * 2);

}
assert(double(4), 8, "Exercise 22");
assert(double(5), 10, "Exercise 22");
assert(double(positiveOddNumber), positiveOddNumber * 2, "Exercise 22");
assert(double(positiveEvenNumber), positiveEvenNumber * 2, "Exercise 22");
assert(double(negativeOddNumber), negativeOddNumber * 2, "Exercise 22");
assert(double(negativeEvenNumber), negativeEvenNumber * 2, "Exercise 22");
addToDone("Exercise 22 is correct.")



// // Exercise 23
// // Write a function definition named triple that takes in a number and returns triple the provided number.
function triple(num){
    return ((num) * 3);
}


assert(triple(4), 12, "Exercise 23");
assert(triple(5), 15, "Exercise 23");
assert(triple(positiveOddNumber), positiveOddNumber * 3, "Exercise 23");
assert(triple(positiveEvenNumber), positiveEvenNumber * 3, "Exercise 23");
assert(triple(negativeOddNumber), negativeOddNumber * 3, "Exercise 23");
assert(triple(negativeEvenNumber), negativeEvenNumber * 3, "Exercise 23");
addToDone("Exercise 23 is correct.")


// // Exercise 24
// // Write a function definition named reverseSign that takes in a number and returns the provided number but with the sign reversed.
function reverseSign(num){
    return (-num)
}

assert(reverseSign(4), -4, "Exercise 24");
assert(reverseSign(-5), 5, "Exercise 24");
assert(reverseSign(positiveOddNumber), positiveOddNumber * -1, "Exercise 24");
assert(reverseSign(positiveEvenNumber), positiveEvenNumber * -1, "Exercise 24");
assert(reverseSign(negativeOddNumber), negativeOddNumber * -1, "Exercise 24");
assert(reverseSign(negativeEvenNumber), negativeEvenNumber * -1, "Exercise 24");
addToDone("Exercise 24 is correct.")

// // Exercise 25
// // Write a function definition named absoluteValue that takes in a number and returns the absolute value of the provided number

function absoluteValue(num){
    return Math.abs(num)
}

assert(absoluteValue(4), 4, "Exercise 25");
assert(absoluteValue(-5), 5, "Exercise 25");
assert(absoluteValue(positiveOddNumber), positiveOddNumber, "Exercise 25");
assert(absoluteValue(positiveEvenNumber), positiveEvenNumber, "Exercise 25");
assert(absoluteValue(negativeOddNumber), negativeOddNumber * -1, "Exercise 25");
assert(absoluteValue(negativeEvenNumber), negativeEvenNumber * -1, "Exercise 25");
addToDone("Exercise 25 is correct.")

// // Exercise 26
// // Write a function definition named isMultipleOfThree that takes in a number and returns true or false if the number is evenly divisible by 3.

function isMultipleOfThree(num){
    if ((num) % 3 === 0){
        return true;
    }else
        return false;
}

assert(isMultipleOfThree(3), true, "Exercise 26");
assert(isMultipleOfThree(15), true, "Exercise 26");
assert(isMultipleOfThree(9), true, "Exercise 26");
assert(isMultipleOfThree(4), false, "Exercise 26");
assert(isMultipleOfThree(10), false, "Exercise 26");
addToDone("Exercise 26 is correct.")

// // Exercise 27
// // Write a function definition named isMultipleOfFive that takes in a number and returns true or false if the number is evenly divisible by 5.
function isMultipleOfFive(num){
    if ((num)%5 === 0){
        return true;
    }else
        return false;
}

assert(isMultipleOfFive(3), false, "Exercise 27");
assert(isMultipleOfFive(15), true, "Exercise 27");
assert(isMultipleOfFive(9), false, "Exercise 27");
assert(isMultipleOfFive(4), false, "Exercise 27");
assert(isMultipleOfFive(10), true, "Exercise 27");
addToDone("Exercise 27 is correct.")

// // Exercise 28
// // Write a function definition named isMultipleOfBothThreeAndFive that takes in a number and returns true or false if the number is evenly divisible by both 3 and 5.
function isMultipleOfBothThreeAndFive(num){
    return num % 3 === 0 && num % 5 === 0
}

assert(isMultipleOfBothThreeAndFive(15), true, "Exercise 28");
assert(isMultipleOfBothThreeAndFive(45), true, "Exercise 28");
assert(isMultipleOfBothThreeAndFive(3), false, "Exercise 28");
assert(isMultipleOfBothThreeAndFive(9), false, "Exercise 28");
assert(isMultipleOfBothThreeAndFive(4), false, "Exercise 28");
addToDone("Exercise 28 is correct.")

// // Exercise 29
// // Write a function definition named square that takes in a number and returns the number times itself.
function square (x){
    return ((x)*(x))
}
assert(square(3), 9, "Exercise 29");
assert(square(2), 4, "Exercise 29");
assert(square(9), 81, "Exercise 29");
assert(square(positiveOddNumber), positiveOddNumber * positiveOddNumber, "Exercise 29");
addToDone("Exercise 29 is correct.")

// // Exercise 30
// // Write a function definition named add that takes in two numbers and returns the sum.
function add(x,y){
    return ((x)+(y));
}

assert(add(3, 2), 5, "Exercise 30");
assert(add(10, -2), 8, "Exercise 30");
assert(add(5, 7), 12, "Exercise 30");
addToDone("Exercise 30 is correct.")

// Exercise 31
// // Write a function definition named cube that takes in a number and returns the number times itself, times itself.

function cube(num) {
    return num * num * num
}
assert(cube(3), 27, "Exercise 31");
assert(cube(2), 8, "Exercise 31");
assert(cube(5), 125, "Exercise 31");
assert(cube(positiveOddNumber), positiveOddNumber * positiveOddNumber * positiveOddNumber, "Exercise 31");
addToDone("Exercise 31 is correct.")