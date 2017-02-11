$(document).ready(function(){

  $.getJSON("http://ip-api.com/json", function(data) {
  var lat = data.lat;
  var lon = data.lon;
  var api = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&APPID=cadef13c885fc3c4131bed504a6caaf2";
    var apic = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&APPID=cadef13c885fc3c4131bed504a6caaf2";

  $("#city").html(data.city);

  $.getJSON(api, function(trob) {
    $("#temp").html(trob.main.temp+"°F");
    $("#desc").html(trob.weather[0].description);

    if(trob.weather[0].description=="clear sky"){
      $("body").css("background-image", "url(http://cdn.paper4pc.com/images/clear-sky-wallpaper-1.jpg)");
    }

  else if (trob.weather[0].description=="few clouds"){
      $("body").css("background-image", "url(http://1.bp.blogspot.com/-i5M2mMFxxWw/Tig8rhEEAHI/AAAAAAAACfA/lsg3C-MdRJ4/s1600/114.jpg)");
    }

    else if (trob.weather[0].description=="scattered clouds"){
      $("body").css("background-image", "url(http://static.panoramio.com/photos/large/42001074.jpg)");
    }

       else if (trob.weather[0].description=="broken clouds"){
      $("body").css("background-image", "url(http://danwrayphoto.com/wp-content/uploads/2014/06/WRA4814.jpg)");
    }

    else if (trob.weather[0].description=="shower rain"){
      $("body").css("background-image", "url(http://i.imgur.com/oiJCTvP.jpg)");
    }

    else if (trob.weather[0].description=="rain"){
      $("body").css("background-image", "url(https://sites.google.com/site/platttempecatedecidousforest/_/rsrc/1468752213267/biotic-and-abiotic/rain24-hours.jpg?height=1186&width=1521)");
    }

      else if (trob.weather[0].description=="thunderstorm"){
      $("body").css("background-image", "url(https://positively.com/files/THUNDERSTORM_Featured.jpg)");
    }

     else if (trob.weather[0].description=="snow"){
      $("body").css("background-image", "url(http://graphics8.nytimes.com/images/2012/12/17/sports/AVIE_StevensPass-slide-F161/AVIE_StevensPass-slide-F161-custom1-v2.jpg)");
    }

    else if (trob.weather[0].description=="mist"){
      $("body").css("background-image", "url(http://htcwallpaperfree.com/wp-content/uploads/2013/04/129308.jpg)");
    }

  });

  $("#far").click(function(){
    $.getJSON(api, function(trob) {
    $("#temp").html(trob.main.temp+"°F");
  });

  });

    $("#cel").click(function(){
      $.getJSON(apic, function(troc) {
    $("#temp").html(troc.main.temp+"°C");
  });
    });
});

});
