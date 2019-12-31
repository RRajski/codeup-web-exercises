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
function isMultipleOfThreeAndFive(num){
    if((num)% 3 === 0 && (num)% 5 === 0){
        return true;
    } else
        return false;
}