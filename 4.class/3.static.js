class Article{
    static publisher = 'ddanzi'

    constructor(title, viewCnt){
        this.title = title
        this.viewCnt = viewCnt
    }

    static compare(article1, aritcle2){
        return article1 - aritcle2
    }

    [Symbol.toPrimitive](hint){
        return hint == 'number' ? this.viewCnt : this.title
    }
/*
    toString(){
        return this.title
    }

    valueOf(){
        return this.viewCnt
    }
    */
   
}

console.log(Article.publisher)

Article.address = 'seoul'// class. 하고 쓴다
console.log(Article.address)

Article.getPrice = () => 2000
console.log(Article.getPrice())

//
let article1 = new Article('java', 100)
let aritcle2 = new Article('javascript', 10)

console.log(Article.compare(article1, aritcle2))

//
console.log(`${article1}`)
console.log(article1 + '')

//
console.log(article1.publisher, aritcle2.publisher, article1.compare)
console.log(Article.title, Article.viewCnt)

console.log(Object.keys(Article))
console.log(Article.prototype)
console.log(Object.keys(article1))

let articles = [article1, aritcle2]
console.log(articles)

articles.sort(Article.compare)// 정렬  (정렬기준)
articles.sort((a, b) => a - b) //57번과 같은뜻 오름차순정렬
articles.sort((a, b) => b - a) // 내림차순 정렬
console.log(articles)