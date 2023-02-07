function sayHi(myName, ...jobs){
    console.log(`Hi, I am ${myName}.`)
}

sayHi('john')

console.log(typeof sayHi)
console.log(sayHi.name)
console.log(sayHi.length)

let user = {
    sayHi() {},
    sayBye() {}
}

console.log(user.sayHi.name)
console.log(user.sayBye.name)

sayHi = function(){
    console.log('hi')
    sayHi.count++
}

sayHi.count = 0
sayHi()
sayHi()

console.log(`call count: ${sayHi.count}.`)