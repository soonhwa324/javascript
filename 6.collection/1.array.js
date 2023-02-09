let arr = new Array(1, 'hello', true, {age: 3}, function fn(){}, class A{})
console.log(arr)

arr = [null, undefined, NaN]
console.log(arr)

arr = []//1번줄 과 같다
arr[0] = 'a'
arr[2] = 'c'

console.log(arr)
console.log(arr[0])
console.log(arr[1])

console.log(arr.length)

let matrix = [
    [1, 2],
    [3, 4]
]

let a = [1, 2]
let b = [3, 4]
let c = a.concat(b)
console.log(c)

arr = []
arr.push(1)//stack 형태 1이제 아래(먼저)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.pop())//제일 마지막 데이터 뽑고 버림
console.log(arr)

arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.shift())//제일 앞의 데이터 뽑고 버림
console.log(arr)

arr = [1, 2, 3]
arr.reverse()//원소위치를 역순으로 바꾼다
console.log(arr)

a = [0, 1, 2]
b = a.slice(1)// index 이후 값을 새로운 배열을 만들어서 return
console.log(b, a)

arr = [0, 7, 8, 5]
arr.splice(0, 2, 1, 2, 3, 4)//0번 index에서 2개 잘라서버린다 그리고 나머지 추가
console.log(arr)

arr = ['a', 'b', 'c']
console.log(arr.indexOf('b'))//b원소의 index return

arr.splice(arr.indexOf('b'))//b이후를 잘라서 버린다
console.log(arr)

arr = ['a', 'b', 'c']
//과제: splice()로 arr에서 'b'만을 삭제하라.
arr.splice(arr.indexOf('b'), 1)
console.log(arr)

arr = ['a', 'b', 'c', 'b']
arr.splice(arr.indexOf('b'), 1)//처음으로 발견되는 'b'를 잘라 버린다
console.log(arr)

//
arr = [4, 3, 1, 2]
let s = arr.sort()//주어 객체 그대로 return
console.log(arr, s)
//과제: s가 view object 인지를 확인하라.
console.log(s == arr)

arr = [8, 11, 22, 23, 9]//string 으로 정렬  unicode 순
console.log(arr.sort())

console.log(arr.sort((a, b) => a - b))//오름차순
console.log(arr.sort((a, b) => b - a))//내림차순

arr = ['a', 'b', 'c']

for(let i = 0; i < arr.length; i++)
    console.log(arr[i])

//과제: 위와 다른 for로 arr을 iterating하라.
for(let e of arr ) console.log(e)//arr 이 collection 
for(let key in arr) console.log(arr[key])// arr 이 object

function print(e){
    console.log(e)
}

function print2(e, i){
    console.log(`[${i}]: ${e}`)
}

function print3(e, i, arr){
    arr[i] = e.toUpperCase()
}

arr = ['a', 'b']

console.log()
arr.forEach(print)//출력목적

arr.forEach(print2)

arr.forEach(print3)
console.log(arr)

//
arr = [1, 2, 3]
let arr2 = arr.map(e => e * 2)// 가공할떄 html tag로 변환할때
console.log(arr, arr2, arr == arr2)

//
let group = {//다양한 타입의 데이터를 가진다 key를 내가 지정
    title: 'art',
    students: ['winston', 'cal', 'maritha'],
    list(){
        this.students.forEach(students =>
            console.log(this.title, ':' , students))
    }
}

group.list()

//
arr = ['hello', 'world', 2]
let greeting = arr.join()// 배열에서 join을 이용한 serializing 
console.log(greeting, typeof greeting)

console.log(arr.join('/'))//구분자를 지정할수있다
// 과제: arr.join()에서 'helloworld2'를 return하라
console.log(arr.join(''))

//
arr = [1, 2, 3]
str = arr.toString()// toString을 이용한 serializing 
console.log(str, typeof str)

//
str = String(arr)
console.log(str, typeof str)

//
str = JSON.stringify(arr) //serializing 을할때 주로쓴다
console.log(str, typeof str)

//
const items = [
    {itemName: 'book', price: 1},
    {itemName: 'computer', price: 100},
    {itemName: 'book', price: 2}
]
//find    iteratig 기반이다 return 값은 boolean
const item = items.find(item => item.itemName == 'book')//callback에서 처음으로 true가 나오는 값을 return
console.log(item)

// iteratig 기반이다 return 값은 boolean
const interest = items.filter((item, i) => item.itemName == 'book')//callback에서 true가 나오는 값을 모두 return
console.log(interest)

//
const elements = items.map((item, i) => 
    `<div>${item.itemName}: ${item.price}</div>`)
console.log(elements)

//
const totalPrice = items.reduce((total, item) =>{//하나만 선택해서 작업할떄
    total += item.price
    return total
}, 0) //초기값은 두번째 파라미터에서
console.log(totalPrice)

//
let isExit = items.some(item => item.itemName == 'book')//하나만 true면 true return, 오리가있어 ?
isExit = items.every(item => item.itemName == 'book')// 모두 true면 true return, 다 오리야 ?
console.log(isExit)