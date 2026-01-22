public class Aula04OperadoresAritmeticos01 {
    public static void main(String[] args) {
        // + - * / %
        int numero01 = 10;
        int numero02 = 20;
        int soma = numero01 + numero02;
        int subtracao = numero02 - numero01;
        int multiplicacao = numero01 * numero02;
        double divisao = numero01 / numero02;
        System.out.println("Soma: " + soma);
        System.out.println("Subtração: " + subtracao);
        System.out.println("Multiplicação: " + multiplicacao);
        System.out.println("Divisão: " + divisao);

        // %
        int resto = 21 % 7;
        System.out.println(resto);
        // < > <= >= == !=
        boolean isDezMaiorQueVinte = 10 > 20;
        boolean isDezMenorQueVinte = 10 < 20;
        boolean isDezIgualAVinte = 10 == 20;
        boolean isDezIgualDez = 10 == 10;
        boolean isDezDiferenteDeVinte = 10 != 20;
        System.out.println("10 é maior que 20? " + isDezMaiorQueVinte);
        System.out.println("10 é menor que 20? " + isDezMenorQueVinte);
        System.out.println("10 é igual a 20? " + isDezIgualAVinte);
        System.out.println("10 é igual a 10? " + isDezIgualDez);
        System.out.println("10 é diferente de 20? " + isDezDiferenteDeVinte);

        // && (and) || (or) ! (not)
        int idade = 35;
        float salario = 3500F;
        boolean isDentroDaLeiMaiorQueTrinta = idade > 30 && salario >= 4612;
        boolean isDentroDaLeiMenorQueTrinta = idade < 30 && salario >= 3381;
        System.out.println("Está dentro da lei maior que 30? " + isDentroDaLeiMaiorQueTrinta);
        System.out.println("Está dentro da lei menor que 30? " + isDentroDaLeiMenorQueTrinta);
        // na expressão && booleana acima, os dois valores precisam ser verdadeiros para retornar true
        // ou os dois valores precisam ser falsos para retornar false

        double valorTotalContaCorrente = 200;
        double valorTotalContaPoupança = 5001;
        double valorPlaystation = 5000;
        boolean isPlaystationCincoCompravel = valorTotalContaCorrente > valorPlaystation || valorTotalContaPoupança > valorPlaystation;
        System.out.println("É possível comprar o Playstation 5? " + isPlaystationCincoCompravel);
        // na expressão || booleana acima, apenas um dos valores precisa ser verdadeiro para retornar true

        // = (atribuição) += -= *= /= %=
        double bonus = 1800; // atribuição
        bonus += 1000; // bonus = bonus + 1000
        bonus -= 1000;
        bonus *= 2;
        bonus /= 2;
        bonus %= 2;
        System.out.println("Bonus: " + bonus);
        // ++ --
        int contador = 0;
        contador += 1; // contador = contador + 1
        contador++; // contador = contador + 1
        contador--; // contador = contador - 1
        System.out.println("Contador: " + contador);
        // tem diferença entre usar o ++ antes ou depois da variável
        // depende do momento em que o valor é utilizado
        System.out.println("Contador com ++ antes: " + ++contador); // primeiro incrementa, depois usa o valor
        System.out.println("Contador com ++ depois: " + contador++); // primeiro usa o valor, depois incrementa
        System.out.println("Valor final do contador: " + contador);







    }
}
