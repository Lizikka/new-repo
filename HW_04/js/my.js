const string = prompt ("Введите произвольную строку");
const ID = Number (prompt ("ID"));


if (ID == "1") {
 let a = prompt ("Unicod  якого символу треба вивести? ")
 alert (string.charCodeAt (a));
}



 
if (ID == "2"){
let b =prompt ("Який символ видалити? ") 
alert (string.slice(0, b-1) + string.slice (b, string.length));
}


if (ID == "3"){
let c = prompt ("Який символ замінити на смайлик? ") 
    arr = [":-)", "D)", ":)", ";)", ":P", ":]", ":-D", ":-(", ";-)", ";-P",  ];
    let smileIndex = getRandomIntInclusive(0, 9);

alert (string.replace ( string[c], arr[smileIndex]));
}


if (ID == "4"){
let string1 = string.replace(/\s/g, '')
alert (string1.length);
}



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max); 
  
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
