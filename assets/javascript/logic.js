//Create an array that will hold the list of celebrities
var celebrities = ["leonardo dicaprio", "carey mulligan", "tom hardy", "shailene woodley"]

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

function addCelebrity() {
    $("#add-celebrity").on("click", function(event) {
        event.preventDefault();
    })
}
renderButtons();