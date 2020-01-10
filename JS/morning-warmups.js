"use strict"

//     function helloWorld(){
//         return "Hello World";
//     }
//         console.log(helloWorld);
//
//
//
//     function helloName(name) {
//         return = 'Hello, ' + name +"!";
//
//     }
// console.log(helloName("Europa"));
//
//     // write a js function called add(x,y)
/
//write a Js funcion called addFour wxyz
//that takes in four numbers and returns the sum
//function addFour(w,x,y,z){

//   return (w+x+y+z)
// }
//write a JS function called calculateRectangleAre that takes in length and with and returns the are of a rectangle
//function calculateRectangleArea(lenght,width){
//  return (length * width);
//  }
// console.log(calculateRectangleArea(5,8));

//write a JS function called first item that takes in an array and returns the first item of that array

// function firstItem(inputArray){
// return inputArray [0]
//  }

// console.log(firstItem(["dog","cat", "bird", "fish"]));

// write a js function called arrayLength and returns the length of the array//
//var arrayLength = function (inputArray) {
// return inputArray.length;//

//output 4//
// console.log(arrayLength(["dog", "cat", "bird", "fish"]));//



// }
//write a js function called lastItem that takes in an array and returns the last item//
//var lastItem = function (inputArray) {
//return inputArray[inputArray.length -1];//
// }//


//11-19-2019 write a JS function called NthItem that takes io an array and a number and returns
//the nthItem from the array//
//     function nthitem
//
//     var nthItem = function(inp\
//     t, n) {/
// ø          return inputArray[n-1];
//  \l     }
//
//
//
//
//     console.log(nthItem)(["vivian","daniel","justin", "sophie"], 2)
//     console.log((nthItem(["dog","cat", "bird", "fish"], 2);
//
//             // nt
//             //
//             //
//
//             //write a JS function that takes an array and puts 2 into it.
// console.log(push2)[]\
//
//
//     var push2 = function (inputArray) {
//
//     inputArray.push(2)
//         return inputArray;
//     }
//
//     console.log(push2(inputArray)))(["vivian","daniel","justin", "sophie"], 2)
//     console.log(push2(inputArray)
//         ["dog","cat", "bird", "fish"], 2);

// 11-24

//write a JS function that accepts a number and returns true if that number is greater than 10.

//

//         Function greaterThanTen (numInput)
// // {
//     if (numInput > 10)
//         return true;
// } else
// {
//     return false;
// }
//
//             console.log (greaterThanTen(12));
//             console.log (greaterThanTen(10));

// }
//  //12-1-2019
//
// 1. write a function
// 2.  3 conditionals
// 3. alligator see you later
//
//
//         function seeYouLater(inputString){
//             if (inputString == alligator) {
//
//                 return "see you later alligator!";
//
//             }else if(inputString == crocodile)
//
//             return "after a while crocodile";
//
//             else{
//                 return "So Long!";
//             }
//         }

// write a js function that receives another function as a parameter and executes it
// then call the function and pass an anonymous function as an argument

function addContact(id, refreshCallbackFunction) {
    refreshCallback (id);
}

<!--function functionA(callbackFunction){-->
<!--        callbackFunction();-->
<!--}-->
<!--functionA(function () {-->
<!--    alert(('It works!"'));-->

<!--});-->


<!--        </script>-->


<!--    </body>-->


<!--</html>-->

<!--    write a function called "contains that receives an array and another param-->
<!--    and returns true if the param is foun in the array.  There is an easy way, if you find it maybe try the loop to.-->
// var contains  = function (arr, param);{
//     return true
// }
// console.log(arr)
//
// return arr.includes(param);
// for (var i =0; i <arr.length;i++){
//     if (arr[i] === param:) return true;
//
//     console.log(contains([1,2,3]), 3);
//
//     console.log(contains(['Sunday","Monday", "airplane", "I want a doughnut"], "airplane"));
//
//     <!--    12-11-2019-->
//     <!--    warmup with team grinch-->


// function fizzbuzz(num){
//     for (var i=1; i <=num; i++) {
//         if (i % 15 === 0) console.log('fizzbuzz');
//         else if (i % 3 === 0) console.log("fizz");
//         else if (i % 5 === 0) console.log("buzz");
//         else console.log((i));
//     }
// console.log(num);
//     }
//
// for (var i=1; i < 101; i++){
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }

// January 10 warmup find avergage height of hamsters

var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function mean(arr){
    var total = 0

    for (var i = 0; i < arr.length; i++){
        total += numbers[i].heightInMM;
    }
    return total / arr.length;

}console.log(mean(heightInMM));
