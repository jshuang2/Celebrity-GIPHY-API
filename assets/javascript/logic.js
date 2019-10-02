//Create an array that will hold the list of celebrities
var celebrities = ["leonardo dicaprio", "carey mulligan", "tom hardy", "shailene woodley"]

//Create a function that will add gifs to the html via the API when buttons are clicked
function displayCelebGif() {
    var thisCeleb = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + thisCeleb + "&api_key=GnKyD9C3X7IDAdHB6lUZKXonzOyYEYwK&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            
            var gifDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var gifImage = $("<img>");

            /*My attempt at creating an if statement that checks whether there are gifs already populated. If so, then empty all content
            
            if ($(this).length > 0) {
                $(this).empty();
            }

            */
            
            gifImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.append(p);
            gifDiv.append(gifImage);
            
            gifDiv.attr("class", "gifDiv");
            gifImage.attr("data-animate", results[i].images.fixed_height.url);
            gifImage.attr("data-still", results[i].images.fixed_height_still.url);
            gifImage.attr("data-state", "animate");

            $("#celebrity-view").prepend(gifDiv);
        }
    });
}


//On click, run a function that changes the state of the gif depending on which state it's already in.
$("img").on("click", function() {
    var state = $(this).attr("data-state");

    if (state === "animate") {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
    else {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }
});



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


/*

Bugs:
1. addCelebrity and renderButtons function is not actually rendering buttons when submitting new celebrities into the form
2. click event listener is not changing the state of gifs

*/