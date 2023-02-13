console.log(Date())
console.log(typeof Date())

let date = new Date()
console.log(date)
console.log(typeof date)
console.log(date.toLocaleDateString())

date = new Date('2023-02-10T01:37:30.999z')//utc시간이라 한국시간은 -9해야한다
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

console.log(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getUTCHours(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds(),
    date.getDay()
)
//timestamp
console.log(date.getTime())//시간을 나타내는 숫자값을 타임스탬프라 한다 , ms단위
console.log(Date.now())

date = new Date(0)//기준 날일시
console.log(date)

date = new Date(1000 * 60 * 60 * 24)//다음날
console.log(date)

date = new Date(-1000 * 60 * 60 * 24)//전날
console.log(date)