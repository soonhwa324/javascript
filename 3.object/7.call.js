let user1 = {
    userName: 'isabel',
    greet(){
        console.log(`I am ${this.userName}.`)//this엔 주어객체가 들어간다
    }
}

let user2 = {
    userName:'jade',
    greet(){
        console.log(`I am ${this.userName}.`)
    }
}

user1.greet()
user2.greet()

//
let userName = 'morpheus'

function greet(){
    console.log(`I am ${this.userName}.`)
}

greet()  //global. 이 생략되있다 this.에 들어가 주어가없어서 undefined.
greet.call(user1)  // function.call 하면 function call한다 call하면서 this.에 user1 넣는다
greet.call(user2)

//
user2 = {
    userName: 'colin'
}

user1.greet()
//user2.greet()

//과제: user1.greet 을 이용해서, I am colin. 을 출력하라.
user1.greet.call(user2)