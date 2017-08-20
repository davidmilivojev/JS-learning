'use strict';

class Broj{
  constructor(id, broj){
    this.id = id;
    this.broj = broj;
  }
}

var prvi = new Broj('1','prvi');
var drugi = new Broj('2','drugi');
var treci = new Broj('3','treci');

module.exports.brojevi = [prvi, drugi, treci];
