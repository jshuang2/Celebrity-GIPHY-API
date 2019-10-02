//Create an array that will hold the list of celebrities
var celebrities = ["leonardo dicaprio", "carey mulligan", "tom hardy", "shailene woodley"]

//Create a function that will add gifs to the html via the API when buttons are clicked
function displayCelebGif() {
    var thisCeleb = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + thisCeleb + "&api_key=GnKyD9C3X7IDAdHB6lUZKXonzOyYEYwK&limit=20";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        var results = response.data;

        for(var i = 0; i < results.length; i++) {
            
            var gifDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var gifImage = $("<img>");

            gifImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.append(p);
            gifDiv.append(gifImage);

            gifDiv.attr("class", "gifDiv");

            $("#celebrity-view").prepend(gifDiv);
        }
    });
}



//Create a function that will render buttons
function renderButtons() {
    $("#buttons-view").empty();

    for (var i = 0; i < celebrities.length; i++) {
        var button = $("<button>");

        button.addClass("celeb-button");
        button.attr("data-name", celebrities[i]);
        button.text(celebrities[i]);
        $("#buttons-view").append(button);
    }
}

//Create a function that will take an event, push a new celebrity to the celebrities array, and create a button for it.
function addCelebrity() {
    $("#add-celebrity").on("click", function(event) {
        event.preventDefault();

        var celeb = $("#celebrity-input").val().trim();
        
        celebrities.push(celeb);
        console.log(celebrities);

        renderButtons();
    });
}

$(document).on("click", ".celeb-button", displayCelebGif);

renderButtons();