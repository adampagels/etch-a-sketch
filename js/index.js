let container = document.querySelector('#container');

const newGridButton = document.createElement('button')
newGridButton.addEventListener('click', createNewGrid)
newGridButton.classList.add('grid-button');
container.appendChild(newGridButton);

const randomColorButton = document.createElement('button')
randomColorButton.addEventListener('click', getRandomColor)
randomColorButton.classList.add('grid-button');
container.appendChild(randomColorButton);

let gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
container.appendChild(gridContainer);

function clearBox() {
    gridContainer.innerHTML = "";
}

function createGrid() {
    for (i = 0; i < 256; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridContainer.appendChild(gridSquare);
        gridSquare.style.cssText = 'height: 6%; width: 6%';
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.classList.add('hover');
        });
    }
}

function createNewGrid() {
    clearBox();
    let userInput = Number(prompt('Select new grid size', 'Example: "64"'));
    if (userInput < 1) {
        createGrid();
        alert('Please enter a number greater than 0');
    } else if (!isNaN(userInput)) {
        let squareDimensions = (100 / userInput)
        for (i = 0; i < (userInput * userInput); i++) {
            const gridSquare = document.createElement('div')
            gridSquare.classList.add('grid-square')
            gridContainer.appendChild(gridSquare)
            gridSquare.style.cssText = `height: ${squareDimensions}%;
        width: ${squareDimensions}%;`
            gridSquare.addEventListener('mouseover', () => {
                gridSquare.classList.add('hover');
            });
        }
    } else {
        createGrid();
        alert('Please enter a number');
    }
}

function getRandomColor(event) {
    let gridSquare = event.target;
    gridContainer.addEventListener('mouseover', getRandomColor);
    let red = Math.floor((Math.random() * 256) + 1);
    let green = Math.floor((Math.random() * 256) + 1);
    let blue = Math.floor((Math.random() * 256) + 1);
    return gridSquare.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

createGrid();
