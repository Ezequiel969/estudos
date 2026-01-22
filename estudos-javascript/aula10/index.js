/**
 * OPERADORES ARITMÉTICOS
 * + adição / concatenação
 * - subtração
 * * multiplicação
 * / divisão
 * % resto (módulo)
 * ** potenciação
 */

const num1 = 2;
const num2 = 10;

console.log("Adição:", num1 + num2);           // 12
console.log("Subtração:", num2 - num1);        // 8
console.log("Multiplicação:", num1 * num2);    // 20
console.log("Divisão:", num2 / num1);          // 5
console.log("Resto:", num2 % num1);            // 0
console.log("Potenciação:", num1 ** num2);     // 1024

// Ordem de precedência: ( ) >> ** >> * / % >> + -

// ===== CONTADORES =====
let contador = 0;

// Incremento
contador++;
console.log("\nIncremento (++):", contador);    // 1

// Decremento
contador--;
console.log("Decremento (--):", contador);     // 0

// Atribuição com operação
contador += 5;
console.log("Somar 5 (+=):", contador);        // 5
contador -= 2;
console.log("Subtrair 2 (-=):", contador);     // 3
contador *= 2;
console.log("Multiplicar por 2 (*=):", contador); // 6

// parseInt e parseFloat
const valorString1 = "15";
const valorString2 = "3.14";
const inteiro = parseInt(valorString1);
const float = parseFloat(valorString2);
console.log("\nValor inteiro:", inteiro);      // 15
console.log("Valor float:", float);            // 3.14
// parseInt() para inteiros, parseFloat() para números decimais
// Number() pode ser usado para ambos


