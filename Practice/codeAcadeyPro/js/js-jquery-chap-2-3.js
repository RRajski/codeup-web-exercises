"use strict"
// // 1. Create var for welcome message
// var greeting ='howdy';
// var name='Molly';
// var message=',please check your order:';
// var welcome= greeting+name+message;
//
// // Create variables to hold details about the sign
// var sign = 'Montaque House';
// var tiles = 'sign.length';
// var subTotal = 'tiles * 5';
// var shipping = 7;
// var grandTotal = subTotal + shipping;
//
// // Get element that has id greeting
// var el =document.getElementsByClassName('greeting');
// el.textContent = welcome;
//
// // id usersign update its contents
// var elSign =  document.getElementById('userSign');
// elSign.textContent = sign;
//
// // id of tile update contents
// var elTiles =document.getElementById('tiles');
// elTiles.textContent = tiles;
//
// // Get  the element that has an id of subTotal then upadate its contents
// var elSubTotal =document.getElementById('subTotal');
// elSubTotal.textContent = '$' + shipping;
//
// // Get element id of grandTotal and update its contents
// var elGrandTotal = document.getElementById('grandTotal');
// elGrandTotal.textContent = '$' + grandTotal;


// Chapter 3 Global Objects Practice

// var saying ='Home Sweet Home';

// console.log(saying.length);
// console.log('hello');
// console.log(saying.toLowerCase());
// console.log(saying.toUpperCase());
// console.log(saying.charAt(12));
// console.log(saying.indexOf('ee'));
// console.log(saying.lastIndexOf('e'));
// console.log(saying.substring(8,14));
// console.log(saying.split(' '));
// console.log(saying.trim());
// console.log(saying.replace('me','w'));


// Working with strings
// var saying ='Home sweet home';
// var msg ='<h2>length</h2><p>' + saying.length + '</p>';
// //     msg +='<h2>uppercase</h2><p>' +saying.toUpperCase()+'</p>';
// //     msg +='<h2>lowercase</h2><p>' +saying.toLowerCase()+'</p>';
// //     msg +='<h2>character index: 12</h2><p>'+saying.charAt(12) + '</p>';
// //     msg +='<h2>first ee</h2><p>' + saying.indexOf('ee') + '</p>';
// //     msg +='<h2>last e</h2><p>' + saying.lastIndexOf('e')+'</p>';
// //     msg +='<h2>character index 8:14</h2><p>' + saying.substring(8,14)+ '</p>';
// //     msg =+'<h2>replace</h2>'+ saying.replace('m','w')+ '</p>';
// //
// //     var el = document.getElementById('info');
// //     el.innerHTML = msg;

    // Pg 142 Example: Functions, Methods and Objects

// Create hotel object and write out offer details

var hotel ={
    name: 'Park',
    roomRate: 240,
    discount: 15,
    offerPrice: function(){
        var offerRate = this.roomRate * ((100 - this.discount)/100);
        return offerRate;

    }
}
var hotelName;
hotelName = document.getElementById('hotelName');
var roomRate;
roomRate = document.getElementById('roomRate');
var specialRate;
specialRate = document.getElementById('specialRate');

console.log(specialRate);

hotelName.textContent = hotelName;
roomRate.textContent = '$' + roomRate.toFixed(2);
specialRate.textContent = '$' + hotel.offerPrice();






