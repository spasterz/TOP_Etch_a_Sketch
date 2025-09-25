console.log("hello world!");

let numberGridSize;
const gridSizeBtn = document.getElementById('grid-size-btn');
const clearSquaresBtn = document.getElementById('clear-squares-btn');
const gridSize = 16;
// console.log(gridSize);
const container = document.getElementById('main-container');
const uiContainer = document.getElementById('ui-container')
const pixel = document.createElement('div');
const pixelSize = 20;
let pixelArray = [];

// container.style.width = '400px'

gridSizeBtn.addEventListener('click', pickSize);

clearSquaresBtn.addEventListener('click', () => {
    pixelArray.map(item => {
        item.style.backgroundColor = "white";
    })
})

function pickSize() {
    container.replaceChildren();
    pixelArray = [];
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

    createGrid(numberGridSize);
}

function pickRandomColor() {
    let max = 235;
    return `rgb(${Math.floor(Math.random() * max)}, ${Math.floor(Math.random() * max)}, ${Math.floor(Math.random() * max)})`
}

function createGrid(gridSize) {
    console.log(gridSize);
    container.style.width = `${gridSize * pixelSize + 2}px`
    uiContainer.style.width = container.style.width;
    console.log(container.style.width);
    for (let i = 0; i < gridSize * gridSize; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixelArray.push(pixel);
        container.appendChild(pixel);
        // pixelArray.map(item => {
        //     if (pixelArray.indexOf(item) < gridSize) {
        //         item.innerText = "x"
        //     }
        // })
    }

    etchSketch();
}

createGrid(gridSize);

function etchSketch() {
    pixelArray.forEach(pixel => {
        pixel.addEventListener('mouseover', () => {
            console.log("pixel hover");
            if (pixel.classList.contains('active')) {
                if (pixel.style.opacity< 1) {
                    pixel.style.opacity = `${Number(pixel.style.opacity) + .25}`;
                    console.log(pixel.style.opacity)
                }
            } else {
                pixel.classList.add('active');
            }
            pixel.style.backgroundColor = pickRandomColor();
        })
    })
}
