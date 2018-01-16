$(document).ready(function() {
      
    var kelvin;
    var celsius;
    var fahrenheit;
    var metric;


    // Converts the temperatures in Celsius and Fahrenheit
    function tempConverter(temp) {
      celsius = Math.round(temp);
      kelvin = Math.round(celsius + 273.15);
      celsius = celsius + " °C";
      
      fahrenheit = Math.round(((kelvin * 2) - (kelvin / 5)) - 459.67);
      fahrenheit = fahrenheit + " °F";
    }
  
    
    // Allows the user to change metrics
    $("#change-metric").click(function() {
      if (metric === "fahrenheit") {
        $(this).text("Change to Fahrenheit");
        temperature.innerHTML = celsius;
        metric = "celsius";
      }
      else {
        $(this).text("Change to Celsius");
        temperature.innerHTML = fahrenheit;
        metric = "fahrenheit";
      }
    });
    
    function updateWeather(position) {

      let url = "https://fcc-weather-api.glitch.me/api/current?lat=" 
      + position.coords.latitude + "&lon=" + position.coords.longitude;
      console.log(url);

      $.getJSON(url, function(json) {
        tempConverter(json.main.temp);
        
        $("#location").html(json.sys.country + ", " + json.name);
        $("#temperature").html(celsius);
        $("#weather-general").html(json.weather[0].main);
        $("#weather-icon").attr("src", json.weather[0].icon);
        console.log(json.main.temp);
      });
    }
    
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(updateWeather);
  } else {
    alert("Your browser doesn't support geolocation");
  }
  
}); 

  
  