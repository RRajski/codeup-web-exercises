// // "use strict";
// //
// // console.log("hello from conditionals lec.js!");
// //
// // // ================ REAL WORLD SCENARIO ================
// // // If a user is an admin,show a specific navbar
// // // If weather is rainy, show rain icon
// // // If number of lives is 0, game is over
// //
// //
// // // ================ IF STATEMENT SYNTAX ================
// //
// // // if(condition){
// //     // code here runs if condition evaluates to true
// // // }
// //
// //
// // // ================ IF STATEMENT EXAMPLES ================
// // // //TODO Together: Show a specific navbar if user is admin
// if (isAdmin){
//     //show admin NavBar
// //     //showAdminNavbar() <-- function
// var isAdmin = true;
// if (isAdmin){
//     // show admin Navbar
// }
// // if example
// if (condition) {
//     // code here gets executed if condition evaluates to true
// }

// // else{
// //     alert("user is a regular user");
// // }
// // // }
// // //
// // // //TODO Together: Send a 20% off coupon if its users birthday
// if (isBirthday{
//     //send a 20% off coupon
// // })
// // // //TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
//     if(isRaining === true){
//     alert("Its Raining")
//     }
// // var isRainy =false;
// // if(rainy){
// // alert("its raining")
// // }
// // else
// //
// //
// // // // //TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
// // // // var itemCost = 100;
// // // // var currnetBalance = 200;
// // // //     if(itemCost < currnetBalance){
// // // //         alert("you have enough money!")
// // // //     }
// // var itemCost = 100;
// // var currentBalance = 200;
// // if (itemCost<currentBalance){
// //     alert("you have enough money");
// //
// // }
// // //
// // // // //TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
// // // //     var (numberOfLives) = 0;
// // // if (numberOfLives === 0)
// // //         alert("Sorry Game Over!");
// // var (numberOfLives) = 0;
// //     if (numberOfLives === 0){
// //     alert("Sorry Game Over");
// // }
// // //    }
// // // // //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
// // // var weather = "Snowing"
// // // if (weather === 'snowing'){
// // //     alert("Its Snowing!");
// // // }
// // var weather = itsSnowing;
// //     if (weather === Snowing){
// //         alert("its Snowing")
// //     }
// // }
// // //
// // //
// // // //TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
// // // if (numberInput > 10)
// // //     var numberinput = 20;
// // // if(numberinput > 10){
// // //     alert("true")
// // // }
// //
// //
// //
// //
// //
// // //TODO: EXTRA BONUS - Refactor each of the previous statements as functions.
// //
// //
// //
// //
// //
// // // =============== IF / ELSE SYNTAX ================
// //
// // // if(condition){
// // //     // code here runs if condition evaluates to true
// // // } else {
// // //     // code here runs if condition evaluates to false
// // // }
// //
// //
// //
// // // =============== IF / ELSE STATEMENT EXAMPLES ================
// // //TODO Together: Show a specific navbar if user is admin, else show a different navbar
// // //TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
// //
// //
// //
// //
// // //TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
// // var numberOfLives = 5;
// //     if (numberOfLives === 0){
// //         alert("Sorry, Game Over");
// //     }
// //     else (numberOfLives){
// //         alert("Next Level");
// // }
// // //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
// // var weather ="sunny";
// //     if(weather === "snowing"){
// //         alert("its snowing");
// //     }
// //     else{
// //         alert("Check back later for more details!")
// //     }
// // //TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
// // if(numberinput > 10){
// //     alert("true")
// // }
// // else{
// //     alert("the number is less than 10");
// // }
// //
// // //TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
// //
// // function checkIfGameIsOver(numberOfLives){
// //         if (numberOfLives === 0){
// //             return "Sorry game is over"
// //         }else {
// //             return "next Level"
// //         }
// // function checkIfGameIOver(numberOfLives) {
// //             var returnMessage;
// //     if (numberOfLives === 0){
// //         return "Sorry game is over"
// //     }else {
// //         return "next Level"
// // }
// //
// // }
// //
//
//
//
//
//
// //TODO: EXTRA BONUS - Refactor todo#2 from above as a function.
//
//
//
// // SHOULD WE DELETE STUFF EXAMPLE
//
//     var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//         console.log("The value of the confirm is : + weShouldDeleteStuff")
//
//     if (weShouldDeleteStuff) {
//         alert("Delete everything");
//     } else {
//         alert("Operation Canceled!");
//     }
//
//
//
//
// //TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"
//
// // ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// // if(condition1){
// //     // code here runs if condition evaluates to true
// // }else if (condition2){
// //     // code here runs if condition1 is false *and* condition2 evaluates to true
// // }else {
// //     // code here gets executed if condition1 nor condition2 evaluate to true
// // }
//
// var youAreThirteenYearsOld = 13
//     if(youAreThirteenYearsOld){
//         alert("you may Proceed");
//     }
//     else {
//         alert("Sorry, you are not able to proceed");
//     }
//
//
//
// // =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
// //TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
//
// var weather ="snowing";
//     if(weather === "snowing"){
//         alert("its snowing");
//     }
//     else if ("weather === raining"){
//         alert("its raining")
//     }
//     else if(weather === "sunny"){
//         alert("its sunny")
//     }
//     else{
//         alert("have a nice day")
//     }
//
//
//
//
//
//
//
// //TODO Together: refactor the above statement as a function
//
// function checkweather() {
//
// }
//
// // Together: PIZZA PREFERENCE EXAMPLE
//
// // var pizzaPreference = prompt("What kind of pizza do you like?");
// // console.log("User pizza input: " + pizzaPreference);
// //
// // if (pizzaPreference === "pineapple and hot sauce") {
// //     alert("What a coincidence, that's my favorite!");
// // } else if (pizzaPreference === "cheese") {
// //     alert("Just plain cheese? Okay...");
// // }  else if (pizzaPreference === "ham"){
// //     alert("Ham is easy to spell and awesome!");
// // } else {
// //     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// // }

