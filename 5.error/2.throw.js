let json = '{age: 30}'

try{
    let user = JSON.parse(json)

    //과제: user 객체가 있으면, user.age를 출력하라.
    user && console.log(user.age)

    if(user) console.log(user.age)
    else throw new SyntaxError('user가 없습니다.')
} catch(e){
    if(e instanceof SyntaxError)
        console.log('ERROR] ' + e.message)
    else throw e
}   