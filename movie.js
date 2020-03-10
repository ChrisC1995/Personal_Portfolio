//5
function cardMaker (movieResult) {

    var template = $("#tempDiv").html();

    template = template.replace("@@NAME@@", movieResult.title);
    template = template.replace("@@NAME2@@", movieResult.year);
    template = template.replace("@@RATING@@", movieResult.rating);
    template = template.replace("@@SUMMARY@@", movieResult.plot);
    template = template.replace("@@LINK@@", movieResult.trailer);
    template = template.replace("@@RUNTIME@@", movieResult.length);

    return template; 
}



// 1
function lookupMovieByTitle() {
	$("#gif").remove();
    var movieTitle = $("#postalCode").val();
    var imdb_key = config.imdb_key;
    
    var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/"+ movieTitle,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
		"x-rapidapi-key": imdb_key
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
	lookUpMovie_complete(response)
});
}


//4

function lookUpMovie_complete(response){
    
    console.log(response)
    var movieResult = {
        title: response.title,
        year: response.year,
        length: response.length,
        rating: response.rating + "/10",
        plot: response.plot,
        trailer: response.trailer.link,
        poster: response.poster
        

    };
    console.log(movieResult);

    var html = cardMaker(movieResult);
    $("#cards").append(html);
    $("#background").css("background-image", "url(" + movieResult.poster + ")");



    
};



// document ready 

$(function () {
    $("#buttonLookUpZip").on("click", lookupMovieByTitle);
    $("#tempDiv").hide();
    $(document).on("click", "#removeB", function(){
        $(this).parent("#remove").fadeOut();
    });
});



