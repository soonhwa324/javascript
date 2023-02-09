let range =  {
    from: 1,
    to: 3,

    [Symbol.iterator](){//고정
        this.current = this.from//current 속성을 가지고있다
        return this
    },

    next(){//고정
        if(this.current <= this.to)
            return {
                done: false,//고정
                value: this.current++//고정
            }
        else    
            return{
                done: true
            }
    }
}

for(let num of range)//iterater가 될수있는 '객체'  Symbol.iterator call
    console.log(num)
               
function* generator(){//고정  function에 * 붙이면 generator
    let val = 1
    while(val <= 3) yield val++//고정  yield = return
}

for(let num of generator())
    console.log(num)

let g = generator()
console.log(g, ',', typeof g)

//
function* gen(){
    yield 1
    yield ['a', 'b']
    yield function(){}
}

for(let val of gen())
    console.log(val)

function* gen2(){
    yield* generator()// * 쪼갠다
    yield* ['a', 'b']
    yield 9
}

for(let val of gen2())
    console.log(val)