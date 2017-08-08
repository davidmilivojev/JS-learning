'use strict';

class Animals{
  constructor(name, race, age, color){
    this.name = name;
    this.race = race;
    this.age = this.getAge();
    this.color = this.getColor();
  }
  getAge(){
     return Math.floor(Math.random()*(20-10)+5);
  }

  getColor(){
    if(this instanceof Dogs){
      return 'black';
    }else if(this instanceof Cats){
      return 'white';
    }else{
      return 'black and white';
    }
  }
}

class Dogs extends Animals{
  constructor(name, race, age, price, color, agressive, animal){
    super(name, race, age, color);
    this.animal = 'dog';
    this.price = '200$';
    this.aggresive = 'yes';
  }
}

class Cats extends Animals{
  constructor(name, race, age, price, color, animal){
    super(name, race, age, color);
    this.animal = 'cat';
    this.price = '100$';
  }
}

let animal = new  Animals('Animal', 'Race');
console.log(animal);

var dog = new  Dogs('Miki', 'Westie');
var cat = new Cats('Felix', 'Persian');

var show = document.getElementById('btn-show');
var animalsContent = document.getElementById('animals-type');

show.addEventListener('click', showAnimals);

function showAnimals(){
  if(  animalsContent.style.visibility == 'hidden'){
       animalsContent.style.visibility = 'visible';
  }else{
       animalsContent.style.visibility = 'hidden';
  }
}


var dogs = document.getElementById('dogs');
dogs.innerHTML = `
                  ${dog.animal}
                  ${dog.name}
                  ${dog.race}
                  ${dog.age}
                  ${dog.price}
                  ${dog.color}
                  `;
var cats = document.getElementById('cats');
cats.innerHTML = `
                  ${cat.animal}
                  ${cat.name}
                  ${cat.race}
                  ${cat.age}
                  ${cat.price}
                  ${cat.color}
                  `;

let turnOnComputer = function(){
  return new Promise(function(resolve, reject){
      resolve('Computer is ON>');
  });
};

let startProgram = function(message){
  return new Promise(function(resolve, reject){
    resolve(message + 'Program is started>');
  });
};

let coding = function(message){
  return new Promise(function(resolve, recejt){
    resolve(message + 'Started coding')
  });
};

turnOnComputer().then(function(result){
  return startProgram(result);
}).then(function(result){
  return coding(result);
}).then(function(result){
  document.getElementById('introduction').innerHTML = 'finished = ' + result;
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
