console.log("hello world!");

let numberGridSize;
const gridSizeBtn = document.getElementById('grid-size-btn');
const gridSize = 16 * 16;
console.log(gridSize);
const container = document.getElementById('main-container');
const pixel = document.createElement('div');
const pixelSize = 20;
let pixelArray = [];

// container.style.width = '400px'

gridSizeBtn.addEventListener('click', pickSize);


function pickSize() {
    const userGridSize = prompt("Please enter a value for Grid Size between 8 and 100 ");
    numberGridSize = Number(userGridSize);

    console.log(typeof userGridSize);
    if (numberGridSize < 8 || numberGridSize > 100) {
        alert("Opps pick a size between 8 and 100");
        pickSize();
    } else if (isNaN(numberGridSize)) {
        alert("You didn't enter a number");
        pickSize();
    }

    console.log(numberGridSize);
}

function createGrid() {
    container.style.width = `${(Math.sqrt(gridSize) * pixelSize) + 32}px`
    console.log(container.style.width);
    for (let i = 0; i < gridSize; i++) {
        let pixel = document.createElement('div');
        pixel.setAttribute('style', 'width: 20px; height: 20px; border: .5px solid #eaeaea');
        pixelArray.push(pixel);
        container.appendChild(pixel);
    }
}

createGrid();

function etchSketch() {
    pixelArray.forEach(pixel => {
        pixel.addEventListener('mouseover', () => {
            console.log("pixel hover");
            pixel.style.backgroundColor = "red";
        })
    })
}

etchSketch();