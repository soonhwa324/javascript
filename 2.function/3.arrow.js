let add = function(a, b){
    return a + b
}

add = (a, b) => a + b
console.log(add(1, 2))

const double = n => 2 * n// return 이 생략
console.log(double(2))

const greet = () => console.log('hello')// return 이 없다
greet()

add = (a, b) => {
    const result = a + b
    return result
}

console.log(add(1, 2))