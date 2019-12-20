//the following functions will be useful for solving more complicated functions! These were taken from previous exercises! You will also notice that I use some concepts from es6, although it is not absolutely necessary, it usually results in simpler and/or more eloquent functions.

// Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.

function isNegative(num) {
    return num < 0;
}

// Write a function named `isTen` that accepts a number and returns a boolean

function isTen(num) {
    return num === 10;
}

// Write a function named `double` that accepts a number and returns the number
// doubled.

function double(num) {
    return (num * 2);
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// write a function named remove3s that accepts and array of numbers and returns an array with all all of the same numbers except for 3
// {} object, properties and values
// [] array

function remove3s(arr) {
    let bucket = [];
    arr.foreach(function(num){
        if (num !==3) {
        bucket.push(num);
        }
    });
    return bucket

}



// write a function named sumAll that returns the sum of all numbers in an array


function sumAll(arr) {
    var total = 0;

    for (var i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
        total += arr[i];
    }
    return total
}

// once we have the sum of all numbers in an array we can use it for further math problems.




// write a function named countEvens that accepts an array of nuyms and returns the number of even numbers in the array.

function countEvens(arr){
    var evenCount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0){
            evenCount +=1;
        }
        return evenCount
    }


}



// Write a function named totalSales that accepts an array of employee objects. Each object has a 'name' property and a 'sale' property. Return the total sales
// name: 'string'
// sales: numbers

function totalSales(arr){
    var totalSales = 0;
    for (var i = 0; i < arr.length; i++){
        var empSales = parseFloat(arr[i].sales);
        totalSales += empSales;
    }
    return totalSales;
}



//write a function named AsAndBs that accepts a string and returns a count of how many a's and b's is contains

function AsandBs(str){
    var letterCount = 0;
    var string =str.toString();
    string = string.toLowerCase();
    for (var i =0; i <=string.length -1; i++){
        uf (string.charAt(i) === "a" || string.charAt(i) === "b") {
            letterCount +=1;
            console.log(string);
        }
        return letterCount;
    }
}




// Write a function called StringLength that returns the length of a string, if the input is not a string, return false

function stringLenght(str){
    return str.lenght;
}


//write a function that accepts a string and returns an object with the original string, the length of the string, as well as the number of a's and b'sc
function analyzeWord(str){
    var word ={};
    word.word =str;
    word.numberOfLetters = StringLength(str);
    word.numberOfAsAndBs = AsandBs(str);
    return word;
}
console.log(analyzeWord("dog"));
console.log(analyzeWord("banana"))


// Write a function thataccepts an array or strings and returns an array of those words analyzaed similarly



function analyzeAllWords(arr){
    var analyzeWords = [];
    for(var i = 0; i < arr.length;i++){
        analyzeWords.push(analyzeWord(arr[i]);
    }
    return analyzeWords;
}
console.log(analyzeAllWords(arr: ['dog', 'banana', 'mississippi']));

}

//capitalize first letter of a string

const lower = 'this is an entirely lowercase string';
const upper = lower.charAt(0).toUpperCase() + lower.substring(1);

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

capitalize names

function capitalizeName(name) {
    return name.replace(/\b(\w)/g, s => s.toUpperCase());

    function countOdds(numbers) {
        var count = 0;

        for(var i = 0;i < numbers.length; i++) {
            if(numbers[i] % 2 === 1) {
                count += 1
            }
        }return count
    }
}
function mean(numbers) {
    var mean = 0;

    for (var i = 0; i < numbers.length; i++) {
        mean += numbers[i];
    }
    return mean / numbers.length;

    function isVowel(str) {
        return ['a', 'e', 'i','o', 'u'].indexOf(str.toLowerCase()) !== -1
    }
}

