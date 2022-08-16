let hero = ['Ivan'];
let native = ['York','Of'];
let destination = ['Poltava','In'];

let rainbow = destination
    .concat(native, hero)
    .reverse();

rainbow.splice(0,1,`Richard`);
rainbow.splice(3,0,'Gave','Battle');
rainbow.splice(-1,1,'Vain');

const colors = [`#f44336`, `#ff9800`, `#ffeb3b`, `#4caf50`, `#03a9f4`, `#3f51b5`, `#9c27b0`];

let render = [];
for(i=0; i<rainbow.length; i++){
    render.push(`<div class="rainbow__item">
        <span  class="item__circle" style="background: ${colors[i]} ; width: 30px; height:30px; border-radius:50%"  >jjjjjj</span>
        <span>${rainbow[i]}</span>
    </div>`);
}


document.write(`<div class="rainbow">${render.join(``)}</div>`)