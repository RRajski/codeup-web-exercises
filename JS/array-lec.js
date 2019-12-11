//
// var pets =["Toby, malu, Johnie, Lily, Samson, Jill, bubbles"];
// for (var i = 0; i<pets.length; i++){
// console.log(pets[i]);
// }
//
// var i=0;
// while ((i<pets.length; i++)){
//     console.log(pets[1]);
// }
//
// i log pets.length
// 0 Toby 7
// 1  princess
// 2 Samson
// 3 Jill
// 4 Bubbles
// 5 Malu
// 6


// console.log()
//
// pets.forEach(function (pet, i, arr) {
//     console.log(pet);
//
//     }


//  var fruit =["strawberry", "apple", "orange", "banana"];
// console.log(fruit);
// fruit[fruit.length] ="pear";
// fruit.push("pear");
// console.log(fruit.push("pineapple","grape", "mango"));
// console.log(fruit);
// console.log(fruit.shift());
// fruit.unshift("strawberry");
// console.log(fruit.pop("strawberry"));
// console.log(fruit);
// console.log(fruit[fruit.indexOf("orange")]);
// var fruit =["apple", "orange", "banana", "strawberry", "honeydew", "apple"]
// console.log(fruit[fruit.indexOf("apple")]);
// console.log(fruit{})

// var watches =["Rolex", "Breitling", "Tag", "oris", "Rolex"];
// // console.log(watches);
// watches.unshift("Rolex");
// console.log(watches);
// watches.shift("Rolex");
// console.log(watches);
// watches.push("rolex");
// console.log(watches);
// watches.pop();
// console.log(watches);

// var sentence = "The quick brown fox jumps over the lazy dog";
// console.log(sentence);
// var words = sentence.split("");
// for (var i = 0; i <words.length; i++){
//     var word = words [i];
//     var letters = word.split();
//     var capitalFirstLetter = letter[0].toUpperCase();
// }
// words.forEach(function(word)){
//
//     word.charat(0) = word.charat}

// var sentence = "The quick brown fox jumps over the lazy dog";
// console.log(sentence);
// var words = sentence.split(" ");
// for (var i = 0;i<words.length; i++) {
//     // capitalize first letter
//     var word = words[i];
//     // var firstLetter = word.split()[0];
//     var letters = word.split();
//     var capitalFirstLetter = letters[0].toUpperCase();
//     var capitalizedWord = "";
//     capitalizedWord += capitalFirstLetter;
//     for (var j=1;j<letters.length;j++) {
//         capitalizedWord += letters[j];
//     }
//     words[i] = capitalizedWord;
// }
// sentence = words.join(" ");
// console.log(sentence);

// function titleCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//     }
//     // Directly return the joined string
//     return splitStr.join(' ');
// }
// console.log(titleCase("the quick brown fox jumped over the lazy dog"));
//
// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// }
// words.reverse();
// words. sort //Alphabetical order
// , ,
// var fruit =["apple", "orange", "banana," "pear", "pineapple"; "grape", "apple", "mango", "stawberry" ];

// var fruitThru3 = fruit.slice(0,3);
// // var fruit6Thr8 = fruit.slice(5,8);
// // console.log(fruit6Thru8);
// // console.log(fruit);

// var car ={
//   make:"Toyota",
//   model: "Sienna",
//   year:  "2009",
//   isTitled: true,
//   options:["4 wheel drive", "heated seats","leather interior"],
//   goGoGo: function(key){
//    if (key == "correct"){
//     console.log("vroom");
//    }else{
//     console.log("...");
//    }
// }
// }
// console.log("Car was made in "+ car.year);
// console.log("Car has these options:");
// car.options.forEach(function(option){
//  console.log(option)});
// car.goGoGo("key");
//
var bicycle ={
 make: "Cannondale",
//  Model: "Super Six",
//  year: "2015",
//  isRegistered: true,
//  options:["dura ace components", "14 speed", "carbon"],
//  sundayRide: function (wakeUpOnTime) {
//    if (wakeUpOnTime){
//     console.log("Bicycle, bicycle I want to ride my bicycle");
//    }else{
//     console.log("you overslept!");
//    }
//
//  }
//  console.log("bike was made in "+ bicycle.year);

//  var teacher={
//   name: "Daniel",
//   languages: ["English","HTML", "Javascript"],
//   teach: function (language) {
//    if (this.languages.includes(language))
//     console.log("Here is your knowledge");
//    else
//     conole.log("blah, blah, blah");
//
//   }
//
//  }
// teacher.teach("Javascript")
//
// var truck = new Object(());
// // var cats  = new Array();
//
// truck.make = "Tesla";
// truck.model = "CyberTruck";
// truck.year = 2022;
// truck.gogogo =function () {
//  console.log("VROOM");
//
// }
// // cats{3};
// // truck["model"]
var cars = [
    car,
 {
  make: "Dodge",
  model: "Challenger",
  year: "2019",
 },
 {
  make: "Ford",
  model: "GT 500 Mustang",
  year: "1969",
 },
 {
  make: "Cadillac",
  model: "Escalade",
  year: "2015",
  report: function(){
   console.log(this.year + "" + this.make + ""this.model);
  }




 }
]
}
cars.forEach(function(car)){
 car.report();
 // array of objects similarily structured within an array
}

var dogs = [
    dog,
 {
   name: Malu,
   breed: Staffordshire Terrier,
   year obtained: 2019,

 },
{
   name: Pokie,
       breed: German Shepard Mix,
         year obtained: 2000,
         },
{
  name: Chi,
     breed: Collie,
         year obtained: 1999,

    },



]




// var make = "Toyota";
// var model = "Sienna";
// var year = "2009";
// var isTitled = true;








