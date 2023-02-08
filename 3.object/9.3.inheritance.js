let animal = {// 5~6과 같다
    animalName: 'animal'
}

animal = new Object()
animal.animalName = 'animal'

//과제: 토끼를 object literal 및 construtor 로 만들어라.
//      토끼는 age = 3, property 를 갖고있다.
let rabbit = {
    age: 3
}

rabbit = new Object()
rabbit.age = 3

console.log(animal.__proto__)
console.log(rabbit.__proto__)

console.log(rabbit.animalName, rabbit.age)

animal = {
    walk(){
        console.log('animal walk')
    }
}

rabbit = {
    __proto__: animal//rabbit의 prototype은 animal ,상속
}

rabbit.walk()

let user = {
    userName: 'user'
}

let adminstrator = {
    __proto__: user
}

console.log(adminstrator.userName)

adminstrator.userName = 'jonadan'
console.log(adminstrator.userName)

animal = {
    animalName: 'animal',
    weight: 50,
    eat(){
        console.log(`${this.animalName} eat.`)
    }
}

rabbit ={
    rabbitName: 'rabbit',
    __proto__: animal // rabbit is a animal
}

let lion = {
    lionName: 'lion',
    __proto__: animal
}

animal.eat()
rabbit.eat()
lion.eat()

console.log(Object.keys(rabbit))//부모까지 조회 ㄴㄴ 내껏만

for(let key in rabbit)// 부모까지 조회
    console.log(key)

let msg
for(let key in rabbit){
    let isOwn = rabbit.hasOwnProperty(key)
    msg = isOwn ? `child's key: ${key}` : `parent's key: ${key}`
    console.log(msg)
}