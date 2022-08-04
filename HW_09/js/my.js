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
summer_sports = sports.slice([5]);

winter_sports = sports.slice([0], 5)

fruits_1 = summer_sports.slice([2], 4)

fruits_2 = winter_sports.slice([2], [3])

fruits = fruits_1.concat(fruits_2);

partOfFruits_1 = summer_sports.splice(2, 2)

partOfFruits_2 = winter_sports.splice([2], 1)



document.write(`
    <li>⚹⚹⚹ Winter Sports ⚹⚹⚹</li>
    <li>${winter_sports[0].join(`:  `)}</li>
    <li>${winter_sports[1].join(`:  `)}</li>
    <li>${winter_sports[2].join(`:  `)}</li>
    <li>${winter_sports[3].join(`:  `)}</li>
    <li></li>
    <li>⚹⚹⚹ Summer Sports ⚹⚹⚹</li>
    <li>${summer_sports[0].join(`:  `)}</li>
    <li>${summer_sports[1].join(`:  `)}</li>
    <li>${summer_sports[2].join(`:  `)}</li>
    <li>${summer_sports[3].join(`:  `)}</li>
    <li></li>
    <li>⚹⚹⚹ Fruits ⚹⚹⚹</li>
    <li>${fruits[0].join(`:  `)}</li>
    <li>${fruits[1].join(`:  `)}</li>
    <li>${fruits[2].join(`:  `)}</li>
    <li></li>
    
`
    
)

















