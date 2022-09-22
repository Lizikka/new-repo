const body = document.querySelector(`body`)

const mySpan = document.querySelector(`#mySpan`)

mySpan.style.left = 0;
mySpan.style.top = 0;

mySpan.style.backgroundColor = `grey`;

const massiv = [`red`, `blue`, `black`, `green`, `orange`,`white`, `indigo`, `pink`, `yellow`];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const movingBlock = setInterval(() => {
    let randomColor = massiv[getRandomIntInclusive(0, massiv.length)];
    
    let randomLeft = getRandomIntInclusive(0, body.clientWidth-mySpan.clientWidth);
    let randomTop = getRandomIntInclusive(0, body.clientHeight-mySpan.clientHeight);

    mySpan.style.left = randomLeft + `px`;
    mySpan.style.top = randomTop + `px`;
    
    mySpan.style.backgroundColor = `${randomColor}`
}, 1000);









