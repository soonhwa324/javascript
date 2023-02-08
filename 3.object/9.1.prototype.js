let animal = {
    isAlive: true
}

function Rabbit(rabbitName){
    this.rabbitName = rabbitName
}

console.log(Rabbit.prototype)

let rabbit = new Rabbit('black')
console.log(rabbit.isAlive)

Rabbit.prototype = animal
console.log(Rabbit.prototype)

rabbit = new Rabbit('white')
console.log(rabbit.isAlive)
//prototype 개체 상속
function Duck(duckName){
    this.duckName = duckName
}

console.log(Duck.prototype)
console.log(Duck.prototype.constructor)
console.log(Duck.prototype.constructor == Duck)
//
let duck = new Duck('duck')
console.log(duck.__proto__)//duck개체의 prototype을 읽다
console.log(duck.__proto__.constructor)

let duck2 = new Duck('duck2')
console.log(duck2.__proto__ == duck.__proto__)

let duck3 = new duck.__proto__.constructor('duck')
duck3 = new duck.constructor('duck')//duck에 consttructor가 없으니 부모에서 찾는다
