class CoffeeMachine{
    waterAmount = 0//객체 key 추가, property선언

    constructor(voltage){
        this.voltage = voltage //객체 key 추가, property선언
    }
}

console.log(CoffeeMachine)
console.log(Object.keys(CoffeeMachine))
console.log(Object.keys(CoffeeMachine.prototype))

let machine = new CoffeeMachine(220)
console.log(machine)
console.log(Object.keys(machine))

//
CoffeeMachine = class{
    _waterAmount// protected하고싶은 property 선언후 _를 뺀 이름 getter setter

    get waterAmount(){
        return this._waterAmount + 100
    }

    set waterAmount(waterAmount){
        this._waterAmount = 2 * waterAmount
    }
}

machine = new CoffeeMachine()
console.log(machine)

machine.waterAmount = 1//_ 없이 해서 setter 작동(2 * '1')
console.log(machine.waterAmount)//getter작동('2' + 100)

machine._waterAmount = 11//waterAmount에 직접 접근
console.log(machine._waterAmount)