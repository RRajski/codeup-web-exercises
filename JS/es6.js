/*
 * Complete the TODO items below
 */
// array of users each is an object
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
  // {
  //   name: 'Enrico Montoya'
  //   email: 'youKilledMyFather@gmail.com',
  //   languages: ['english', 'html', 'javascript']
  // }

];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// Done

// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'Enrico Montoya';
const email = 'youKilledMyFather@gmail.com';
const languages = ['html', 'css', 'polish' ];

// TODO: rewrite the object literal using object property shorthand
users.push({
  name,
  email,
  languages,
});

// function users.push (name, email,languages) {
//   return { type: 'user', name, email, languages};
// }

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach(function(user) {
  return emails.push(user.email);
});
// users.forEach => (user){
//   return names.push(user.name);
//
// });

users.forEach(user) => emails.push(user.emai);

}
users.forEach(function(user) {
  return names.push(user.name);
});
users.forEach(user) => emails.push user.name;


// TODO: replace `var` with `let` in the following declaration
var developers= [];
let developers = [];

// TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition

const {name, email, languages} = user;

  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;

  const name =  {name: 'user.name', email: '';

  // TODO: rewrite the assignment below to use template strings
  developers.push(`${name}'s email is ${email}, ${name} knows ${languages.join')});
});
// console.log(developers);

// TODO: Use `let` for the following variable

let  list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop


// developers.forEach(function (developer) {
for (let developer of developers){




  // TODO: rewrite the assignment below to use template strings


  list += '<li>' + developer + '</li>';
});
list += '</ul>';


list =  `<li>${developer}</li>`
)};
  document.getElementById("message").innerhtml = list;



