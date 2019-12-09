// // #1 2squared until 2 square 16
//
//
// // // for (var i = 1; i <= 16; i++){
// // //         console.log(Math.pow(2, i));
// // // }
// //
// // var x =2;
// // while (x<=65536){
// //     console.log(x);
// //     x*=2
// // }
//
//
//
// // // This is how you get a random number between 50 and 100
// // var allCones = Math.floor(Math.random() * 50) + 50;
// // // This expression will generate a random number between 1 and 5
// // Math.floor(Math.random() * 5) + 1;
// //
// // 5 cones sold...  // if there are enough cones
// // Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// //     Yay! I sold them all! // If there are no more cones
// //
// //1.Generate total amount of cones
// // 2. customer wants to by x cones conesSold
// // 3.  We need to check that we have that amount of cones
// // 4.  if no sad path sorryMessage
// // 5,. if we do happy path happyConesMessage
// // // 6. amount of sold cones from all cones.
// // repeat until no cones left while all cones >0
//
// var allCones = Math.floor(Math.random()* 50) + 50;
//
// do{
//     var conesPurchased = Math.floor(Math.random() * 5) + 1;
//
//     if (conesPurchased > allCones{
//         //sad path not enough cones
//         var sadConeMessage ="Cannot sell you" + conesPurchased + "I only have" + allCones +
//         "..."
//         console.log(sadConeMessage);
//     }else{
//         allCones -= conesPurchased;
//
//         var happyConesMessage = conesPurchased+ " cones sold..." +allCones+"cones to go";
//     }
// }while (allCones > 0)
// }console.log("yay I sold all the cones");


//
// do{
//     var conesSold = Math.floor(Math.random() * 5) + 1;
//
//     var remainingCones = allCones - conesSold;
//     if (conesSold <=== remainingCones) {
//        console.log(alertMessage"(x) cones sold");
//     }
//     else if (conesSold > remainingCones){
//         console.log("Cannot sell you (x) cones; I only have "(x) cones);
//     }
//     else{
//         console.log(remainingCones === 0 "Yay! I sold them all!");
//     }







// do {
//     console.log('while loop iteration #' + i);
//     i++;
// } while (i < 10);


//
// var i = 0;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }if (
//
// )
//     else if{
//         console.log(alertMessage)
//
// }
// else{
//     console.log(alertMessage "Yay! I sold them all");
// }



//
// if (y ===2);
// console.log(result);
//
// // for(var i=0; i<=100; i++) {
// //     if (i % 2 === 0) {
// //         console.log(i);
// //     }
// // }

//clock hour
// if hour is between 6 and 1, good morning
// if it is between 12 and 6 good afternoon
//
// let hour =10;
// if (hour >= 6 && hour < 12) {
//     console.log('Good Morning');
// }
// else if(hour >= 12 && hour < 18){
//     console.log('Good Afternoon!');
// }
// else (hour >= 18 && hour < 24){
//     console.log('Good Evening');
// }
