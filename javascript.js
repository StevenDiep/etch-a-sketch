function createSquareDiv(gridSize){
    const div = document.createElement("div");
    div.style.backgroundColor = "black";
    div.style.color = "blue";
    div.style.setProperty('width', `calc(960px/${gridSize})`)
    div.style.setProperty('height', `calc(600px/${gridSize})`)
    div.classList.add("grid");

    return div
}
function addHoverEffect(){
    let squareList = document.querySelectorAll(".grid")
    for (let i =0;i< squareList.length;i++){
        squareList[i].addEventListener("mouseleave", (event)=>{
            squareList[i].style.backgroundColor = "yellow";
        });
    }
}
function createGrid(mainDiv, gridSize){
    for (let i = 0; i<gridSize; i++){
        const rowDiv = document.createElement("div")
        rowDiv.classList.add("row")

        for (let j = 0; j<gridSize; j++){
            const div = createSquareDiv(gridSize)
            rowDiv.appendChild(div)
        }
        mainDiv.appendChild(rowDiv)
    }
    addHoverEffect()
}

function resetBoard(){
    let gridSize = prompt("Please enter a grid size", 64);
    if (gridSize == null || gridSize == ""){
        gridSize = 64;
    }
    else if (gridSize > 100){
        gridSize = 100;
    }

    const mainDiv = document.querySelector("#mainDiv");
    mainDiv.innerHTML = "";

    createGrid(mainDiv, gridSize);


}
const container = document.querySelector("#mainDiv");
createGrid(container, 16)



