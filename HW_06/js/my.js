let requestBurger = prompt(`gamburger or cheesburger`);
let count = 0
let doubleCheese
let requestPotato 
let sizeOfPotato
let souse
let typeOfSouse
if(requestBurger){
    switch(requestBurger){
        case `gamburger`:
            count = (count + 10 );
            break

        case `cheesburger`:
            count = count + 15;
            doubleCheese = confirm(`Would you like to add double cheese?`);
            if(doubleCheese){
                count = count + 5;
            }
    
}
requestPotato =  confirm(`Would you like potato?`);
if(requestPotato){
    sizeOfPotato = prompt(`Choose potato size: small/middle/big:`);
    switch(sizeOfPotato){
        case `middle`:
            count = count + 15;
            break
        case `big`:
            count = count + 20;
            break
        default:
            sizeOfPotato = `small`;
            count = count + 10;
            break
    }
}

}
souse = confirm(`Would you like sauce?`);
if (souse){
    typeOfSouse = prompt(`Choose sauce: ketchup/mayonnaise`);
    switch(typeOfSouse){
        case `mayonnaise`:
            count = count + 3;
            break;
        default:
            typeOfSouse = `ketchup`
            count = count + 2;
    }
}
document.write (count)