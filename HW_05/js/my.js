const userChoice = confirm(`Tell me three most important words 💚`);

if(userChoice){
    const wordCount = 3;
    let finalString = ``;
    for (let i=1; i<=wordCount; i++){
        let word ,
            wordHasNumber;
        do {
            word = prompt(`Enter word ${i}`);
            if(word){
                word = word.trim();
                wordHasNumber = false;

            for (let j = 0; j <= word.length; j++){
                let currentLetter = word[j]
                
                if( !isNaN(+currentLetter)) {
                    wordHasNumber = true;
                    break;
                }
            }
            }

           
           
        }while (!word || wordHasNumber); 
        console.log(word)

        let formatter;
        do {
            formatter = prompt(`Choose type of transformation : uppercase || lowercase || capitalize`); 
            if (formatter) formatter = formatter.replaceAll( ` `, ``).toLowerCase();
        }while(!formatter || ( formatter !==`uppercase` &&  formatter !==`lowercase` &&  formatter !== `capitalize`));
        console.log(formatter)

        switch(formatter) {
            case `uppercase`:
                word = word.toUpperCase();
                break;
            case `lowercase`:
                word = word.toLowerCase();
                break
            case `capitalize`:
                word = word[0].toUpperCase() + word.slice(1).toLowerCase;
                break       
        }
            console.log(word)
            finalString += word
            finalString += i ===wordCount ? '!' : ` `;
    }
    console.log(finalString)
    
}



