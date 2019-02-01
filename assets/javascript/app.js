//api key: cfCFSqVgECgfroxCS4uPJIM3PUo7BZSA

$(document).ready(function() {

//array

var topics = ["steak", "sushi", "apple", "coffee", "tea", "soda", "cake"]

//functions

function createButtons()

    {

        $("#mybuttons").empty();

            for (var i = 0; i < topics.length; i++)
    
            {

                var gifButton = $("<button>");

                    gifButton.addClass("btn btn-dark btn-lg")
                    gifButton.attr("data-name", topics[i]);
                    gifButton.attr("id", "food");
                    gifButton.text(topics[i]);

                    $("#mybuttons").append(gifButton);

            }

    }

function createGifs()

    {
        $("#mygifs").empty();

        
    
        var urlfuud = $(this).attr("data-name");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" 
            + urlfuud 
            + "&api_key=cfCFSqVgECgfroxCS4uPJIM3PUo7BZSA&limit=10";
    
        $.ajax(
            
        { 
            
            url: queryURL, 
            method: "GET"
    
        }).done(
         
        
    function(response) 
     
        {
    
        var results = response.data

        if (results == "")

            {
                alert("Sorry, we're out of this ingredient!");
            }
            
        else 
        
            {
                alert("Order up!")
            }

        for (var j = 0; j < results.length; j++)
    
            {

            var gifDiv = $("<div>");
            
                gifDiv.addClass("gifDiv");

            var gifItself = $("<img>");

                gifItself.attr("src", results[j].images.fixed_height_small_still.url);
                gifItself.attr("data-still", results[j].images.fixed_height_small_still.url);
                gifItself.attr("data-animate", results[j].images.fixed_height_small.url);
                gifItself.attr("id", "gifid");
                gifItself.attr("data-state", "still");
                gifItself.addClass("image");
        
                gifDiv.append(gifItself);

            var gifRating = $("<p>").text("Rating: " + results[j].rating);
            
                gifDiv.append(gifRating);

            $("#mygifs").prepend(gifDiv);

            console.log(queryURL);

            } 

        });
        
    }

function activateGifs() 

    {
    
        var state = $(this).attr("data-state");
    
        if (state === "still") 
        
        {
            $(this).attr("src", $(this).attr("data-animate"));
                
            $(this).attr("data-state", "animate");

            alert("Please be patient, your order may need time to warm up!")

        }
    
        else 
        
        {
            $(this).attr("src", $(this).attr("data-still"));
                
            $(this).attr("data-state", "still");
    
        }   
    
}

function newButton()

    {
        event.preventDefault();

        var newfood = $("#fd").val().trim();

        topics.push(newfood);
            
        createButtons();

        alert("Your request is now on the menu!")

        console.log(newfood)


     }



//click functions

$(document).on("click", "#food", createGifs);

$(document).on("click", "#gifid", activateGifs);

$(document).on("click", "#submit", newButton);


// run function upon opening page

createButtons();

     
});

//end

