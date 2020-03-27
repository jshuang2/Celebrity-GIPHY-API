## Celebrity-GIPHY-API

A web app that manipulates the GIPHY API to display GIFs of a celebrity via user input. Users can either click the pre-populated buttons or create an entirely new button by querying the search form.

View the application at: <b><a href="https://jshuang2.github.io/Celebrity-GIPHY-API/" target="_blank">https://jshuang2.github.io/Celebrity-GIPHY-API/</a></b>

### Technologies Used
- JavaScript, HTML, CSS
- jQuery
- Bootstrap

## How it works

1. Upon loading the page, users see a simple interface with four buttons with pre-populated celebrity names.

2. If a user clicks one of these buttons, GIFs provided from GIPHY's public API will dynamically populate on the screen (The current GIF limit per click is set to 10).

3. A user can click a GIF to pause/play if they so choose.

4. A user can use the search bar in the top right corner to search for a celebrity. This will render a new button that, upon click, will display GIFs for that celebrity. In the backend, this adds the user input value to an array and renders a button.

#### Search for and play GIFs of your favorite celebrities

![Celebrity-Giphy](https://user-images.githubusercontent.com/52802240/77808089-5ccab980-7047-11ea-9304-3592cdfc4823.gif)

---

## Reflection

When I built this project, I learned so much about how valuable APIs are for building web applications. A lot of times as developers, we don't have the data readily available to us internally, so it's nice that there's outside data that we can grab if we need it.

One issue the app currently has is that technically a user can use this app to search for anything even if it's not related to a celebrity. To fix this in the future, I plan on adding a validation checker that will only allow celebrity searches. This might require the use of another API that has a database of celebrities.

View the application at: <b><a href="https://jshuang2.github.io/Celebrity-GIPHY-API/" target="_blank">https://jshuang2.github.io/Celebrity-GIPHY-API/</a></b>



