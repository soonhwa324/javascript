function wrap<T>(value: T): T {
    return value
}

const output = wrap('hello')
console.log(output)

//
interface Woman{
    womanName: string
}

const woman: Woman = {womanName: 'hera'}
const woman2 = wrap(woman)
console.log(woman2)

//
interface Item<T>{
    itemId:number
    data: T
}

interface Animal{
    animalName: string
}

interface Place{
    locationName: string
}

const animal: Item<Animal> = {
    itemId: 1,
    data: {
        animalName: 'cat'
    }
}

const place: Item<Place> = {
    itemId: 2,
    data:{
        locationName: 'seoul'
    }
}

//
type Product<T> = {
    productId: number
    date: T
}

//
class Queue<T> {
    list: T[] = []

    get length(): number{
        return this.list.length
    }

    enqueue(item: T): void{
        this.list.push(item)
    }
    
    dequeue(){
        return this.list.shift()
    }
}

const queue = new Queue<number>()
queue.enqueue(0)
queue.enqueue(1)

let e = queue.dequeue()
e = queue.dequeue()
console.log(e)