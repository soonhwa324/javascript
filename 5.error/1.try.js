let json = '{"name": "john", "age": 30}'
let user = JSON.parse(json)//JSON 을 String 으로
console.log(typeof json, typeof user)

json = '{age: 30}'
//JSON.parse(json)

try{
    JSON.parse(json)
}catch{
    console.log('ERROR')
}

try{
    JSON.parse(json)
} catch(e){//error 객체를 e에 담는다
    console.log(e.name, '\n', e.message, '\n', e.stack)
}