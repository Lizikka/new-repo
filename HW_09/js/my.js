sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];


let winterSports = sports.slice(0, 5),
    summerSports = sports.slice(6),
    fruits = winterSports.splice(2,1).concat(summerSports.splice(2,2));


let winterSportsLi = [];
for(let i=0; i<winterSports.length; i++){
    winterSportsLi.push(winterSports[i].join(`:  `))
}

let summerSportsLi = [];
for(let i=0; i<summerSports.length; i++){
    summerSportsLi.push(summerSports[i].join(`:  `))
}

let fruitsLi = [];
for(let i=0; i<fruits.length; i++){
    fruitsLi.push(fruits[i].join(`:  `))
}

document.write(`
    <p>**** Winter sports ****</p>
    <ul>${winterSportsLi.join(``)}</ul>   

    <p>**** Summer sports ****</p>
    <ul>${summerSportsLi.join(``)}</ul>  
    
    <p>**** Fruits ****</p>
    <ul>${summerSportsLi.join(``)}</ul> 
    
`)


















