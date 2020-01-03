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