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
    }
}

createGrid();