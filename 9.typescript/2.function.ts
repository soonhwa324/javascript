function sum(a: number, b: number): number{
    return a + b
}

console.log(sum(1, 2))

function add(a: number, b: number, isDouble: boolean): number{
    const sum = a + b
    return isDouble ? sum * 2 : sum
}

let result: number = add(1, 2, true)
console.log(result)

function greet(userName: string, nullable?: boolean){
    if(nullable) return null
    else return `Hello, ${userName}.`
}

let greeting = greet('cain')
//let greeting = greet('cain', true)
console.log(greeting)