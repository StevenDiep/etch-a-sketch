# etch-a-sketch
Thoughts: Going to attempt this project in a 3-step process. First, I'm going to lay out the grid. Second, I'm going to add the hover effect and finally I would set up the user input that would allow an arbritary A x A grid where A is the user input.

Part one: Setting up the grid was smooth, though you have to create a new div for each individual grid square (thought you could get away with just creating one and appending x amount of times to save time). Initially flexed the body but you should be able to just flex the main container if the dimensions are set to the webpage.

Part two: Initially, I used querySelector(".grid") hoping that it would identify all of the squares in the class. However, the approach that worked in the end was using the querySelectorAll method and then using a for loop to loop through each individual square and add eventListeners to all of them. The approach works, though it seems slow and I'm wondering if there's a better solution out there. The type of event listener is mouseleave and I still need to wrap my head around the syntax for (event) =>)

Part three: Had to change up the createSquareDiv function to include div.style.setProperty('width', `calc(960px/${gridSize})`) so that the pixels used would stay the same regardless of the input. Not sure if I reset the board correctly. I used mainDiv.innerHTML = "" which works, but not sure if that is the optimal solution. Will also have to go back and fix up the user prompt to handle incorrect input. 

Going forward: Make sure you did part two correctly with the for loop. Then look into making sure you did part three optimally with innerHTML = "". Then make sure the user input for the prompt handles the edge cases well.
