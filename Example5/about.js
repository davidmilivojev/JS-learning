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
//  localStorage.getItem('userName');

function myFunc(){
   if(localStorage.getItem('userName') != 'david'){
   window.location.assign('index.html');
 }
}
