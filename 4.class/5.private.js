class CoffeeMachine{
    #waterAmount//private 

    get waterAmount(){
        return this.#waterAmount + 100
    }

    set waterAmount(waterAmount){
        this.#waterAmount = 2 * waterAmount
    }
}

console.log(CoffeeMachine.prototype)

let machine = new CoffeeMachine()
console.log(machine)//차이점1.

machine.waterAmount = 1
console.log(machine.waterAmount)

//machine.#waterAmount = 1  차이점2. 직접 접근 불가