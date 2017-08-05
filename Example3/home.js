var out = document.getElementById('logout');
out.addEventListener('click', logoutwindow);

function logoutwindow(){
  window.location.assign('index.html');
}

user ={
    "name":"David",
    "age":24,
    "pets":[
        { "animal":"dog", "name":"Fido" },
        { "animal":"cat", "name":"Felix" },
        { "animal":"hamster", "name":"Lightning" }
    ]
};
document.getElementById("info").innerHTML = 'name: ' + '<span>' + user.name + '</span>'+ '<br>' + 'age: ' +  '<span>' + user.age + '</span>' + '<br>' +  'pets: ' +  '<span>' + user.pets[0].animal + '</span>';


var timer = document.getElementById('timer');
var loop;

function displayTime(){
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();

  timer.innerHTML = '<p>'+'Current time:'+'</p>' + h +'h:'+m+'m:'+s+"s"
}

loop = setInterval(displayTime, 1000);

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city = ['Belgrade', 'London', 'New York'];
var apikey = '&APPID=c1e67c4b491ffc897aec14a1f0d70ce5';

var url = api + city[0] + apikey;


var arrow = document.getElementById('ar');
arrow.addEventListener('click', changeCity);

function changeCity(){

      console.log('kliker');
}


function getData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var weather = JSON.parse(this.responseText);
      document.getElementById("weather").innerHTML = "Wind speed:  " + weather.wind.speed + " <br> " + "Humidity:  " + weather.main.humidity + " <br> " + "City: " + weather.name + " <br> " + "Temperature: " + + weather.main.temp;
      console.log(weather);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

var wtr = document.getElementById('weather');

wtr.addEventListener('click', style);
function style(){
  wtr.setAttribute('class', 'btn-style' );
}

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
