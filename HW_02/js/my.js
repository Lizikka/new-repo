let firstName = prompt ("Enter Your  first name");

let lastName = prompt ("Enter Your  last name");

let yearOfBirth = prompt ("Enter Your year of birth  ");

const year = Number ("2022");

let age = year  - yearOfBirth;

document.write( "User Bio:" + " " + firstName + " "  + lastName + "," + " " + age + " years old"  );


// for (i=0; i<5; i++){
//     if(i==4) break
//     console.log(`**************`);

// }

// let div = document.querySelectorAll(`.one`)
// console.log(div);
// // div.style.background = `red`;

// for (let i = 0; i < div.length; i = i +1){
//     console.log(div[i]);
//     div[i].style.background = `red`
// }

// for(i=0; i<5; i++) {
//     console.log(i);
// }
// let k = 0;
// while(k<5){
//     k++;
//     console.log(`k: ` +k)
// }

// let a = prompt(`How are you?`)
// if (a){
//     console.log(a)
// }else console.log(`hhh`)

// const button = document.querySelector(`button`);
// const input = document.querySelector(`.age`);

// button.onclick = () => {
//     let num = +input.value;
//     if(num >=16 ){
//         console.log(`welcome`);
//     }else if (num > 60){
//         console.log(`Ты точно сюда?`);
//     }else {
//         console.log(`Ты не пройдешь`)
//     }



// switch(num) {
//     case 15:
//         console.log(`Еще год потерпи`);
//         break;
//     case 16:
//         console.log(`Урра! Можно!`);
//         break;
//     default:
//         console.log(`oooook`)    
// }
// }

// let b = 7;
// console.log((b == 3) ||  (b == 7));

// let family = [`mama`, `papa`, `Rostik`, `Senya`];
// console.log(family[0])

// for(i=0; i<family.length; i++){
//     console.log(`Our family contains a ${family[i]}.`)
// }