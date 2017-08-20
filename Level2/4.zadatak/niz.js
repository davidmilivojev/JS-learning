'use strict';

var broj = require('./broj.js');

class Niz{
  constructor(brojevi, zbir){
    this.brojevi = [1,2,3,4,5,6,7,8,9,10];
    this.zbir = this.zbir();
  }

  zbir(){
    var sum = 0;
    for(var i=0; i< this.brojevi.length; i++){
      sum = sum + this.brojevi[i];
    }
     return sum;
  }
};

var niz = new Niz(1);
var ubacenNiz = broj.brojevi;
console.log(ubacenNiz);
console.log(niz);
module.exports.nizovi = niz;
