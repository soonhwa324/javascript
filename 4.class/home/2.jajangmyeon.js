/*
object/home/4.jajangmyeon.js class 로 refactoring 하라.
*/
class Food {
    constructor(taste, foodName){ 
        this.taste = taste
        this.foodName = foodName     

    }
    [Symbol.toPrimitive](){
        return `${this.taste} ${this.foodName}.`
    }
}

class Chef{
    constructor(taste){
        this.cook = foodName => new Food(taste, foodName)
    }
    /*
    constructor(taste){
        this.taste = taste
    }

    cook(foodName){
        this.foodName = foodName
        
        return new Food(this.taste, foodName)
    }
    */
}

class Waiter{
    order(foodName, chef){
        this.foodName = foodName
        this.chef = chef
        
        return chef.cook(foodName)
    }
}

const chef1 = new Chef('달콤한')
const chef2 = new Chef('매운')
const waiter = new Waiter()

waiter.order('짜장면', chef1)
waiter.order('짬뽕', chef2)

console.log(waiter.order('짜장면', chef1) + '')
console.log(`${waiter.order('짜장면', chef1)}`)
