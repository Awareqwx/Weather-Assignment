$(document).ready(function() {
    $('form').submit(function() { //d2b7497c386431a6bd07318961b13cb7
        $.get("http://api.openweathermap.org/data/2.5/weather?q=" + $("#searchbox").val() + "&APPID=d2b7497c386431a6bd07318961b13cb7", function(res) {
            console.log(res);
            $("#wrapper h1").html(res.name);
            $("#wrapper h3").html((Math.round((res.main.temp * 1.8 - 459.67) * 100) / 100) + "ºF");
        }, 'json');
        return false;
    });
});