
$(document).ready(function() {

    $('[data-app-dashboard-toggle-shrink]').on('click', function(e) {
        e.preventDefault();
        $(this).parents('.app-dashboard').toggleClass('shrink-medium').toggleClass('shrink-large');
    });

    var key = "AIzaSyCMYhRU0xkLoW3OyabOnSyaEuf2yYPIR5s";
    var playlistId = "PLMmqTuUsDkRIZ1C1T2AsVz5XIxtVDfSOe";
    var URL = "https://www.googleapis.com/youtube/v3/playlistItems";

    options = {
        part: 'snippet',
        key: key,
        maxResults: 20,
        playlistId: playlistId
    }

    loadVideos();

    function loadVideos() {
        $.getJSON(URL, options, function(data) {
        console.log(data.items[Math.floor(Math.random() * 10)].snippet.resourceId.videoId)
        console.log(data.items[Math.floor(Math.random() * 10)].snippet.title)
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
            //alert("hey")
            id = $(this).attr("data-link")
            mainVid(id)
        })


        })
    }

    function mainVid(id) {
        $("#video").html(`<iframe src="https://www.youtube.com/embed/${id}"
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
        picture-in-picture" allowfullscreen></iframe>`)
    }

    $("#btnSearch").on("click", function() {
        //alert("hey")
        citySearch()
    })

    function citySearch() {

    event.preventDefault();
    $(".musicPlaylist").empty();

    var country = ($("#current-search-country").val());

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + country + "&units=metric&appid=82c89536a936fdf2b3461ac6bec2669f";
    console.log(queryURL)
    console.log("weatherCondURL")
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var dayType = response.weather[0].id;
        var dayTemp = response.main.temp;
        $(".musicPlaylist").append();
        var uvBtn = $("<div>").text(dayType);
        $(".musicPlaylist").append(uvBtn);
        console.log(dayType)
        console.log(dayTemp)
        console.log(response)
        

        if (dayType < 299) {
            // If Weather ID 200 - 299: Thunder Playlist
            uvBtn.attr("class", "thunder");
            var key = "AIzaSyCMYhRU0xkLoW3OyabOnSyaEuf2yYPIR5s";
            var playlistId = "PLWgOL5UzMqBdan3rVNeBn9NEZNDs3MS4O";
            var URL = "https://www.googleapis.com/youtube/v3/playlistItems";

            options = {
                part: 'snippet',
                key: key,
                maxResults: 20,
                playlistId: playlistId
            }

            loadVideos();

            function loadVideos() {
                $.getJSON(URL, options, function(data) {
                console.log(data.items[Math.floor(Math.random() * 10)].snippet.resourceId.videoId)
                console.log(data.items[Math.floor(Math.random() * 10)].snippet.title)
                var id = data.items[Math.floor(Math.random() * 10)].snippet.resourceId.videoId
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
                    //alert("hey")
                    id = $(this).attr("data-link")
                    mainVid(id)
                })


                })
            }

            function mainVid(id) {
                $("#video").html(`<iframe src="https://www.youtube.com/embed/${id}"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
                picture-in-picture" allowfullscreen></iframe>`)
            }
            

            // FETCH PLAYLIST

        } else if (dayType < 399) {
            // If Weather ID 300 - 399: Drizzle Playlist
            uvBtn.attr("class", "drizzle");
            var key = "AIzaSyCMYhRU0xkLoW3OyabOnSyaEuf2yYPIR5s";
            var playlistId = "PLE7D59B222EDBC3B7";
            var URL = "https://www.googleapis.com/youtube/v3/playlistItems";

            options = {
                part: 'snippet',
                key: key,
                maxResults: 20,
                playlistId: playlistId
            }

            loadVideos();

            function loadVideos() {
                $.getJSON(URL, options, function(data) {
                console.log(data.items[Math.floor(Math.random() * 10)].snippet.resourceId.videoId)
                console.log(data.items[Math.floor(Math.random() * 10)].snippet.title)
                var id = data.items[Math.floor(Math.random() * 10)].snippet.resourceId.videoId
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
                    //alert("hey")
                    id = $(this).attr("data-link")
                    mainVid(id)
                })


                })
            }

            function mainVid(id) {
                $("#video").html(`<iframe src="https://www.youtube.com/embed/${id}"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
                picture-in-picture" allowfullscreen></iframe>`)
            }
            // FETCH PLAYLIST

        } else if (dayType < 599) {
            // If Weather ID 500 - 599: Rain Playlist
            uvBtn.attr("class", "rain");
            // FETCH PLAYLIST

        } else if (dayType < 699) {
            // If Weather ID 600 - 699: Snow Playlist
            uvBtn.attr("class", "snow");
            // FETCH PLAYLIST

        } else if (dayType < 799) {
            // If Weather ID 700 - 799: Hazy Playlist
            uvBtn.attr("class", "haze");
            // FETCH PLAYLIST

        } else if (dayType < 899 && dayTemp < 10) {
            // If Weather ID 800 - 899: Clear Playlist
            uvBtn.attr("class", "clear-cold");
            // FETCH PLAYLIST

        } else if (dayType < 899 && dayTemp < 25) {
            // If Weather ID 800 - 899: Clear Playlist
            uvBtn.attr("class", "clear-mild");
            var key = "AIzaSyCMYhRU0xkLoW3OyabOnSyaEuf2yYPIR5s";
    var playlistId = "PLE7D59B222EDBC3B7";
    var URL = "https://www.googleapis.com/youtube/v3/playlistItems";

    options = {
        part: 'snippet',
        key: key,
        maxResults: 20,
        playlistId: playlistId
    }

    loadVideos();

    function loadVideos() {
        $.getJSON(URL, options, function(data) {
        console.log(data.items[Math.floor(Math.random() * 10)].snippet.resourceId.videoId)
        console.log(data.items[Math.floor(Math.random() * 10)].snippet.title)
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
            //alert("hey")
            id = $(this).attr("data-link")
            mainVid(id)
        })


        })
    }

    function mainVid(id) {
        $("#video").html(`<iframe src="https://www.youtube.com/embed/${id}"
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
        picture-in-picture" allowfullscreen></iframe>`)
    }

            // FETCH PLAYLIST

        } else if (dayType < 899 && dayTemp < 35) {
            // If Weather ID 800 - 899: Clear Playlist
            uvBtn.attr("class", "clear-warm");
            // FETCH PLAYLIST

        } else {
            // If Weather ID 800 - 899: Clear Playlist
            uvBtn.attr("class", "clear-hot");
            // FETCH PLAYLIST

        }
        });
    }
    
    


})