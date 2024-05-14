# etch-a-sketch
Thoughts: Going to attempt this project in a 3-step process. First, I'm going to lay out the grid. Second, I'm going to add the hover effect and finally I would set up the user input that would allow an arbritary A x A grid where A is the user input.

Part one: Setting up the grid was smooth, though you have to create a new div for each individual grid square (thought you could get away with just creating one and appending x amount of times to save time). Initially flexed the body but you should be able to just flex the main container if the dimensions are set to the webpage.

Part two: Initially, I used querySelector(".grid") hoping that it would identify all of the squares in the class. However, the approach that worked in the end was using the querySelectorAll method and then using a for loop to loop through each individual square and add eventListeners to all of them. The approach works, though it seems slow and I'm wondering if there's a better solution out there. The type of event listener is mouseleave and I still need to wrap my head around the syntax for (event) =>)
