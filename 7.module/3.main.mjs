import {greet, add} from './1.named.mjs'// export한 이름 그대로쓴다
import * as named from './1.named.mjs'//전부 가져올떄 *
import div from './2.default.mjs'

console.log(greet, add(1, 3))
console.log(named.greet, named.add(1, 2))

console.log(div(4, 2))