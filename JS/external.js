"use strict"
// console.log("Hello from external JavaScript");
// alert("Welcome to my website!");
var answer =prompt("What is your favorite Color?");
 // prompt("What is your favorite Color?")
console.log(answer);
// // if answer(blue){
// //     return"Great, blue is my favorite color too";
//     if (answer == "blue"){
//         alert("Great, blue is my favorite color too");
//     }
//
//     var userColor = prompt("What is your favorite color?");
//     var alertmessage = ("Great "+ userColor +"is my favorite color too");
//     alert(alertmessage);


// Question 3 movie rental
// ask user what the rental fee is: prompt variable
// how many days littleMermaid
// how may days Hercules
// how many days brotherBear
// calculate the total price * number of days
// alert the total price

// var dailyRentalRate = number(prompt("How much is the daily Rental Rate?"));
// var meramaidDaysRented =number(prompt("How many days are your renting the Little Mermaid?"));
// var herculesDaysRented =number(prompt("How many days are your renting Hercules?"));
// var BrotherBearDaysRented =number(prompt("How many days are your renting the Brother Bear?"));
// var totalCost = number(meramaidDaysRented + herculesDaysRented + BrotherBearDaysRented) * dailyRentalRate;
// var alertMessage = "You owe $: + totalCost";
// alert(alertMessage);


//
// var littleMermaid=9
// var brotherBear=15
// var Hercules=3
// var total = (littleMermaid + brotherBear + Hercules);
//     console.log(total);
//     alert(total);




// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay ' +
// 'you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. ' +
// 'How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for ' +
// 'Google and 4 hours for Amazon.


var googleRate = number(prompt("What is your google rate?));
var amazonRate = number(prompt("What is your amazon rate?));
var facebookRate = number(prompt("What is your facebook Rate?));

var googleHours =number(prompt( "how many hours did you work at google?");
var amazonHours =number(prompt( "how many hours did you work at amazon?");
var facebookHours =number(prompt( "how many hours did you work at Facebook?");

var totalPay = (googleHours * googleRate) + (amazonHours * amazonRate) + (facebookRate * facebookHours);

var alertMessage = "Your total pay is:$" + totalPay;
alert(alertMessage);

//
//
// var google= 400
// var amazon= 380.00
// var facebook= 350
//
//
// var total1  = ((google * 6) + (amazon * 4) + (facebook * 10));
// console.log (total1);
// alert(total1)
//
// // 3.3 A student can be enrolled in a class only if the class is not full and the class schedule
// // does not conflict with her current schedule.
//
// var classIsNotFull = confirm("Class is not full");
// var noScheduleConflicts = confirm("Schedules do not conflict");
//
// console.log("class is not full" + classIsNotFull);
// console.log("no schedule conflicts" + noScheduleConflicts);
//
// var studentEnrolled =classIsNotFull && noScheduleConflicts;
// console.log(studentEnrolled);
//
// ???????????????????????
//
// var numberOfItems = Number(prompt("How many items for checkout?"));
// var offerValid = confirm("Is the Offier Valid?");
// var isPremiumMember = confirm("Are you a premium member?");
//
// var discountApplied = offerValid && (isPremiumMember || numberOfItems >2);
// alert("Can use discount:" + discountApplied);







//
// var isSpaceAvail = (x>1 && x<25);
// var scheduleConflict = false;
// var enrollNow = (isSpaceAvail + scheduleConflict)
//
// if (isSpaceAvail && !scheduleConflict){
//     return true;
// }






