const string = "How much is the fish? ";
prompt ("How much is the fish? ");
const ID = Number (prompt ("Enter ID "));


if ((ID == "1" )) alert (string.charCodeAt (1));
if ((ID == "2" )) alert (string.slice(0, 2) + string.slice (3, 22));
arr = [":-)", "D)", ":)", ";)", ":P", ":]", ":-D", ":-(", ";-)", ";-P",  ];
let smileIndex = getRandomIntInclusive(0, 9);
if ((ID == "3" )) alert (string.replace ( string[2], arr[smileIndex]));
let string1 = string.replace(/\s/g, '')
if ((ID == "4" )) alert (string1.length);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max); 
  
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
