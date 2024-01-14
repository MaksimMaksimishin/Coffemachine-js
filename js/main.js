// class User {
//     masterPwd = '!!!';

//     constructor(login, pwd) {
//         this.login = login;
//         this.pwd = pwd;
//     }

//     getInfo() {
//         console.log('-- USER INFO ------');
//         console.log(`login: ${this.login}`);
//         console.log(`pwd : ${this.pwd}`);
//         console.log(`===================`);
//     }
// }

// const user1 = new User('Admin', '123');
// const user2 = new User('User', '000');
// const user3 = new User('Super-admin', '111');

// user1.getInfo();
// user2.getInfo();
// user3.getInfo();


// const rectangle = {
//     _w: 200,
//     _h: 100,
//     set w(value) {
//         if (Number.isNaN(value)) {
//             console.log('value is NaN');
//             return;
//         }
//         this._w = value;
//     },
//     set  h(value) {
//         if (Number.isNaN(value)) {
//             console.log('value is NaN');
//             return;
//         }
//         this._h = value;
//     },
//     h: 300,
//     get area() {
//         return this.h * this.w;
//     }
// }

// rectangle.w = 'Hello';
// rectangle.h = 200;

// console.log(rectangle.area);
// console.log(rectangle);


// class CoffeMachine {
//     constructor(brand,coffeTypes, waterVolume) {
//         this.brand = brand;
//         this.coffeTypes = coffeTypes;
//         this.waterVolume = waterVolume;
//     }
//     showInfo() {

//     }
// }

class CoffeeMachine {
    constructor(brand, coffeeTypes, waterVolume) {
        this.brand = brand;
        this.coffeeTypes = coffeeTypes;
        this.waterVolume = waterVolume;
        this.prices = {
            Espresso: 2.5,
            Latte: 3.0,
            Cappuccino: 3.5
        };
        this.totalPrice = 0;
    }

    showInfo() {
        document.getElementById('info').innerHTML = `
            <p>Brand: ${this.brand}</p>
            <p>Available Coffee Types: ${this.coffeeTypes.join(', ')}</p>
            <p>Water Volume: ${this.waterVolume} ml</p>
            <p>Total Price: $${this.totalPrice.toFixed(2)}</p>
        `;
    }

    checkWater() {
        return this.waterVolume >= 100; 
    }

    makeCoffee(coffeeType) {
        if (this.coffeeTypes.includes(coffeeType) && this.checkWater()) {
            console.log(`Making ${coffeeType}...`);
            this.waterVolume -= 100;
            this.totalPrice += this.prices[coffeeType];
            console.log(`${coffeeType} is ready!`);
            this.showInfo();
        } else {
            console.log(`Sorry, ${coffeeType} is not available or there is not enough water.`);
        }
    }

    addWater(amount) {
        this.waterVolume += amount;
        console.log(`Added ${amount} ml of water. New water volume: ${this.waterVolume} ml`);
        this.showInfo();
    }

    getTotalPrice() {
        console.log(`Total Price: $${this.totalPrice.toFixed(2)}`);
    }
}


const myCoffeeMachine = new CoffeeMachine("Кофемашина PHILIPS Series", ["Espresso", "Latte", "Cappuccino"], 1000);
myCoffeeMachine.showInfo();

document.getElementById('espressoBtn').addEventListener('click', () => myCoffeeMachine.makeCoffee('Espresso'));
document.getElementById('latteBtn').addEventListener('click', () => myCoffeeMachine.makeCoffee('Latte'));
document.getElementById('cappuccinoBtn').addEventListener('click', () => myCoffeeMachine.makeCoffee('Cappuccino'));

document.getElementById('addWaterBtn').addEventListener('click', () => myCoffeeMachine.addWater(200));
document.getElementById('getTotalPriceBtn').addEventListener('click', () => myCoffeeMachine.getTotalPrice());
