function generateGrid(rowsAndColumns, sizeInPixels) {
    for(let i = 0; i < rowsAndColumns * rowsAndColumns; ++i)
    {
        let cell = document.createElement("div");
        cell.classList.add("grid-cell");
        grid.appendChild(cell);
    }
    let style = `${sizeInPixels}px` + ` ${sizeInPixels}px`.repeat(rowsAndColumns - 1);
    grid.style.gridTemplateColumns = style;
    grid.style.gridTemplateRows = style;
}

function initializeHoverEvent() {
    const cells = document.querySelectorAll(".grid-cell");
    cells.forEach((cell) => {
        let r = Math.floor(Math.random() * 1000) % 256;
        let g = Math.floor(Math.random() * 1000) % 256;
        let b = Math.floor(Math.random() * 1000) % 256;
    
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = `rgb(${r},${g},${b})`;
        });
    });
}

function setupNewGrid() {
    let input = parseInt(prompt("Enter new grid size."));
    if(isNaN(input) || input <= 0) { return; }
    if(input > 100) { input = 100; }


    body.removeChild(grid);
    let newGrid = document.createElement("div");
    newGrid.classList.add("grid-container");
    grid = newGrid;
    body.appendChild(grid);

    generateGrid(input, gridSize / input);
    initializeHoverEvent();
}

const button = document.querySelector("button");
button.addEventListener("click", setupNewGrid);

const body = document.querySelector("body");
let grid = document.querySelector(".grid-container");
let initialColumns = 16, initialPixels = 35;
const gridSize = initialColumns * initialPixels;
generateGrid(initialColumns, initialPixels);
initializeHoverEvent();