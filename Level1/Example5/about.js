var p1 = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve('one');
  }, 3000);
});

var p2 = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve('two');
  }, 1000);
});

var p3 = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve('three');
  }, 4000);
});

Promise.all([p1, p2, p3])
  .then(function(values){
    console.log(values);
  })
  .catch(function(error){
    console.log(error);
  });



  var hamb = document.getElementById('hamburger');
  var mobContent = document.getElementById('mob');

  hamb.addEventListener('click', openMenu);

  function openMenu(){
    if(  mobContent.style.display == 'none'){
         mobContent.style.display = 'block';
    }else{
         mobContent.style.display = 'none';
    }
  }

var user = document.getElementById('username');
function myFunc(){
   if(localStorage.getItem('userName') != 'david'){
   window.location.assign('index.html');
 }
}


//serialize JSON
//example1

var obj = {
  a: 1,
  b: "test",
  c: [1,2,3],
  d: 5,
  e: true
};

var serialz = JSON.stringify(obj);
console.log(serialz + "  converted into JSON string");

var serialzFilter = JSON.stringify(obj,["a", "c", "e"]);
console.log(serialzFilter + "  converted into JSON string with filter");

var restored = JSON.parse(serialzFilter);
console.log(restored);

//example2
function replacer(key, value) {
  // Filtering out properties
  if (typeof value === 'string') {
    return undefined;
  }
  return value;
}

var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7};
var result = JSON.stringify(foo, replacer);
console.log(result + " example with function");

//example3 (with localStorage)
// Creating an example of JSON
var monitor = {
  'screens': [],
  'state': true
};
monitor.screens.push({ 'name': 'screenA', 'width': 450, 'height': 250 });
monitor.screens.push({ 'name': 'screenB', 'width': 650, 'height': 350 });
monitor.screens.push({ 'name': 'screenC', 'width': 750, 'height': 120 });
// Converting the JSON string with JSON.stringify()
// then saving with localStorage in the name of session
localStorage.setItem('monitor', JSON.stringify(monitor));
// Example of how to transform the String generated through
// JSON.stringify() and saved in localStorage in JSON object again
var restoredSession = JSON.parse(localStorage.getItem('monitor'));
// Now restoredSession variable contains the object that was saved
// in localStorage
console.log(restoredSession);

//test
var stringObj = {
  ime: 'david',
  godine: 23
}
localStorage.setItem('dav', JSON.stringify(stringObj));
console.log(JSON.stringify(stringObj));

var res = JSON.parse(localStorage.getItem('dav'));
console.log(res);



//keycode


var txtArea = document.getElementById('text-area');
var contTxtArea = document.getElementById('content-txt-area');
var infoText = document.getElementById('info-description');
txtArea.addEventListener('scroll', scrolling);

function scrolling() {
    var y = txtArea.scrollTop;
    var x = txtArea.scrollHeight;
    var z = txtArea.clientHeight;
    if(x - y === z){
      contTxtArea.style.background = 'black';
      infoText.innerHTML = 'Thanks for reading';
      infoText.style.color = 'green';
    }else{
      contTxtArea.style.background = 'grey';
    }
    document.getElementById ('y-value').innerHTML =  'Vertically:' + y +'px';
}
