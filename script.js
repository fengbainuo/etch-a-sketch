const container = document.getElementById('container');

let cols = 16;

let color = "black";

container.style.cssText = `grid-template-columns: repeat(${cols}, ${getSizes(cols)}px)`;

generateGrid(cols, getSizes(cols));

document.getElementById('colorPicker').oninput = function(e) {
    color = e.target.value;
};

document.getElementById('clear').onclick = function() {
    document.querySelectorAll('.col').forEach( (item) => {
        item.style.backgroundColor = "white";
    });
};

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
    container.style.cssText = `grid-template-columns: repeat(${cols}, ${getSizes(cols)}px [col-start])`;
    generateGrid(cols, getSizes(cols));
};

document.getElementById('colorChange').onclick = function() {
    color = prompt("Choose an alternative color");
};

function getSizes(x) {
    return 400 / x
}

function generateGrid(cols, size) {
    for (let i = 0; i < cols*cols; i++) {
        const col = document.createElement('div');
        col.classList.add('col');
        col.setAttribute('id', `col${i+1}`);
        col.onmouseover = function(e) {
            if (e.buttons == 1 || e.buttons == 3) {
                col.style.backgroundColor = color;
            }
        };
        col.style.cssText = `width: ${size}px; min-height: ${size}px; clear:both`;
        container.appendChild(col);
    }
}