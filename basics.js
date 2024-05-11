
const add = function(a,b,callback){
    console.log(a+b);
    callback();
}
// add(5,9,function(){
//     console.log('the addition is executed:');
// });
add(5,10,()=>{console.log('addision is executed');})

var fs = require('fs');
var vs = require('os');

var name = vs.userInfo();
var notes = require('./notes');
console.log(notes.age);
const x = notes.addNum(100,10);
console.log(x);

// fs.appendFile('message.txt','hi'+name.username, (err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
//   });
// console.log(fs);

// lodash
var arr = ['adarsh',1,1,1,2,1,'bhende','bhende'];
var _=require('lodash');

var data = _.uniq(arr);
console.log(data);
// console.log(_.findIndex(data,bhende));
var arr1 =[1,2,2];
var arr2 =[3,3,4];
console.log(_.concat(_.uniq(arr1),_.uniq(arr2)));
var arr1 = _.uniq(arr1);
var arr2 = _.uniq(arr2);
console.log(_.concat(arr1,arr2));


// callback functions

/*
function callback(){
    console.log("work done successfully");
}

function add(a,b){
   let result = a+b;
   console.log("result:"+result);
   callback();
}
add(4,5); */

const adding = function(a,b,func){  // taking variable func
    let res = a+b;
    console.log("result:"+res);
    func();                        // here calling the func ,which means its a function
}

adding(10,15,()=>{                // in line declaration of func
    console.log("work done!");
});