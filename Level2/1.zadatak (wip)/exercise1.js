'use strict';

var a = 5;
var v = a*a*a;

class Predmet{
  constructor(sirina, duzina, visina, tezina, ime, zapremina){
    this.sirina = sirina;
    this.duzina = duzina;
    this.visina = visina;
    this.tezina = tezina;
    this.ime = ime;
    this.zapremina = this.metodaZapremine();
  }

  metodaZapremine(){
    return `${v} zapremina`;
  }
};


class Soba{
  constructor(duzina, sirina, visina, unos, dugme, stvari){
    this.duzina = duzina;
    this.sirina = sirina;
    this.visina = visina;
    this.unos = document.getElementById('xxx');
    this.dugme = document.getElementById('btn');
    this.dugme.addEventListener('click', this.dodajPredmet.bind(this));
    this.dugme2 = document.getElementById('btn2');
    this.dugme2.addEventListener('click', this.izbaciPredmet.bind(this));
  }

  dodajPredmet(){
    var x = this.unos.value;
    var niz = [];

    if(x < v){
      var z = v - x ;
      console.log(`dodajem ${x}`);
      console.log(`Ostalo je jos zapremine ${z}`);
      niz.push(x);
      console.log(niz);
    }else{
      console.log('err dodaj');
    }

  }

  izbaciPredmet(){
    console.log(this.niz);
  }

}




var soba = new Soba(20, 20, 20);
console.log(soba);
var pred = new Predmet('20', '30', '40', '50kg', 'balon');
console.log(pred);



// class Cats extends Animals{
//   constructor(name, color, age){
//     super(name, color);
//     this.age = '23';
//   }
// }
