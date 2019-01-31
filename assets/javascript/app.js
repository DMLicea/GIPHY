//api key: cfCFSqVgECgfroxCS4uPJIM3PUo7BZSA

$(document).ready(function() {
 

// 1. create an array of strings

var topics = ["Steak", "Sushi", "Apple", "Coffee", "Tea", "Soda", "Cake", "Pie"]



//Your app should take the topics in this array and create buttons in your HTML.
// Try using a loop that appends a button for each string in the array.

function createButtons(){

    $("#mybuttons").empty();

    for (var i = 0; i < topics.length; i++){

    var gifButton = $("<button>");
        gifButton.addClass("btn btn-dark btn-lg")
        gifButton.attr("data-name", topics[i]);
        gifButton.text(topics[i]);
        gifButton.on("click", function(){

            alert("test")
            
            var food = $(this).attr("data-food");
            
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=cfCFSqVgECgfroxCS4uPJIM3PUo7BZSA&limit=10";
            
            $.ajax({ 

                url: queryURL, 
                method: "GET"
            
             })
            
            $("#mygifs").empty();

            var results = response.data

            if (results == ""){

            alert("There isn't a gif for this selected button");

            }

            for (var i=0; i< results.length; i++){

                var gifDiv = $("<div>");
                    
                    gifDiv.addClass("gifDiv");

                var gifRating = $("<p>").text("Rating: " + results[i].rating);
                    
                    gifDiv.append(gifRating);

                var gifImage = $("<img>");

                    gifImage.attr("src", results[i].images.fixed_height_small_still.url);
                    gifImage.attr("data-still",results[i].images.fixed_height_small_still.url);
                    gifImage.attr("data-animate",results[i].images.fixed_height_small.url);
                    gifImage.attr("data-state", "still");
                    gifImage.addClass("image");
                    gifDiv.append(gifImage);


                $("#mygifs").prepend(gifDiv);

                    } 
                
                

        console.log(queryURL);


});

//button press

$("#mybuttons").append(gifButton);

}

//for var

}
// for create buttons


createButtons();
     
});

