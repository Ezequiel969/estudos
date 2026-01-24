/**
 *  Operadores Relacionais em JavaScript
 *  Os operadores relacionais são usados para comparar dois valores e retornam um valor booleano (true ou false) com base na comparação.
 *  Aqui estão os principais operadores relacionais:
 *  1. Igualdade (==): Verifica se dois valores são iguais, realizando coerção de tipo se necessário.
 *  2. Estritamente Igual (===): Verifica se dois valores são iguais sem realizar coerção de tipo.
 *  3. Diferente (!=): Verifica se dois valores são diferentes, realizando coerção de tipo se necessário.
 *  4. Estritamente Diferente (!==): Verifica se dois valores são diferentes sem realizar coerção de tipo.
    *  5. Maior que (>): Verifica se o valor à esquerda é maior que o valor à direita.
 *  6. Menor que (<): Verifica se o valor à esquerda é menor que o valor à direita.
 */ 



      // false, coerção de tipo ocorre
let pedidoMinimo = 20
let pedidoCliente = 25
let resultado = pedidoCliente > pedidoMinimo // true

if (pedidoCliente > pedidoMinimo) {
    console.log("Pedido aceito")
} else {
    console.log("Pedido rejeitado")
}

let resultadoBooleano = true && true // true
console.log(resultadoBooleano)
resultadoBooleano = 2==3 && 1==1 // false
console.log(resultadoBooleano)
resultadoBooleano = 2==2 || 1==3 // true
console.log(resultadoBooleano)
// o && e || são usados para combinar expressões booleanas
// o && retorna true se ambas as expressões forem verdadeiras
// o || retorna true se pelo menos uma das expressões for verdadeira