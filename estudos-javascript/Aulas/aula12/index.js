let varA = 'A';
let varB = 'B';
let varC = 'C';
let varD = 'A';

// Minha solução, criando a variável temporária varD;

/**varA = varB;
varB = varC;
varC = varD;

console.log(varA);
console.log(varB);
console.log(varC);
*/

// nova alternativa

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);

