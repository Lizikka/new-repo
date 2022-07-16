const string = prompt ("Введите произвольную строку");
const ID = Number (prompt ("ID"));
let a = prompt ("Unicod  якого символу треба вивести? "); alert (string.charCodeAt (a));

let b =prompt ("Який символ видалити? ") ;alert (string.slice(0, b-1) + string.slice (b, string.length));
arr = [":-)", "D)", ":)", ";)", ":P", ":]", ":-D", ":-(", ";-)", ";-P",  ];
let smileIndex = getRandomIntInclusive(0, 9);
let c = prompt ("Який символ замінити на смайлик? ") ; alert (string.replace ( string[c], arr[smileIndex]));
let string1 = string.replace(/\s/g, '')
alert (string1.length);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max); 
  
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
