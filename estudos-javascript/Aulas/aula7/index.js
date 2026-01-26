// Podemos criar a constantes sem a iniciar
// Não podemos redeclarar contantes com const
// Não podemos criar constantes com palavras reservadas!!
// Constantes precisam ter nomes significativos. Ex: nomeCliente ao invés de n, ou nome
// Não podemos começar o nome de uma constante com número.
// O nome das constantes não podem ter espaços e/ou traços.
// Não podemos modificar o valor de uma constante.
// Caso precise criar constantes com nomes compostos, utilize camelCase.
// Ao declarar constantes, elas são case sensitive, ou seja, a constante nomeCliente e nomecliente são diferentes.
// Não utilize VAR Utilize CONST.
// Constantes precisam ser inicializadas ao declarar.
// Dentro de ''/"" é String, fora é numero (Number)
const nome = 'João';
console.log(nome);
console.log(typeof(nome));


let contador = 1;
contador++;
console.log("Após o incremento (contador++):", contador); // 6
++contador;
console.log("Após o pré-incremento (++contador):", contador); // 7