const COFFEE_TYPES = {
    Espresso: [
        {
            title: `Ristretto`,
            ingredients: {
                espresso: 20,
                water: 80
            }
        },
        {
            title: `Espresso`,
            ingredients: {
                espresso: 60, 
                water: 40
            }
        },
        {
            title: `Lungo`,
            ingredients: {
                espresso: 100,
                water: 0
            }
        },
        {
            title: `Americano`,
            ingredients: {
                espresso: 40,
                water: 60
            }
        }
    ],
    EspressoMilk: [
        {
            title: `Macchiato`,
            ingredients: {
                espresso: 20,
                "milk foam": 10
            }
        },
        {
            title: `Flat White`,
            ingredients: {
                espresso: 55,
                "milk foam": 45
            }
        },
        {
            title: `Cappuccino`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 15
            }
        },
        {
            title: `Latte`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 20
            }
        },
        {
            title: `Mocha`,
            ingredients: {
                "chocolate syrop": 15,
                espresso: 15,
                milk: 18,
                "milk foam": 15
            }
        }
    ],
    Alcoholic: [
        {
            title: `Irish Coffee`,
            ingredients: {
                espresso: 50,
                whiskey: 10,
                "whipped cream": 40
            }
        },
        {
            title: `Corretto`,
            ingredients: {
                espresso: 90,
                brandy: 10
            }
        },
        {
            title: `Baileys Hot Coffee`,
            ingredients: {
                espresso: 30,
                "warm milk": 20,
                "baileys irish cream": 30
            }
        }
    ],
    Dessert: [
        {
            title: `Affogato`,
            ingredients: {
                espresso: 25,
                "ice cream": 20,
                "whipped cream": 10,
                chocolate: 10
            }
        },
        {
            title: `Frappe`,
            ingredients: {
                espresso: 30,
                ice: 10,
                milk: 50
            }
        },
        {
            title: `Glace`,
            ingredients: {
                espresso: 50,
                "grated chocolate": 10,
                "ice cream": 30
            }
        }
    ]
}


class Coffee{
    constructor(coffee){
        Object.assign(this, coffee);
    }

    makeCoffee(){
        return `<div class="cup">
            <div class="${this.getCupClasses().join(` `)}">
                <div class="coffee__ingredients">${this.setIngredients()}</div>
            </div>
            <p class="coffee__title">${this.title}</p>
        </div>`;
    }

    getCupClasses(){
        return [`coffee`];
    }

    setIngredients(){
        return Object
            .keys(this.ingredients)
            .map(key => `<p style="height: ${this.ingredients[key]}%"class="ingredient ${key.replaceAll(` `,`__`)}">${key}</p>`)
            .join(``);
    }      
}

class Espresso extends Coffee{
    constructor(coffee){
        super(coffee)
    }

    getCupClasses(){
        let classes = super.getCupClasses();
        classes.push(`coffee--espresso`);
        return classes;
    }
}

class EspressoMilk extends Coffee{
    constructor(coffee){
        super(coffee)
    }
    getCupClasses(){
        let classes = super.getCupClasses();
        classes.push(`coffee--espressoMilk`);
        return classes
    }
}

class Alcogolik extends Coffee{
    constructor(coffee){
        super(coffee)
    }
    getCupClasses(){
        let classes = super.getCupClasses();
        classes.push(`coffee--alcoholic`);
        return classes
    }
}

class Dessert extends Coffee{
    constructor(coffee){
        super(coffee)
    }
    getCupClasses(){
        let classes = super.getCupClasses();
        classes.push(`coffee--dessert`);
        return classes
    }
}

const COFFEE_CLASSES = {
    Espresso: coffee => new Espresso(coffee),
    EspressoMilk: coffee => new EspressoMilk(coffee),
    Alcoholic: coffee => new Dessert(coffee),
}

let allCoffee = Object
    .keys(COFFEE_TYPES)
    .map(type => {
        let currentType = COFFEE_TYPES[type];
        return currentType
            .map(coffee => {
                return COFFEE_CLASSES[type] ? COFFEE_CLASSES[type](coffee) : new Coffee(coffee)
            })
    })
    .map(coffee => {
        console.log(coffee);
        return coffee;
    })
    .reduce((finalArr, arr) => finalArr.concat(arr), [])
    .map(coffee => coffee.makeCoffee())
    .join(``);

