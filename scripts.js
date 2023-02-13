const grid = document.querySelector(".grid-container");
for(let i = 0; i < 16 * 16; ++i)
{
    let cell = document.createElement("div");
    cell.classList.add("grid-cell");
    grid.appendChild(cell);
}
let style = "1fr" + " 1fr".repeat(15);
grid.style.gridTemplateColumns = style;