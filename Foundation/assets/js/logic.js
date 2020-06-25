
$(document).ready(function() {

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
        for (i = 0; i < 10; i++) {
            var playlistItem = $("<button>");
            playlistItem.html(data.items[i].snippet.title)
            playlistItem.attr("data-index", i)
            playlistItem.attr("class", "playlist-song")
            playlistItem.attr("data-link", data.items[i].snippet.resourceId.videoId)
            $("#playlist-list").append(playlistItem)
        }

        mainVid(id);

        $(".playlist-song").on("click", function() {
            alert("hey")
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


    $('[data-app-dashboard-toggle-shrink]').on('click', function(e) {
        e.preventDefault();
        $(this).parents('.app-dashboard').toggleClass('shrink-medium').toggleClass('shrink-large');
      });
    


})