let defaultCoffee = new Coffee(
    {
        title: `Default Coffee`,
        ingredients: {
            espresso: 50,
            whiskey: 10,
            "whipped cream": 40
        }
    }
);

document.write(`<section class="cups">
    ${defaultCoffee.makeCoffee()}
    ${allCoffee}
</section>`);








































































// class Coffee{
//     constructor(){
        
//     }
//     makeCoffee(){
//         return (`<div class="cup">
//         <div class="coffee">
//             <div class="coffee__ingredients">
//                 <p style="height:${this.ingredients}% " class="ingredient espresso">espresso</p>
//                 <p style="height:${this.whiskey}%" class="ingredient whiskey">whiskey</p>
//                 <p style="height:${this.whipped__cream}% " class="ingredient whipped__cream">whipped cream</p>
//             </div>
//         </div>
//         <p class="coffee__title">${this.title}</p>
//     </div>`)
//     }
// }

// class Espresso extends Coffee{
//     constructor(obj){
//         super(obj)
//         this.type = `Espresso`;
//         Object.assign(this, obj)
//     }
//     makeCoffee(){
//         return `<div class="cup">
//         <div class="coffee coffee--espresso">
//             <div class="coffee__ingredients">
//                 <p style="height: ${this.espresso}%" class="ingredient espresso">espresso</p>
//                 <p style="height: ${this.water}%" class="ingredient water">water</p>
//             </div>
//         </div>
//         <p class="coffee__title">${this.title}</p>
//     </div> `
//     }
// }

// class EspressoMilk extends Coffee{
//     constructor(obj){
//         super(obj)
//         this.type = `EspressoMilk`;
//         Object.assign(this, obj)
//     }
//     makeCoffee(){
//         return`<div class="cup">
//         <div class="coffee coffee--espressoMilk">
//             <div class="coffee__ingredients">
//                 <p style="height: ${this.chocolate__syrop}%" class="ingredient chocolate__syrop">chocolate syrop</p>
//                 <p style="height: ${this.espresso}%" class="ingredient espresso">espresso</p>
//                 <p style="height: ${this.milk}%" class="ingredient milk">milk</p>
//                 <p style="height: ${this.milk__foam}%" class="ingredient milk__foam">milk foam</p>
//             </div>
//         </div>
//         <p class="coffee__title">${this.title}</p>
//     </div>`
//     }
// }

// class Alcogolik extends Coffee{
//     constructor(obj){
//         super(obj)
//         this.type = `Alcogolik`;
//         Object.assign(this, obj)
//     }
//     makeCoffee(){
//         return  `<div class="cup">
//         <div class="coffee coffee--alcoholic">
//             <div class="coffee__ingredients">
//                 <p style="height: ${this.espresso}%" class="ingredient espresso">espresso</p>
//                 <p style="height: ${this.whiskey}%" class="ingredient whiskey">whiskey</p>
//                 <p style="height: ${this.whipped__cream}%" class="ingredient whipped__cream">whipped cream</p>
//             </div>
//         </div>
//         <p class="coffee__title">${this.title}</p>
//     </div>`
//     }
// }

// class Desert extends Coffee{
//     constructor(obj){
//         super(obj)
//         this.type = `Desert`;
//         Object.assign(this, obj)
//     }
//     makeCoffee(){
//         return`<div class="cup">
//         <div class="coffee coffee--dessert">
//             <div class="coffee__ingredients">
//                 <p style="height: ${this.espresso}%" class="ingredient espresso">espresso</p>
//                 <p style="height: ${this.ice__cream}%" class="ingredient ice__cream">ice cream</p>
//                 <p style="height: ${this.whipped__cream}%" class="ingredient whipped__cream">whipped cream</p>
//                 <p style="height: ${this.chocolate}%" class="ingredient chocolate">chocolate</p>
//             </div>
//         </div>
//         <p class="coffee__title">${this.title}</p>
//     </div>`
//     }
// }

// let renderDefaultCoffee = new Coffee(
//     {
//         title: `Default Coffee`,
//         ingredients: {
//             espresso: 50,
//             whiskey: 10,
//             "whipped cream": 40
//         }
//     }
// ).makeCoffee();
// let renderRistrettoCoffee = new Espresso(
//     {
//         title: `Ristretto`,
//         ingredients: {
//             espresso: 20,
            
