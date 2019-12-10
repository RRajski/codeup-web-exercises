(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    console.log(planetsString);

    var planetsArray = planetsString.split('|');

//     var namesString = "Joe,Bob,Sally";
//
//     console.log(namesString);
// // Joe,Bob,Sally
//
//     var namesArray = namesString.split(',');
//
//     console.log(namesArray);

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?

     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    planetsString = planetsArray.join("<br>");
    console.log(planetsString);


    var planetsUL ="<ul>";
    planetsArray.forEach(function (planet) {
        planetsUL +="<li>" + planet + "</li>";
    })
    planetsUL += "</ul>";
    console.log(planetsUL);


})();