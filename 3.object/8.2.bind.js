let user = {
    userName: 'leo'
}

function greet(){
    console.log(`I am ${this.userName}.`)
}

greet()
//bind 는 주어function을 return  call은 주어function을  call
let fn = greet.bind(user)//this변수에 user객체를 집어넣은 greet
fn()

setTimeout(fn, 100)

user = {
    userName: 'john',
    greet(){
        console.log(`I am ${this.userName}.`)
    }
}

//과제: fn에 user.greet을 할당하라.
//          greet의 this 엔 user가 담겨있다.
fn = user.greet.bind(user)// bind  물리적으로 greet을 모방한 새로운 functions이다
setTimeout(fn, 200)

console.log(fn == user.greet)