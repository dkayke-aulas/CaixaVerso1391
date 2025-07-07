// VARIAVEIS
console.info('********** VARIAVEIS')
var a = 1
console.log(a) // 1

var b = 2, c = 3
console.log(b, c) // 2 3

var d = 4, e = d
console.log(d, e) // 4 4

var f = g = 5
console.log(f, g) // 5 5

var h = i, i = 6
console.log(h, i) // undefined 6

var j = k = l = m = 7, n = k
console.log(j, k, l, m, n) // 7 7 7 7 7


// HOISTING
console.info('\n\n********** HOISTING')
console.log(variave_1) // undefined

variave_1 = 'banana'

console.log(variave_1) // banana

var variave_1 = 'abacate'

console.log(variave_1) // abacate
