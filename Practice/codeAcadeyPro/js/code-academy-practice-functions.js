"use strict"
// 1.
// The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing
// the person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if
//     they are not.


// 2.Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!'
// if the two strings are the same and 'You disagree!' if the two strings are different.



// 3.Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.
//
// Here are the classifications:
//     0-3 should return 'baby'
// 4-12 should return 'child'
// 13-19 should return 'teen'
// 20-64 should return 'adult'
// 65-140 should return 'senior citizen'
// If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'


// 4.  Write a function, finalGrade(). It should:
//
//     take three arguments of type number
// find the average of those three numbers
// return the letter grade (as a string) that the average corresponds to
// return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
// 0-59 should return: ‘F’
// 60-69 should return: ‘D’
// 70-79 should return: ‘C’
// 80-89 should return: ‘B’
// 90-100 should return: ‘A’

// 5. Write a function, reportingForDuty(), that has two string parameters, rank and lastName,
//     and returns a string in the following format: ‘rank lastName reporting for duty!’

// function ReportingForDuty('rank','lastName'){
//     return(rank + lastName + ' reporting for duty!');
// }

// 6. const rollTheDice = () => {
//     let die1 = Math.floor(Math.random() * 6 + 1)
//     let die2 = Math.floor(Math.random() * 6 + 1)
//     return die1 + die2
// }

// 7. Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity
// on an object. Since different planets have different gravity, the same object would weigh different amounts on each of
// those planets! Cool, huh?
//
//     Write a function, calculateWeight(). It should:
//
//     have two parameters: earthWeight and planet
// expect earthWeight to be a number
// expect planet to be a string
// return a number representing what that Earth-weight would equate to on the planet passed in.
// Handle the following cases:
//     'Mercury' weight = earthWeight * 0.378
// 'Venus' weight = earthWeight * 0.907
// 'Mars' weight = earthWeight * 0.377
// 'Jupiter' weight = earthWeight * 2.36
// 'Saturn' weight = earthWeight * 0.916
// For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'

// 7. It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, truthyOrFalsy(),
//     that takes in any value and returns true if that value is truthy and false if that value is falsy.

// 8.A person’s number of imaginary friends are always 33% of their total friends.
//
//     Write a function, numImaginaryFriends(), that takes in the total number of friends a person has
// and returns the number of imaginary friends they have.
//
//     Since friends can only come in whole numbers, be sure to round your result before returning it.
//
//     The JavaScript Math.round() function will come in handy. Check out the documentation here to figure
//     out how it works.

// 9.Write a function, sillySentence(), that has 3 string parameters and returns the following silly sentence
// with the blanks filled in by the arguments passed into the function:
//
//
// sillySentence('excited', 'love', 'functions');
// // Should return 'I am so excited because I love coding! Time to write some more awesome functions!'

// 10.
// Write a function, howOld(), that has two number parameters, age and year, and returns how old someone
// who is currently that age was (or will be) during that year. Handle three different cases:
//
//     If the year is in the future, you should return a string in the following format:
//     'You will be [calculated age] in the year [year passed in]'
// If the year is before they were born, you should return a string in the following format:
//     'The year [year passed in] was [calculated number of years] years before you were born'
// If the year is in the past but not before the the person was born, you should return a string in the following format:
//     'You were [calculated age] in the year [year passed in]'
// You might find these two variables helpful:
//



function howOld(age,year){
    var dateToday = new Date();
    var thisYear = dateToday.getFullYear();

    var yearDifference = year - thisYear;
    var newAge = age + yearDifference;

    if (newAge<0){
        return 'The year' + year + 'was' +newAge+ 'years before you were born';
    }
    else if (newAge>age){
        return ('You will be ' +newAge+ 'in the year ' +year+ '.');
    }
    else
        return 'You were' + newAge + ' in the year' +year+ '.';
}


console.log(howOld(23,2025));





// 11
// Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received
// and a number representing the total cost.
//
//     Return the tip, as a number, based on the following:
//     ‘bad’ should return a 5% tip
// ‘ok’ should return a 15% tip
// ‘good’ should return a 20% tip
// ‘excellent’ should return a 30% tip
// all other inputs should default to 18%
//
// tipCalculator('good', 100) // Should return 20

// // Write your function here:
// function tipCalculator(quality, total){
//     if (quality === 'bad'){
//         return (total *.05);
//     }
//     else if (quality === 'ok'){
//         return (total * .15);
//     }
//     else if (quality === 'good'){
//         return (total * .20);
//     }
//     else if (quality === 'excellent'){
//         return (total * .30);
//     }
//     else
//         return (total *.18);
// }
// console.log(tipCalculator('bad', 100));
// console.log(tipCalculator('ok', 100));
// console.log(tipCalculator('good', 100));
// console.log(tipCalculator('excellent', 100));
// console.log(tipCalculator('mediocre', 100));


//
// 12 .Write a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a
// string. Use a switch/case, and cover these cases:
//
//     'shrug' should return '|_{"}_|'
//         'smiley face' should return ':)'
//         'frowny face' should return':('
//         'winky face' should return ';)'
//         'heart' should return '<3'
//         any other input should return '|_(* ~ *)_|'

// // Write your function here:
// function toEmoticon(str){
//     if(str === 'shrug'){
//         return '|_{}_|';
//     }
//     else if(str ==='smiley face'){
//         return ':)';
//     }
//     else if(str ==='frowny face'){
//         return ':(';
//     }
//     else if(str ==='winky face'){
//         return ';)';
//     }
//     else if(str ==='heart'){
//         return '<3'
//     }
//     else{
//         return '|_(*~*)_|'
//     }
// }



// Uncomment the line below when you're ready to try out your function
// console.log(toEmoticon("shrug"));

// Should print  '|_(* ~ *)_|'

// We encourage you to add more function calls of your own to test your code!

