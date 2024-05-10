function createGrid(mainDiv, gridSize){
    for (let i = 0; i<gridSize; i++){
        const rowDiv = document.createElement("div")
        rowDiv.classList.add("row")

        for (let j = 0; j<gridSize; j++){
            const div = document.createElement("div");
            div.style.color = "blue";
            div.classList.add("grid");
            rowDiv.appendChild(div)
        }
        mainDiv.appendChild(rowDiv)
        
    }


}

const container = document.querySelector("#mainDiv");
createGrid(container, 16)

