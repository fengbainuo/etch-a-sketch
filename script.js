const container = document.getElementById('container');

const cols = 16;
const height = 400/cols;
const width = 400/cols;

container.style.cssText = `grid-template-columns: repeat(${cols}, ${width}px [col-start])`;

for (let i = 0; i < cols*cols; i++) {
    const col = document.createElement('div');
    col.classList.add('col');
    col.getAttribute('id', `col${i+1}`);
    col.style.cssText = `width: ${width}px; min-height: ${height}px; clear:both`;
    container.appendChild(col);
};