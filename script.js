$(document).ready(function(){
    var city= "delhi";
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" +city +"&units=imperial&APPID=25fad4b0fa53a3943b0b717292dbf797",
    function (data) {
        console.log(data);
       var icon= "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
      var temp= Math.floor(data.main.temp);
    var temp=data.main.temp -32/(5/9);
    temp=temp.toFixed(2) + "°C" 
      var weather =data.weather[0].main;

       $('.icon').attr('src',icon);
       $('.temp').append(temp);
       $('weather').append(weather);
    });
});