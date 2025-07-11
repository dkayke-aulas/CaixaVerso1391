console.info('\n\n********** LET and CONST')
let marcio
marcio = 'produtivo'
console.log(marcio)

const floresta = 'madeira'
console.log(floresta)



console.info('\n\n********** ESCOPO')
let veiculo = 'carroça'
let fruta = 'cagaita'
console.log(nome)
{
    console.log('*** escopo interno')
    let fruta = 'siriguela'
    fruta = 'kiwi'
    let animal = 'pangolim'
    let veiculo = 'bicicleta'

    nome = 'Kayke'
    console.log(nome)
    console.log(animal)
    console.log(fruta)
    console.log(veiculo)
}
var nome = "Dannyel"
console.log('\n*** escopo externo')
console.log(nome)
console.log(fruta)
console.log(veiculo)



console.info('\n\n********** OPERADORES')
// operadores unários
// negação !
const professorPossuiDinheiro = false
console.log(!professorPossuiDinheiro)

// false = 0, "", undefined, null, NaN
const ehNascido = NaN
console.log(!!ehNascido)


// coerção - +
const True = true
const False = false

console.log(+True)
console.log(-True)
console.log(+False)
console.log(-False)

const texto = "texto"
console.log(+texto)

const numero = -5
console.log(-numero)

// operador relacional in

const pessoa = { nome: "Rodoaldo", idade: 28 }

console.log('nome' in pessoa)
console.log('idade' in pessoa)

if ('idade' in pessoa) {
    // if(pessoa.idade !== undefined) {
    console.log(pessoa.idade.toFixed(2))
}

const listaDeCompra = ['Dannyel', 28]
console.log(2 in listaDeCompra)

// incremento e decremento ++ --
let quantidade = 0
console.log(quantidade--)
console.log(--quantidade)

// operadores binário
// aritmético
const x = 10
const y = 20

console.log(x + y) // 10 + 20
console.log(x - y) // 10 - 20
console.log(y / x) // 20 / 10
console.log(y * x) // 20 * 10
console.log(x ** 2) // 10 * 2
console.log(y % 2) // 20 / 2 = 0

let a = 3
a **= 2 // a = a ** 2
console.log(a)

// // comparação
const valorA = 10
const valorB = '10'

console.log(valorA == valorB) // true
console.log(valorA === valorB) // false

console.log(valorA != valorB) // false
console.log(valorA !== valorB) // true

// lógico aritmético
const c = 10
const d = 20

console.log(c > d) // 10 > 20
console.log(c < d) // 10 < 20
console.log(c >= d) // 10 >= 20
console.log(c <= d) // 10 <= 20

// lógico
const e = true
const f = false

console.log(e && e) // true && true
console.log(e && f) // true && false
console.log(f && f) // false && false
console.log(f && e) // false && true

console.log('')

console.log(f || f) // false || false
console.log(e || e) // true || true
console.log(e || f) // true || false
console.log(f || e) // false || true

console.log(true || false && true)

console.log(undefined ?? true)

// ternario

const idade = 18
const ehMaiorIdade = idade >= 18 ? 'SIM' : 'NÃO'
console.log(ehMaiorIdade)


console.info('\n\n********** ARRAY')
const frutas = ['abacate', 'banana', 'carambola']
const legumes = ['abacate', 'banana', 'carambola']

frutas[1] = 'melancia'

console.log(frutas)