switch (pizzaPreferenc) {
    case"pineapple and hot sauce";
    alert(what a coincidence, That's my favorite');
        break;
     case "cheese";






     ]

}
//
//
//
//
// //TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.
//
// // function checkStopLight(stopLight);
// // if(stopLight === "red"){
// //     return"Put the Pedal to the Metal";
// // }
// // else if ("stopLight === Yellow"){
// //     return"Floor it";
// // }
// // else if(stopLight === "Green"){
// //     return"Gun it";
// // }
// // else{
// //     return"Look in the rearview for rollers";
// // }
//



//
// // ================ NESTED STATEMENTS ===============
// //TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.
// var userage =15;
// var hasPermit = true;
//
// if (userage < 15){
//     alert("You are not old enough");
// }
// else{
//     if userage === 15{
//         alert("you can have a permit")
//     }
// }
// else if (userage >= 16 && hasPermit{
//         alert("you can have a license");
// }
// else if (userage >= 16 && !hasPermit{
//     alert("you can not  have a license");
// }else{
//     alert("please see front desk");
// }
//
// )
//
// //
// function checkStopLight(stopLight);
// if(stopLight === "red"){
//     return"Put the Pedal to the Metal";
// }
// else if ("stopLight === Yellow"){
//     return"Floor it";
// }
// else if(stopLight === "Green"){
//     return"Gun it";
// }
// else{
//     return"Look in the rearview for rollers";
// }






// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);

//
// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)
//
// if(isAdmin){
//     showAdminNavbar();
//     else
//     {
//         showRegularNavbar();
//     }
// }
//
// (isAdmin ? showAdminNavbar() : showRegularNavbar();


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!

var weather = "sunny";
 var weathermessage1 = "rainy";
 var weathermessage2 = "Have a nice day!"

    weathermessage =(weather === "rainy") ? "It's raining" : "Have a nice day";

 console.log((weathermessage));




// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.

var weather = "rainy"
switch(weather) {
    case "rainy":
    alert("It's Rainy!");
        break;
    case "sunny":
    alert("It's sunny!");
        break;
        case "snow":
            alert("its snowing ");
            break;
            default:
alert(have a nice day!");
break;
}


console.log(checkWeather(weather:"sunny"));


//TODO: Rewrite the intersection function from earlier as a switch statement.

function checkTrafficLight(trafficLight{
    var colorMessage;

    switch(trafficLight{
        case "green"
            colorMessage = "keep going!";
        break;
     switch (trafficLight{
         case "yellow"
             colorMessage = slow down!";
         break;
         case "red"
             colorMessage =  "stop";
            break;
         default:
             colorMessage = "proceed with caution";
             break
     }
     return colorMessage;


}
console.log(checkTrafficLight("green"));



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

