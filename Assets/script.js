$(document).ready()

function citySearch() {

    event.preventDefault();
    $(".musicPlaylist").empty();

    var zip = ($("#current-search-zip").val());
    var country = ($("#current-search-country").val());

    var weatherCondURL = "api.openweathermap.org/data/2.5/weather?zip=" + zip + "," + country;
    console.log(weatherCondURL)
    $.ajax({
        url: weatherCondURL,
        method: "GET"
    }).then(function (response) {
        var dayType = response.id;
        var dayTemp = response.main.temp;
        $(".musicPlaylist").append();
        var uvBtn = $("<div>").text(dayType);
        $(".musicPlaylist").append(uvBtn);

        if (dayType < 299) {
            // If Weather ID 200 - 299: Thunder Playlist
            uvBtn.attr("class", "thunder");
            // FETCH PLAYLIST

        } else if (dayType < 399) {
            // If Weather ID 300 - 399: Drizzle Playlist
            uvBtn.attr("class", "drizzle");
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