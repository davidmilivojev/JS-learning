

class Planeta{
  constructor(ljudi, maxPopulacija){
    this.ljudi = ljudi;
    this.maxPopulacija = maxPop;
  }
};

class Covek{
  constructor(ime){
    this.ime = ime;
  }
};

class Crtez{
  constructor(iscrtaj){
    this.iscrtaj = this.iscrtaj();
  }

  iscrtaj(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(200, 200, 200, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(250, 150, 10, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(100, 80, 10, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(100, 180, 10, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(270, 300, 10, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
  }
}

var crt = new Crtez();
var decak = new Covek('pera');
console.log(decak);
