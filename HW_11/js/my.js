const products = [
	['apple',10],
	['banana',8],
	['mango',20],
	['grape',18]
]
let currentArray;
function getPrice(array, seasonFunc ){
let sum = 0;   
    for(let i=0; i<array.length; i++){
         currentArray = array[i]
          
         if(seasonFunc){
            sum += seasonFunc(currentArray[1]);
         } 
         else sum+= currentArray[1]
         
            
    }
    return sum
}
 function summerValue(value){
	return value*0.8;
}
function winterValue(value){
	return value*2;
}  

console.log(getPrice(products, ))



