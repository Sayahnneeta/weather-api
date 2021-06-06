$(document).ready(function () {
    var city = "guwahati";
    $.getWeather(city)
    $('.buttons').on('click', function (event) {
        event.preventDefault();
        // console.log($('.searchBox').val());
            if ($('.searchBox').val() != "")
            city = $('.searchBox').val();
        $.getWeather(city);
    });
});
$.getWeather = function (city) {
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=25fad4b0fa53a3943b0b717292dbf797",
        function (data) {
            // console.log(data);
            var name = data.name;
            var description = data.weather[0].description;
            var temp = data.main.temp;
                temp = (temp - 32) * (5.0 / 9) ;
            var change = temp.toFixed(2);
            temp = temp.toFixed(2) + "°C";
            var tempMax = data.main.temp_max;
                 tempMax = (tempMax - 32) * (5.0 / 9) ;
            tempMax = tempMax.toFixed(2) + "°C";
            var tempMin = data.main.temp_min;
                tempMin = (tempMin - 32) * (5.0 / 9) ;    
            tempMin = tempMin.toFixed(2) + "°C";
            var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            var weather = data.weather[0].main;
            var description = data.weather[0].description;
            var weather = data.weather[0].main
            var feelLike = data.main.feels_like;
                 feelLike = (feelLike - 32 )* (5.0 / 9);
                feelLike = feelLike.toFixed(2) + "°C";
            var humidity = data.main.humidity + "%";
            var windSpeed = data.wind.speed + "km/hr";

            $('.name').text(name);
            $('.description').text(description);
            $('.temp').text(temp);
            $('#minTemp').text(tempMin);
            $('#maxTemp').text(tempMax);
            $('#icon').attr('src', icon);
            $('#humidity').text(humidity);
            $('#windSpeed').text(windSpeed);
            $('#feelLike').text(feelLike);
            $('#weather').text(weather);

            $.date = function () {
                let dat = Date().substring(8, 10);
                let day = Date().substring(0, 3);
                let month = Date().substring(4, 8);
                var year = Date().substring(10, 15);
                let final = month + dat + year + ", " + day;
                return final;

            };
            setInterval($.time = function () {
                let hour = Date().substring(16, 18);
                let min = Date().substring(19, 21);
                let sec = Date().substring(22, 24);
                let final;
                if (hour > 12) {
                    hour = hour - 12;
                    final = hour + ":" + min + ":" + sec + " PM";
                }
                else if (hour == 0 ) {
                    hour = 12 ;
                    final = hour + ":" + min + ":" + sec + " AM";    
                }
                else if (hour==12)
                {
                    final = hour + ":" + min + ":" + sec + " PM"; 
                }
                else
                final = hour + ":" + min + ":" + sec + " AM";
                $('.time').html(final);

            }, 1000);

            $('.date').text($.date());
          
            
            
                // if(change<100)
                // {
                //     $("body").css("background-image", "url(/bg.jpg)");
                // }

            


        });

};


