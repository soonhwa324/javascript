const age = 16

console.log(sayAge)

{
    let age = 10

    function sayAge(){//closure 외부 변수의 접근 할 수 있는 function
        console.log(age)
    }

    let tellAge = function(){
        console.log(age)
    }

    sayAge()
    tellAge()
}

sayAge()