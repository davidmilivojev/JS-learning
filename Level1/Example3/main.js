var user = document.getElementById('username');
var pass = document.getElementById('password');
var send = document.getElementById('btn');


send.addEventListener('click', validation);
user.addEventListener('focus', clear);
pass.addEventListener('focus', clear);


function validation(){
  var xx = 1;

  if(user.value =='' || user.value != 'david' ){
    user.value = 'this field is empty or wrong username';
    user.style.color = 'red';
    var xx = 0;
  };
  if(pass.value =='' || pass.value !='sifra'){
    pass.value = 'this field is empty or wrong password';
    pass.style.color = 'red';
    var xx = 0;
  };

  if(xx == 1){
    window.location.assign('home.html');
  };
  console.log('test');
};

function clear(){
  this.value='';
  this.style.color = 'grey';
};
