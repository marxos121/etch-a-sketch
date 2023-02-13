const grid = document.querySelector(".grid-container");
for(let i = 0; i < 16 * 16; ++i)
{
    let cell = document.createElement("div");
    cell.classList.add("grid-cell");
    grid.appendChild(cell);
}
let style = "1fr" + " 1fr".repeat(15);
grid.style.gridTemplateColumns = style;

const cells = document.querySelectorAll(".grid-cell");
cells.forEach((cell) => {
    let r = Math.floor(Math.random() * 1000) % 256;
    let g = Math.floor(Math.random() * 1000) % 256;
    let b = Math.floor(Math.random() * 1000) % 256;

    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = `rgb(${r},${g},${b})`;
    });
});