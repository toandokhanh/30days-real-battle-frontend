const keyvalueElement = document.querySelector(".key .value");
const locationvalueElement = document.querySelector(".location .value");
const whichvalueElement = document.querySelector(".which .value");
const codevalueElement = document.querySelector(".code .value");
const circleElement = document.querySelector(".circle h1");

const btnElement = document.querySelector('.btn button')
const containerElement = document.querySelector('.container')
document.addEventListener('keydown', () => {
    btnElement.classList.add('hide');
    containerElement.classList.add('show');
})
document.onkeydown = (e) => {


    let keyName = e.keyCode === 32 ? 'Space' : e.key;
    keyvalueElement.innerText = keyName
    whichvalueElement.innerText = e.keyCode;
    circleElement.innerText = e.keyCode;
    locationvalueElement.innerText = e.location;
    codevalueElement.innerText = e.code;


    
}
