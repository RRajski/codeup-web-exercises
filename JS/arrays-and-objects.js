"use strict"

// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the
// numbers type in ascending order.

    function filterNumbers(inputArray){
    var numberBucket = [];
    inputArray.forEach((function(item){
        if (typeof item === "number"){
            numberBucket.push(item)
        }
    })


    return numberBucket.sort(function(a,b)){
        return a-b;
        }


    }



        console.logfilterNumbers(["fred", true, 5, 3]) //[3, 5]


// 2. Write a function, `getOlder()` that takes in array of dog objects and increases
// the value of the age properties by 1.



      var dogList = [
       dog  {
             name: "Chompers",
             breed: "Pug",
             age: 7
         },
         {
             name: "Freddy",
             breed: "Lab",
             age: 4
         },
         {
             name: "Mr. Pig",
             breed: "Mastif",
             age: 10
         }
     ];
   function getOlder(dogs){
       dogs.forEach(function (dog){
           dog.age +1;
           // dog.age ++;
       }
       return dogs
   }

(dog.age+[i]);

    function getOlder(dogsArray) {
        var bucket = [];

        dogsArray.forEach(function (dogs) {
            return (dog.age + 1)
        })
        return dogs
    }
    console.log(getOlder((dogList));

var carlist = [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
]

function washCars([cars]){
    cars.forEach(function(car){
        if(car.isDirty === true){
            return false;
        }

}

});

    function washCars(cars){
        cars.forEach(function (car) {
            car.isDirty === false;
        })
        return cars;
    }
console.log(washCars(carlist));


// 4. Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the
// isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.



        var userList = [

            {
                 isAdmin: true,
                 email: 'user1@email.com'
             },
             {
                 isAdmin: true,
                 email: 'user2@email.com'
             },
             {
                 isAdmin: false,
                 email: 'user3@email.com'
             }
         ];

        function adminList(users){
            var totalAdminCount = 0;
            users.forEach(function(user) {
                if (user.isAdmin) {
                    totalAdminCount += 1;
                }
            })
            console.log(adminList(userList));
        }

        function adminList(users){
            var adminEmailBucket =[];
            users.forEach(user){
                if(user.isAdmin){
                    adminEmailBucket.push(user.email)
                }
            })
            return adminEmailBucket;
}

    console.log(adminList(userList)

        }

function adminList(users){
    var totalAdminCount = 0;
    users.forEach(function(user) {
        if (user.isAdmin) {
            totalAdminCount += 1;
        }
    })
    console.log(adminList(userList));
}

function adminList(users){
    var adminBucket =[];

    users.forEach(user){
        if(user.isAdmin){
            adminBucket.push(user)
        }
    })
return adminBucket;
}

console.log(adminList(userList)

}





    ```js
       // Example Output (before refactor): 2
 
 
        // Example Output (after 1st refactor): 
        [
            'user1@email.com',
            'user2@email.com'
        ]
        
     
        // Example Output (after 2nd refactor): 
        [
             {
                 isAdmin: true,
                 email: 'user1@email.com'
             },
             {
                 isAdmin: true,
                 email: 'user2@email.com'
             }
         ]

var dogs = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];
// function getOlder (dog.age+[i]);
//
// function getOlder(dogsArray){
//     var bucket = [];

    dogs.forEach(function(dog){
        return (dog.age + 1)
    }
})

return bucket;
}