const slider = document.querySelector('#slider');
slider.addEventListener('input', ()=>{
    createGrid(slider.value)
    document.querySelector('#gridSize').textContent = `${slider.value}x${slider.value}`;
});


const colorPicker = document.querySelector('#colorPicker')
let mouseState = false;

const colorModeButton = document.querySelector('#colorModeButton')
const rainbowModeButton = document.querySelector('#rainbowModeButton')
const eraserModeButton = document.querySelector('#eraserModeButton')
const clearButton = document.querySelector('#clearButton')
let buttonMode = 1;

colorModeButton.addEventListener('click', ()=>{
    buttonMode = 1;
    colorModeButton.style.cssText = 'background-color: black; color: white;';
    rainbowModeButton.style.cssText = 'background-color: white; color: black;';
    eraserModeButton.style.cssText = 'background-color: white; color: black;';
})

rainbowModeButton.addEventListener('click', ()=>{
    buttonMode = 2;
    colorModeButton.style.cssText = 'background-color: white; color: black;';
    rainbowModeButton.style.cssText = 'background-color: black; color: white;';
    eraserModeButton.style.cssText = 'background-color: white; color: black;';
})

eraserModeButton.addEventListener('click', ()=>{
    buttonMode = 3;
    colorModeButton.style.cssText = 'background-color: white; color: black;';
    rainbowModeButton.style.cssText = 'background-color: white; color: black;';
    eraserModeButton.style.cssText = 'background-color: black; color: white;';
})

clearButton.addEventListener('click', ()=>{
    document.querySelectorAll('.pixel').forEach((pix)=>{
        pix.style.background = 'white';
    })

})

function addPixelEvents(pixel) {
    pixel.addEventListener('mousedown', (e) => {
        e.preventDefault();
        mouseState = true;
        switch (buttonMode){
            case 1:
                pixel.style.background = colorPicker.value;
                break;
            case 2:
                pixel.style.background = getRandomColor();
                break;
            case 3:
                pixel.style.background = 'white';
                break;
        }

    });
    pixel.addEventListener('mouseover', () => {
        if (mouseState) {
            switch (buttonMode){
                case 1:
                    pixel.style.background = colorPicker.value;
                    break;
                case 2:
                    pixel.style.background = getRandomColor();
                    break;
                case 3:
                    pixel.style.background = 'white';
                    break;
            }
        }
    });

    pixel.addEventListener('mouseup', () => {
        mouseState = false;
    });
    return pixel;
}


function createGrid(newGridSize=16) {
    const container = document.querySelector('#container');
    let newPixelSize = ((31.15*16)/newGridSize);
    container.innerHTML = ('');

    for (let i = 1; i<=(newGridSize*newGridSize); i++){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.cssText = `height: ${newPixelSize}px; width: ${newPixelSize}px;`;
        addPixelEvents(pixel);
        container.appendChild(pixel);
    }
}

createGrid();


function getRandomColor(){
    return `#${Math.round(Math.random()*16777215).toString(16)}`;
}