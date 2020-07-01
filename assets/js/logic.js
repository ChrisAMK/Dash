// face

document.querySelector('body').addEventListener('mousemove', eyeball);

function eyeball(){
  var eye = document.querySelectorAll('.eye');
  eye.forEach(function(eye){
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = (radian * (180 / Math.PI) * -1) + 0;
    eye.style.transform = "rotate("+ rot +"deg)"
})
}

$(document).ready(function() {

    navigator.geolocation.getCurrentPosition(function(position){
        var geoLocCity = "https://api.opencagedata.com/geocode/v1/json?q=" + position.coords.latitude + "+" + position.coords.longitude + "&key=c846948fec9e400ca0be49cda9ad77d3"
        $.get( geoLocCity, function(data) {
                city = data.results[0].components.city
                citySearch(city);
                console.log(geoLocCity);
                console.log(city);
        })
    })
    
    function loadPlaylist(NplaylistId) {
        var key = "AIzaSyD73DBmggAT8Oyq8DbLKl9IxMOas6P42bw";
        playlistId = NplaylistId;
        var URL = "https://www.googleapis.com/youtube/v3/playlistItems";
        options = {
            part: 'snippet',
            key: key,
            maxResults: 10,
            playlistId: playlistId
        }
        loadVideos();
        function loadVideos() {
            $.getJSON(URL, options, function(data) {
            var id = data.items[Math.floor(Math.random() * 10)].snippet.resourceId.videoId
            $("#playlist-list").empty()
            for (i = 0; i < 10; i++) {
                var playlistItem = $("<li>");
                playlistItem.html(data.items[i].snippet.title)
                playlistItem.attr("data-index", i)
                playlistItem.attr("class", "playlist-song")
                playlistItem.attr("data-link", data.items[i].snippet.resourceId.videoId)
                $("#playlist-list").append(playlistItem)
            }
            mainVid(id);

            $(".playlist-song").on("click", function() {
                id = $(this).attr("data-link")
                mainVid(id)
            })
                })
            }

            function mainVid(id) {
                $("#video").html(`<iframe src="https://www.youtube.com/embed/${id}" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
                picture-in-picture" allowfullscreen></iframe>`)
            }
        }

    function citySearch(city) {

    event.preventDefault();
    $(".musicPlaylist").empty();
    
    var searchitem = city
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchitem + "&units=metric&appid=757f634095b01377ce64f302c19cc9db";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var dayType = response.weather[0].id;
        var dayTemp = response.main.temp;
        console.log(response)
        $("#city-name").text(response.name)
        $("#temperature").text("Temperature: " + response.main.temp + "°C")
        $("#humidity").text("Humidity: " + response.main.humidity + "%")
        $("#wind-speed").text("Windspeed: " + response.wind.speed + "MPH")
        console.log(response.weather[0].id)
        
        if (dayType < 299 && dayType > 200) {
            //Thunder Playlist
            var NplaylistId = "PLNxOe-buLm6cz8UQ-hyG1nm3RTNBUBv3K";
            loadPlaylist(NplaylistId)

        } else if (dayType < 399 && dayType >= 300) {
            // Drizzle Playlist
            var NplaylistId = "PL75C4B43E5F60A82C";
            loadPlaylist(NplaylistId)

        } else if (dayType < 599 && dayType >= 500) {
            // If Weather ID 500 - 599: Rain Playlist
            var NplaylistId = "PLzxEw1CbicllxqVJaN9hodbkMXNX0Cnds";
            loadPlaylist(NplaylistId)

        } else if (dayType < 699 && dayType >= 600) {
            // Snow Playlist 
            var NplaylistId = "PLVLzdRpmA7hSe3Rt7aJte4EFBDM-MW6N9";
            loadPlaylist(NplaylistId)
            
        } else if (dayType < 799 && dayType >= 700) {
            // Hazy Playlist
            var NplaylistId = "PLOzDu-MXXLliO9fBNZOQTBDddoA3FzZUo";
            loadPlaylist(NplaylistId)

        } else if (dayType == 800 && dayTemp < 10) {
            // Clear Playlist cold
            var NplaylistId = "PLetgZKHHaF-Zq1Abh-ZGC4liPd_CV3Uo4";
            loadPlaylist(NplaylistId)

        } else if (dayType == 800 && dayTemp < 30) {
            // Clear Playlist
            var NplaylistId = "PL6Lt9p1lIRZ311J9ZHuzkR5A3xesae2pk";
            loadPlaylist(NplaylistId)

        } else if (dayType == 800 && dayTemp >= 30) {
            // Hot Playlist
            var NplaylistId = "PLMC9KNkIncKtsacKpgMb0CVq43W80FKvo";
            loadPlaylist(NplaylistId)
            
        } else if (dayType > 800 && dayType <= 804) {
            // If Weather ID 800 - 899: Cloudy Playlist
            var NplaylistId = "PLxCJjCvFCkqTpFTz0kbvdP-u8CU0DbyAq";
            loadPlaylist(NplaylistId)

        } else {
            // If Weather ID 800 - 899: Random Playlist
            var NplaylistId = "PL3oW2tjiIxvQW6c-4Iry8Bpp3QId40S5S";
            loadPlaylist(NplaylistId)
        }
        });
    }

    function getJoke() {

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://icanhazdadjoke.com/",
            "method": "GET",
            "headers": {
                "Accept": "application/json",
            }
        }
        
        $.ajax(settings).done(function (response) {
            console.log(response.joke);
            $("#joke").text(response.joke)
        });
    }
    
    $(".face").on("click", function() {
        getJoke();
    });

    $("#btnSearch").on("click", function() {
        city = ($("#current-search-city").val());
        citySearch(city)
    })
    
    


})