'use strict';
//example1

var p = document.getElementById('promise');
let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing made async successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML5 API.
  let randomTimeSucess = Math.floor(Math.random()*(2000-1000));
  let randomTimeFail = Math.floor(Math.random()*(2000-1000));

  setTimeout(function(){
    resolve("Success!");
  }, randomTimeSucess);
  console.log("Sucess random time is: " + randomTimeSucess);

  setTimeout(function(){
    reject("Fail!");
  }, randomTimeFail);
  console.log("Fail random time is: " + randomTimeFail);

}).then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage);
  p.innerHTML = "Yay! " + successMessage;
  p.setAttribute('style','color: white; font-size: 3em; font-family: arial; background: green;');

}).catch((failMessage) => {
  console.log("Nooou! " + failMessage);
  p.innerHTML = "Nooou! " + failMessage;
  p.setAttribute('style','color: white; font-size: 3em; font-family: arial; background: red;');
});

//example2

var test = new Promise((resolve, reject)=>{
  resolve(1);
});

test.then((val)=>{
  console.log(val);
  return val +2;
}).then((val)=>{
  console.log(val);
});
