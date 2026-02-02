package javacore;
public class ExpressaoCondicionalTernaria47 {
    public static void main(String[] args) {

        // ============================================================
        // EXPRESSÃO CONDICIONAL TERNÁRIA
        // ============================================================
        // É uma forma RESUMIDA de escrever um IF-ELSE em uma única linha
        //
        // SINTAXE:
        // variavel = (condição) ? valorSeVerdadeiro : valorSeFalso;
        //            |         | |                 | |            |
        //            |         | |                 | |            └─> Valor se a condição for FALSA
        //            |         | |                 | └─────────────> Dois pontos separam os dois valores
        //            |         | |                 └───────────────> Valor se a condição for VERDADEIRA
        //            |         | └─────────────────────────────────> Interrogação separa condição do resultado
        //            |         └───────────────────────────────────> Condição a ser testada (true ou false)
        //            └─────────────────────────────────────────────> Variável que receberá o resultado

        // EXEMPLO PRÁTICO:
        double preco = 34.5;

        // USANDO EXPRESSÃO TERNÁRIA (forma resumida):
        // Lê-se: "desconto recebe: SE preco for maior ou igual a 20, ENTÃO preco * 0.1, SENÃO preco * 0.05"
        double desconto = preco >= 20 ? preco * 0.1 : preco * 0.05;
        //                |___________|   |_________|   |_________|
        //                     |               |             |
        //                  CONDIÇÃO      SE TRUE       SE FALSE
        //                (preco >= 20?)  (10% desc)    (5% desc)

        // PASSO A PASSO da execução:
        // 1. Java avalia a condição: preco >= 20
        // 2. Como preco = 34.5, então 34.5 >= 20 é VERDADEIRO
        // 3. Como é verdadeiro, Java executa o que vem DEPOIS da interrogação (?)
        // 4. Calcula: preco * 0.1 = 34.5 * 0.1 = 3.45
        // 5. Atribui 3.45 para a variável desconto
        // 6. O valor DEPOIS dos dois pontos (:) é IGNORADO porque a condição foi verdadeira

        // EQUIVALENTE COM IF-ELSE (forma tradicional):
        // double desconto;
        // if (preco >= 20) {
        //     desconto = preco * 0.1;  // 10% de desconto
        // } else {
        //     desconto = preco * 0.05; // 5% de desconto
        // }

        // Imprime o resultado: 3.45
        System.out.println(desconto);

        // RESUMO:
        // - Use ternária quando o IF-ELSE for SIMPLES (apenas atribuir um valor)
        // - Use IF-ELSE tradicional quando tiver MÚLTIPLAS linhas de código
        // - A ternária deixa o código mais COMPACTO e ELEGANTE
    }
}
