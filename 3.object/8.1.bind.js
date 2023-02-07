let user = {
    userName:'madona',
    greet(){
        console.log(`I am ${this.userName}.`)
    }
}

user.greet()

setTimeout(user.greet, 100)

let fn = user.greet
setTimeout(fn, 200)

setTimeout(() => user.greet(), 300)//greet을 포장한 function을 등록