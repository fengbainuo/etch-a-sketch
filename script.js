const container = document.getElementById('container');

let cols = 16;
let height = 400/cols;
let width = 400/cols;

container.style.cssText = `grid-template-columns: repeat(${cols}, ${width}px [col-start])`;

for (let i = 0; i < cols*cols; i++) {
    const col = document.createElement('div');
    col.classList.add('col');
    col.setAttribute('id', `col${i+1}`);
    col.onmouseover = function(e) {
        if (e.buttons == 1 || e.buttons == 3) {
            col.classList.add('colored');
        };
    };
    col.style.cssText = `width: ${width}px; min-height: ${height}px; clear:both`;
    container.appendChild(col);
};

document.getElementById('size').onclick = function() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
    cols = prompt("Enter the number of blocks in a row!");
    height = 400/cols;
    width = 400/cols;
    container.style.cssText = `grid-template-columns: repeat(${cols}, ${width}px [col-start])`;
    for (let i = 0; i < cols*cols; i++) {
        const col = document.createElement('div');
        col.classList.add('col');
        col.setAttribute('id', `col${i+1}`);
        col.onmouseover = function(e) {
            if (e.buttons == 1 || e.buttons == 3) {
                col.classList.add('colored');
            };
        };
        col.style.cssText = `width: ${width}px; min-height: ${height}px; clear:both`;
        container.appendChild(col);
    };
};