/*
2.function/home/3.jajangmyeon.js 를 객체지향으로 refactoring하라.
*/
function Food(taste, foodName){
    this.taste = taste
    this.foodName = foodName
}

function Chef(taste){
    this.cook = foodName => new Food(taste, foodName)
}

function Waiter(){
    this.order = (foodName, chef) => chef.cook(foodName)
}

const chef1 = new Chef('달콤한')
const chef2 = new Chef('매운')
const waiter = new Waiter()

console.log(waiter.order('짜장면', chef1))
waiter.order('짬뽕', chef2)
