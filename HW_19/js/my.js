const body = document.querySelector(`body`)
const block = document.querySelector(`#block`)
const STEP = 10

document.addEventListener(`keydown`, event => {
    
    EVENTS[event.keyCode] && EVENTS[event.keyCode]() ;
    
})


const movingLeft = () => {
    if((block.offsetLeft) < 0){
        block.style.left = parseInt(block.style.left) + STEP*2 + `px`;
    } else{
        block.style.left = block.style.left ? ( parseInt(block.style.left) - STEP) + `px` : 0;
    }
};

const movingUp = () => {
    block.style.top = block.style.top ? (parseInt(block.style.top)-10) + `px` : 0;
};

const movingRight = () => {
    
    if((block.offsetLeft + block.clientWidth) > body.clientWidth){
        block.style.left = parseInt(block.style.left) - STEP*2 + `px`;
    } else{
        block.style.left = parseInt(block.style.left) + STEP + `px`;
    }
};
const movingJump = ()=> {
   
    block.style.top = block.style.top ? (parseInt(block.style.top)-10) + `px` : 0;
    
};

const movingCtrl = ()=> {
    block.style.width = `125px`;
    block.style.height = `60px`;
};


const EVENTS ={
    17: movingCtrl,
    32: movingJump,
    37: movingLeft,
    38: movingUp,
    39: movingRight,
};










