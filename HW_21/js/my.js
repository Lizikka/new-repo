const userData = {
	USD: 1000,
	EUR: 900,
	UAH: 15000,
	BIF: 20000,
	AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
}

const  getMoney = () => new Promise((resolve, reject) => {
    const userChoice = confirm (`Подивитися баланс карти?`);
    userChoice ? resolve() : reject();
});

getMoney()
    .then(
        () => {
            
            let currency;
            let avaliableUserCurrencies = Object.keys(userData);

            do{
                currency = prompt(`Введіть назву валюти: ${avaliableUserCurrencies.join(`, `)}`, avaliableUserCurrencies[0])
                if (currency) currency = currency.replaceAll(` `, ``).toUpperCase();
            } while(!avaliableUserCurrencies.includes(currency));

            console.log(`Баланс становить: ${userData[currency]} ${currency}`);
        },
        () => {
            let avaliableUserCurrencies = Object.keys(userData);
            let avaliableBankCurrencies = Object
                .keys(bankData)
                .filter(currency => bankData[currency].max > 0);

            let avaliableUserBank = avaliableBankCurrencies
                .filter(currency => avaliableUserCurrencies.includes(currency));

            let currency;
            do{
                currency = prompt(`Введіть назву валюти: ${avaliableUserBank.join(`, `)}`, avaliableUserBank[0])
                if(currency) currency = currency.replaceAll(` `, ``).toUpperCase();

            }while(!avaliableUserBank.includes(currency))

            let minAvaliablePrice = bankData[currency].min;
            let maxAvaliablePrice = userData[currency];
            if (userData[currency] > bankData[currency].max) max = bankData[currency].max;

            let price = prompt(`Введіть суму ${minAvaliablePrice}-${maxAvaliablePrice}`);

            if(price > maxAvaliablePrice){
                console.log(`Введена сума більша за доступну. Максимальна сума зняття: ${maxAvaliablePrice} ${currency}`)

            }else if(minAvaliablePrice > price){
                console.log(`Введена сума менша за доступну. Мінімальна сума зняття: ${minAvaliablePrice} ${currency}`)
            }else {
                console.log(`От Ваші гроші! ${price} ${currency} ${bankData[currency].img}`)
            }
        }

    )
    .finally (
        () => console.log(`Дякую, гарного дня!`)
    )