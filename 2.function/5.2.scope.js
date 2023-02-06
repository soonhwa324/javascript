let a = 1// global scope

{
    console.log(a)
}

{// local scope
    let a = 2
    console.log(a)
}

console.log(a)