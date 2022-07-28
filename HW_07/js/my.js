let arr = [];


do {
    question = prompt(`What is length of arr?`);
    if(question) question = Math.round(Math.abs(question));
    
} while(question < 2  ||   question >10 );

arr.length = question;

let randomValue = Math.round(Math.random()*10);

arr.fill(randomValue)
console.log(arr)

let result = 1;
for (i = 1; i < arr.length; i++) {
    result = result * arr[i]
}
console.log(result);


