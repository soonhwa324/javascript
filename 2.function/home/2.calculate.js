/*
1.calculate.js 를 callback 으로 refactoring 하라.
-, *, / 연산을 callbakc으로 처리한다.


let calculate = function(a, b, op='*'){
    let result

    switch(op){
        case '-': result = a - b; break
        case '*': result = a * b; break
        case '/': result = a / b
    }

    return result
}

console.log(calculate('1', '2', '-'))
console.log(calculate('2', ))
*/
function minus(a, b){//console.log(Boolean(a) a값이 없으면 false가 나온다
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

function calculate(a, b, op=multiply){
    return op(a, b)
}


console.log(calculate(1, 2, minus))
console.log(calculate(1, 2, multiply))
console.log(calculate(1, 2, divide))
console.log(calculate(1, 2))