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


//gallery

var currentPhoto = document.getElementById('current');
var photos = document.getElementsByClassName('thumb');

for(var i=0; i<photos.length; i++){
  photos[i].addEventListener('click', displayPhotos);
}

function displayPhotos(){
  var targetPhoto = this.getAttribute('src');
  currentPhoto.setAttribute('src', targetPhoto);
}