//         }
//     }
// ).makeCoffee();

// let renderEspressoCoffee = new Espresso(
//     {
//         title: `Default Coffee`,
//         ingredients: {
//             espresso: 60,
            
//         }
//     }
// ).makeCoffee();

// let renderLungoCoffee = new Espresso(
//     {
//         title: `Lungo`,
//         ingredients: {
//             espresso: 100,
            
//         }
//     }
// ).makeCoffee();

// let renderAmericanoCoffee = new Espresso(
//     {
//         title: `Default Coffee`,
//         ingredients: {
//             espresso: 40,
//             water: 60
            
//         }
//     }
// ).makeCoffee();

// let renderMacchiatoCoffee = new EspressoMilk(
//     {
//         title: `Macchiato`,
//         ingredients: {
//             espresso: 20,
//             "milk foam": 10
            
//         }
//     }
// ).makeCoffee();

// let renderFlatWhiteCoffee = new EspressoMilk(
//     {
//         title: `Flat White`,
//         ingredients: {
//             espresso: 55,
//             whiskey: 10,
//             "milk foam": 45
//         }
//     }
// ).makeCoffee();

// let renderCappuccinoCoffee = new EspressoMilk(
//     {
//         title: `Cappuccino`,
//         ingredients: {
//             espresso: 20,
//             milk: 18,
//             "milk foam": 15
//         }
//     }
// ).makeCoffee();


// let renderLatteCoffee = new EspressoMilk(
//     {
//         title: `Latte`,
//         ingredients: {
//             espresso: 20,
//             milk: 20,
//             "milk foam": 20
//         }
//     }
// ).makeCoffee();

// let renderMochaCoffee = new EspressoMilk(
//     {
//         title: `Mocha`,
//         ingredients: {
//             "chocolate syrop": 15,
//             espresso: 15,
//             milk: 18,
//             "milk foam": 15
//         }
//     }
// ).makeCoffee();


// let renderIrishCoffeeCoffee = new Alcogolik(
//     {
//         title: `Irish Coffee`,
//         ingredients: {
//             espresso: 50,
//             whiskey: 10,
//             "whipped cream": 40
//         }
//     }
// ).makeCoffee();

// let renderCorrettoCoffee = new Alcogolik(
//     {
//         title: `Corretto`,
//         ingredients: {
//             espresso: 90,
//             "warm milk": 20,
//             "baileys irish cream": 30
//         }
//     }
// ).makeCoffee();

// let renderBaileysHotCoffeeCoffee = new Alcogolik(
//     {
//         title: `Baileys Hot Coffee`,
//         ingredients: {
//             espresso: 30,
//             "warm milk": 20,
//             "baileys irish cream": 30
//         }
//     }
// ).makeCoffee();

// let renderAffogatoCoffee = new Desert(
//     {
//         title: `Affogato`,
//         ingredients: {
//             espresso: 25,
//             "ice cream": 20,
//             "whipped cream": 10,
//             chocolate: 10
//         }
//     },
// ).makeCoffee();

// let renderFrappeCoffee = new Desert(
//     {
//         title: `Frappe`,
//         ingredients: {
//             espresso: 30,
//             ice: 10,
//             milk: 50
//         }
//     },
// ).makeCoffee();

// let renderGlaceCoffee = new Desert(
//     {
//         title: `Glace`,
//         ingredients: {
//             espresso: 50,
//             "grated chocolate": 10,
//             "ice cream": 30
//         }
//     }
// ).makeCoffee();

// document.write(`<section class "cups"> ${renderRistrettoCoffee}
//     ${renderEspressoCoffee} 
//     ${renderLungoCoffee}
//     ${renderAmericanoCoffee}
//     ${renderMacchiatoCoffee}
//     ${renderFlatWhiteCoffee}
//     ${renderCappuccinoCoffee}
//     ${renderLatteCoffee}
//     ${renderMochaCoffee}
//     ${renderIrishCoffeeCoffee}
//     ${renderCorrettoCoffee}
//     ${renderBaileysHotCoffeeCoffee}
//     ${renderAffogatoCoffee}
//     ${renderFrappeCoffee}
//     ${renderGlaceCoffee}
    
//   </section>`)