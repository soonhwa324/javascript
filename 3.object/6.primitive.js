let date1 = new Date(2023, 2, 7)
let date2 = new Date(2023, 2, 6)

console.log(date1 - date2)

let user = {
    userName: 'amanda',
    age: 20,
    [Symbol.toPrimitive](hint){  // []는 심볼타입을 표현한다 , hint로 구별
        return hint == 'string' ? this.userName : this.age
    }   
}

let user2 = {
    age: 30,
    [Symbol.toPrimitive](){
        return this.age
    }
}

console.log(`${user}`)
console.log(user > user2)
console.log(user + 50)
console.log(user2 + 50)

user = {
    userName: 'neo',
    age: 11,
    toString(){  //Symbol.toPrimitive 의 과거 문법
        return this.userName
    }
}

console.log(user + '')

user.valueOf = function(){//Symbol.toPrimitive 의 과거 문법
    return this.age
}
console.log(user + 100)

//
userStr = JSON.stringify(user)//user를 JSON 형테의 문자로 바꿔준다
console.log(userStr)
console.log(typeof userStr)