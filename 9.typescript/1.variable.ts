let msg: string = 'hello'//typescript는 변수의 데이터 타입을 정한다 (static)
//msg = 1

let val: number = 1
let nullableStr: string | null = null//union type  n개 를 정할수있다 or 를 사용해서
nullableStr = 'Hi'
//nullableStr = undefined //type 불일치

let undefinedOrNumber: undefined | number
undefinedOrNumber = 10
undefinedOrNumber = undefined

let numberOrStringOrNull: number | string | null = null
numberOrStringOrNull = 1
numberOrStringOrNull = 'Bye'

let isCompleted: boolean =true
isCompleted = false
//isCompleted = 0

let anyValue: any = null
anyValue = undefined
anyValue = 1
anyValue = 'hello'

let a = 1
let b = 'b'
let c = true
