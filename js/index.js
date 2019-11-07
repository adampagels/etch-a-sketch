let container = document.querySelector('#container');

const newGridButton = document.createElement('button');
newGridButton.addEventListener('click', createNewGrid);
newGridButton.classList.add('grid-button');
container.appendChild(newGridButton);
newGridButton.textContent = 'Resize grid';

const randomColorButton = document.createElement('button');
randomColorButton.addEventListener('click', getRandomColor);
randomColorButton.classList.add('grid-button');
container.appendChild(randomColorButton);
randomColorButton.textContent = 'Let\'s get funky!';

const blackOnHoverButton = document.createElement('button');
blackOnHoverButton.addEventListener('click', makeSquareBlack);
blackOnHoverButton.classList.add('grid-button');
container.appendChild(blackOnHoverButton);
blackOnHoverButton.textContent = 'Back to black';

const eraserButton = document.createElement('button');
eraserButton.addEventListener('click', eraseBackgroundColor);
eraserButton.classList.add('grid-button');
container.appendChild(eraserButton);
eraserButton.textContent = 'Eraser';

let gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
container.appendChild(gridContainer);

function clearGrid() {
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
    clearGrid();
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
    gridContainer.removeEventListener('mouseover', eraseBackgroundColor);
    gridContainer.removeEventListener('mouseover', makeSquareBlack);
    gridContainer.addEventListener('mouseover', getRandomColor);
    let red = Math.floor((Math.random() * 256) + 1);
    let green = Math.floor((Math.random() * 256) + 1);
    let blue = Math.floor((Math.random() * 256) + 1);
    return gridSquare.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

function makeSquareBlack(event) {
    let gridSquare = event.target;
    gridContainer.removeEventListener('mouseover', eraseBackgroundColor);
    gridContainer.removeEventListener('mouseover', getRandomColor);
    gridContainer.addEventListener('mouseover', makeSquareBlack);
    return gridSquare.style.backgroundColor = 'black';
}

function eraseBackgroundColor(event) {
    let gridSquare = event.target;
    gridContainer.removeEventListener('mouseover', makeSquareBlack);
    gridContainer.removeEventListener('mouseover', getRandomColor);
    gridContainer.addEventListener('mouseover', eraseBackgroundColor);
    return gridSquare.style.backgroundColor = 'white';
}

createGrid();
