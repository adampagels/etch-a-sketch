let container = document.querySelector('#container');

let gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
container.appendChild(gridContainer);

function createGrid() {
    for (i = 0; i < 256; i++) {
        const gridSquare = document.createElement('div')
        gridSquare.classList.add('grid-square')
        gridContainer.appendChild(gridSquare);
        gridSquare.style.cssText = 'height: 6%; width: 6%'
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.classList.add('hover');
        });
    }
}

function createNewGrid() {
    let userInput = Number(prompt('Select new grid size', 'Example: "64"'))
    console.log(typeof userInput);
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

createGrid();