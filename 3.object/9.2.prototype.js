let obj = {}//new object생성자를 짧게 줄여서쓴것이다, 6번줄을줄인것

console.log(obj.__proto__)
console.log(obj.__proto__ == Object.prototype)

obj = new Object()
console.log(obj.__proto__)
console.log(Object.prototype.__proto__)//Object의 prototype의 prototype은 없다

console.log(obj.toString())

let arr1 = [1, 2]//13번줄을 줄인것
let arr2 = new Array(1, 2)
console.log(arr1.__proto__ == arr2.__proto__)
console.log(arr1.__proto__ == Array.prototype)//객체는 생성자를 복사한것이라서 같다

console.log(Array.prototype.__proto__)
console.log(Object.prototype)
console.log(Array.prototype.__proto__ == Object.prototype)
console.log(arr2.toString())

let one = new Number(1)
console.log(one.toString())

function User() {}
let user = new User()
console.log(user.toString())//User에는 toString이 없어서Object에서 찾아서 쓴다
console.log(obj.toString())