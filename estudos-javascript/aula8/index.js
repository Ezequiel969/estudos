/*
Ezequiel Lima tem 29 anos, pesa 92kg
tem 1.85 de altura e seu IMC é de 26.88
Ezequiel nasceu em 1996.

*/
const nome = 'Ezequiel';
const sobrenome = 'Lima';
let idade = 29;
let peso = 92;
let altura = 1.85;
let imc; // peso / (altura * altura);
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 1996;

console.log(nome, sobrenome, 'tem',idade, 'anos, pesa',peso,'kg.'); 
console.log(`tem ${altura}m de altura e seu IMC é ${imc}`);
console.log(nome, sobrenome, 'nasceu em', anoNascimento+'.');


// Se concatenar com ',' (vírgula) já irá incluir um espaço, se concatenar com '+'(mais), não tem espaço.
// pode concatenar com %{} igual está na segunda linha do Console.log
// Template String = crase `` permite a interpolação de variáveis e expressões ${expressão}


