var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city = 'Belgrade';
var apikey = '&APPID=c1e67c4b491ffc897aec14a1f0d70ce5';

var url = api + city + apikey;


function getData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var weather = JSON.parse(this.responseText);
      document.getElementById("demo").innerHTML = "Wind speed:  " + weather.wind.speed + " <br> " + "Humidity:  " + weather.main.humidity + " <br> " + "City: " + weather.name + " <br> " + "Temperature: " + + weather.main.temp;
      console.log(weather);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

var wtr = document.getElementById('demo');

wtr.addEventListener('click', style);
function style(){
  wtr.setAttribute('class', 'styler' );
}

// wtr.addEventListener('mouseover', styleChange);
//
// function styleChange(){
//   wtr.setAttribute('style', 'margin: 0 auto; font-size: 20px; width: 300px; height: 100px; color: white; background: green; border: 1px solid red;text-align: center;');
// }
