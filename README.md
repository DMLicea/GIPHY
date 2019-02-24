# GIPHY

* The objective of the assignment is to use the GIPHY API to make a dynamic web page that populates with gifs of your choice. Youll need to use the GIPHY API and use JavaScript and jQuery to change the HTML of your site. The parameters of this assignment is to create buttons that can generate GIFs, to allow the user to activate and deactivate the animation of the GIFs, and to allow the user to generate new buttons based on their topic of choice.


* First, I did simple html/css. I used jQuery and Bootstrap.

* I then made an array themed around food.

* Seperated my HTML into three main containers: the div for the buttons, the div for the gifs, the div for the submission form.


* Function that creates buttons: 


* * First, a function that empties the button container.


* * Then I made a for loop based on the topics array and assigned the variable of "gifButton" to it. 

* * Then I assigned attributes such as classes (.addClass) and text (.text).

* * Lastly I appended the variable of gifButton to the mybuttons container.


* Function for displaying GIFs:


* * 1. Make a function that empties the container where the GIFs appear.

* * 2. Make "food" and "queryURL" variables.

* * 3. Make your AJAX function and response function.

* * * (add an if statement with an alert in case there's no results)

* * 4. New for loop with variables of "gifDiv" "gifItself" and "gifRating."

* * * gifDiv - addClass
* * * gifRating - .text, append to gifDiv
* * * gifItself - .attr, append to gifDiv


* Function for activating/deactivating GIF animation:


* * Make "state" variable

* * If/else function based on the state variable


* Function to create buttons based on user input


* * Create a submission form

* * Create function

* * Create eventdefault to prevent accidental activation

* * Create new variable based on id of the submission form along with the .val and .trim functions

* * Use .push function to push that new variable into your topic array.

* * Add the function you used to create buttons to create a new button based on user input.

* https://dmlicea.github.io/GIPHY/
