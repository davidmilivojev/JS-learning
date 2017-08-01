var btn1 = document.getElementById('btn1');

var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');

var i = 0;
var d = 0;

if(localStorage.getItem('Pobednik') == '1'){
  alert('prethodnu igru je pobedio player 1');
}else if(localStorage.getItem('Pobednik') == '2'){
  alert('prethodnu igru je pobedio player 2');
}else{
  alert('trenutno nema pobednika');
}

btn1.addEventListener('click', player1);

function player1(){
  i++;
  score1.innerHTML = i;
  if(i == 20){
    alert('pobednik je player 1');
    localStorage.setItem('Pobednik','1');
  }
}

addEventListener('keydown', player2);

function player2(){
  d++;
  score2.innerHTML = d;
  if(d == 20){
    alert('pobednik je player 2');
    localStorage.setItem('Pobednik','2');
  }
}
