// Create a function that returns a base 2 (binary) represetation of a base 10 (decimal) string number. To convert is
// simple: ((2) means base 2 and (10) means base 10) 010101001(2) = 1 + 8 + 32 + 128.
//
// Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the
// value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

function binary(decimal) {
    if (decimal <1024 && decimal >= 0){
        return parseInt(decimal, 10).toString(2);
    }
}

// Given a string of letters, how many capital letters are there?
//
//     Examples
//     capitalLetters("fvLzpxmgXSDrobbgMVrc") ➞ 6
//
// capitalLetters("JMZWCneOTFLWYwBWxyFw") ➞ 14
//
// capitalLetters("mqeytbbjwqemcdrdsyvq") ➞ 0

function capitalLetters(txt) {
    var count = 0;
    for(var i =0; i<txt.length;i++)
    {
        if(txt[i] === txt[i].toUpperCase())
        {
            count ++
        }
    }
    return count
}

// Write a function that returns true if k^k == n for input (n, k).
//
//                                                        Examples
//     kToK(4, 2) ➞ true
//
// kToK(387420489, 9) ➞ true
// // 9^9 == 387420489
//
// kToK(3124, 5) ➞ false
//
// kToK(17, 3) ➞ false
function kToK(n, k) {
    return Math.pow(k,k) === n
}

// Create a function to concatenate two integer arrays.
function concat(arr1, arr2) {
    return arr1.concat(arr2);
}

    // Examples
concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]