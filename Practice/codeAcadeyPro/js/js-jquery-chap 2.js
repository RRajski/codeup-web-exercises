"use strict"
// 1. Create var for welcome message
var greeting ='howdy';
var name='Molly';
var message=',please check your order:';
var welcome= greeting+name+message;

// Create variables to hold details about the sign
var sign = 'Montaque House';
var tiles = 'sign.length';
var subTotal = 'tiles * 5';
var shipping = 7;
var grandTotal = subTotal + shipping;

// Get element that has id greeting
var el =document.getElementsByClassName('greeting');
el.textContent = welcome;

// id usersign update its contents
var elSign =  document.getElementById('userSign');
elSign.textContent = sign;

// id of tile update contents
var elTiles =document.getElementById('tiles');
elTiles.textContent = tiles;

// Get  the element that has an id of subTotal then upadate its contents
var elSubTotal =document.getElementById('subTotal');
elSubTotal.textContent = '$' shipping;

// Get element id of grandTotal and update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;


