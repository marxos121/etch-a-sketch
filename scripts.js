const body = document.querySelector("body");
const grid = document.querySelector(".grid-container");

function generateGrid(rowsAndColumns, size)
{
    for(let i = 0; i < rowsAndColumns * rowsAndColumns; ++i)
    {
        let cell = document.createElement("div");
        cell.classList.add("grid-cell");
        grid.appendChild(cell);
    }
    let style = `${size}px` + ` ${size}px`.repeat(rowsAndColumns - 1);
    grid.style.gridTemplateColumns = style;
    grid.style.gridTemplateRows = style;
}

generateGrid(16, 35);


const cells = document.querySelectorAll(".grid-cell");
cells.forEach((cell) => {
    let r = Math.floor(Math.random() * 1000) % 256;
    let g = Math.floor(Math.random() * 1000) % 256;
    let b = Math.floor(Math.random() * 1000) % 256;

    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = `rgb(${r},${g},${b})`;
    });
});


const button = document.querySelector("button");
button.addEventListener("click", () => {
    let input = parseInt(prompt("Enter new grid size."));
    if(input <= 0) { return; }
    if(input > 100) { input = 100; }
    
    let totalWidth = grid.style.width;
    let totalHeight = grid.style.height;

    let newGrid = document.createElement("div");
    newGrid.classList.add("grid-container");
    
    let cellWidth = totalWidth / input;
    let cellHeight = totalHeight / input;
    newGrid.style.gridTemplateColumns = cellWidth + ` ${cellWidth}px`.repeat(input - 1);
    newGrid.style.gridTemplateRows = cellHeight + ` ${cellHeight}px`.repeat(input - 1);


    body.removeChild(grid);
    grid = newGrid;
    body.appendChild(grid);
})