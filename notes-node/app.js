console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

// var user = os.userInfo();
//
// // console.log(user);
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);

var result = notes.addNote();
console.log(result);

var addNums = notes.add(10, 20);
console.log('Result:', notes.add(10, -30));