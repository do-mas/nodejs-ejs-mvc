console.log('test');
var userService = require('./app/user.js');

// console.log(userService);
user = userService.getUser(123);

// console.log(user);

var user = {
    _id: '1234',
    __v: 0,
    local:
    {
        password: '$2a$08$jNUqaZknZdxnTX.wayXQ1uQwaOyH.loAzNQD7vxL6o9FpiYYgH4Py',
        email: 'dom4'
    }
};

userService.addUser(user);
userService.addUser(user);

console.log('initial size ' + userService.getUsers().length);

// userService.removeUser(1);

var users  = userService.getUsers();
users.forEach(function(user){
    console.log(user._id);
});

// console.log(userService.getUsers().length);

userService.removeUser(1);
 console.log('removed ' + 1);

var users  = userService.getUsers();
users.forEach(function(user){
    console.log(user._id);
});

// userService.removeUser(1234);
//  console.log('removed ' + 1234);

// var users  = userService.getUsers();
// users.forEach(function(user){
//     console.log(user._id);
// });


// userService.removeUser(1234);
//  console.log('removed ' + 1234);

// var users  = userService.getUsers();
// users.forEach(function(user){
//     console.log(user._id);
// });

// userService.removeUser(1234);

// console.log(userService.getUsers().length);