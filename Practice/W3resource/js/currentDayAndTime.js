"use strict"

// 5. Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
//     "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

 var myColor = ["Red","Green","White","Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

// 7. Write a JavaScript program to sort the items of an array. Go to the editor
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

var arr1=[-3,8,7,6,5,-4,3,2,1];
var arr2=[];
var min=arr1[0];
var pos;
var max=arr1[0];
for (i=0; i<arr1.length; i++) {
    if (max<arr1[i]) max=arr1[i];
}
for (var i=0;i<arr1.length;i++) {
    for (var j = 0; j < arr1.length; j++) {
        if (arr1[j] != "x") {
            if (min > arr1[j]) {
                {
                    min = arr1[j];
                    pos = j;
                }
            }
        }
        arr2[i] = min;
        arr1[pos] = "x";
        min = max;
    }
    console.log(arr2);
}