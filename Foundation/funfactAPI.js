var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://joke3.p.rapidapi.com/v1/joke",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "joke3.p.rapidapi.com",
		"x-rapidapi-key": "d214349457msh4ab643aaf0cc300p165c68jsn3e76b0a5efd3"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://dad-jokes.p.rapidapi.com/random/jokes",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "dad-jokes.p.rapidapi.com",
		"x-rapidapi-key": "d214349457msh4ab643aaf0cc300p165c68jsn3e76b0a5efd3"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://jokes-database.p.rapidapi.com/",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "jokes-database.p.rapidapi.com",
		"x-rapidapi-key": "d214349457msh4ab643aaf0cc300p165c68jsn3e76b0a5efd3"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});