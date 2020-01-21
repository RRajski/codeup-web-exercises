const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// 1 .Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.


//  2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

// .filter takes in a functionwhich receives a item and decides (return boolean ) whether the item should make it or not

let trilinquists = users.filter(user=>user.languages.length >= 3);

//  3.   Use .map to create an array of strings where each element is a user's email address

let addressList = users.map(user=>user.email);
console.log(addressList);


//  4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use
// the result to calculate the average.

let totalYears= users.reduce(runningtotal,user)=>{
    return runningTotal += user.yearsOfExperience,0;
}
average:${totalyears/users.length});



// let yearsOfExperience = sum;
//
// let sum = numbers.reduce(function (passedIn, item) {
//     return passedIn + item;},0);
//     return sum + user.yearsOfExperience.lenght;

})



// 5.Use .reduce to get the longest email from the list of users.

let longestEmail =users.reduce(longestSoFar,user)=> {
    if (user.email.length > longestSoFar.length) return user.email;
    else
        return longestSoFar;},"@";
console.log(longestEmail);

/
//
// 6.Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, ' +
// 'fernando, justin.
let greeting =users.reduce(runningGreeting,user)=> user.name+',';
console.log(greeting);


bonus?
    let knownLanguages =users.reduce(languages, user)=>{
    for(let lang in lang in languages){
        if(!languages.includes(lang)) languages.push (lang);
    }
}
//     filter.user
//     languages.push(user.languages.filter)((lang)) =>{
//     return !languages.includes(lang)
// }))
//     console.log(knownLanguages);
//
// }, []);

let uniqueLang = users
    .reduce((languages, usersLang) => {
        usersLang.languages.forEach(function (language) {
            if (languages.includes(language)){
            } else {
                languages.push(language);
            }
        });
        return languages
    }, []);