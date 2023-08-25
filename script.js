const container = document.getElementById('container');

let cols = 16;
getSizes(cols);

let color = "black";

container.style.cssText = `grid-template-columns: repeat(${cols}, ${width}px [col-start])`;

generateGrid(cols, height, width);

document.getElementById('visibleGrid').onclick = function() {
    document.querySelectorAll('.col').forEach( (item) => {
        item.classList.toggle('grid');
    });
};

document.getElementById('size').onclick = function() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
    cols = prompt("Enter the number of blocks in a row!");
    getSizes(cols);
    container.style.cssText = `grid-template-columns: repeat(${cols}, ${width}px [col-start])`;
    generateGrid(cols, height, width);
};

document.getElementById('colorChange').onclick = function() {
    color = prompt("Choose an alternative color");
};

function getSizes(x) {
    height = 400/x;
    width = 400/x;
};

function generateGrid(cols, height, width) {
    for (let i = 0; i < cols*cols; i++) {
        const col = document.createElement('div');
        col.classList.add('col');
        col.setAttribute('id', `col${i+1}`);
        col.onmouseover = function(e) {
            if (e.buttons == 1 || e.buttons == 3) {
                col.style.backgroundColor = color;
            };
        };
        col.style.cssText = `width: ${width}px; min-height: ${height}px; clear:both`;
        container.appendChild(col);
    };
}