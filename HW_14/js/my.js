const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

class Vegetable{
    constructor(vegetables){
        this.type = `Vegatable`;
        this.seasonKoef = `1.3`;
        Object.assign(this, vegetables)
    }
    getPrice(){
        console.log(this);
       return this.season ? this.price*this.seasonKoef : this.price;
   }

   getInfo(){
      let info = []
      for(let key in this){
        info.push(`${key}:${this.key === this.price ?  this.getPrice() : this[key]}`)
      }
      return info.join(`. `)
   }
}

let tomato = {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    };
    let carrot = {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    };
    let corn = {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    } 
    let tomatoVegetables = new Vegetable(tomato);
    let carrotVegetables = new Vegetable(carrot);
    let cornVegetables = new Vegetable(corn);

    
document.write(`<ul>
                    <li>${tomatoVegetables.getInfo()}</li>
                    <li>${carrotVegetables.getInfo()}</li>
                    <li>${cornVegetables.getInfo()} </li>
                </ul>`)





















































































































































// class Vegetables {
//     constructor (vegetables){
        
//         this.type = `Vegetable`;
//         this.seasonkoef = `1.3`;

//         // for(let key in Vegetables){
//         //     this[key] = Vegetables[key]
//         // }
//         Object.assign(this, Vegetables)
//     }

//     getInfo() {  
//         for(let key in Vegetables ){
//            return console.log( `<li>${key}: ${this[key]}</li>`)
//         }
//     };
// }

//     let tomato = {
//         name: `tomato`,
//         icon: `🍅`,
//         price: 2.3
//     }
    
//     let tomatoVegetables = new Vegetables(tomato);

//     let carrot = {
//         name: `carrot`,
//         icon: `🥕`,
//         price: 1.5
//     }
//     let carrotVegetables = new Vegetables(carrot);

//     let corn = {
//         name: `corn`,
//         icon: `🌽`,
//         price: 2.78,
//         season: true
//     }
//     let cornVegetables = new Vegetables(corn);

//     // console.log(Vegetables);
//     // console.log(cornVegetables);


    

    
