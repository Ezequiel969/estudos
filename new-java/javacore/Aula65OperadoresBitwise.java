package academy.lima.kiel.introducao.cursonelio.javacore;

public class Aula65OperadoresBitwise {
    /**
     *  * Operadores Bitwise
     *  * &  - AND
     * * |  - OR
     * * ^  - XOR
     * * ~  - NOT
     *  os operadores bitwise operam em nível de bits, ou seja, eles manipulam os bits individuais de números inteiros.
     *  alem disso, os operadores bitwise são frequentemente usados em programação de baixo nível, como em sistemas embarcados, drivers de dispositivos e otimizações de desempenho.
     *  Exemplos: 
     *    *  AND (&):
     *    *  5 & 3 = 1
     *   *    *  0101 (5 em binário)
     *  *    *  0011 (3 em binário)
     *  *    *  -----
     * 
     * 
     */
    public static void main(String[] args) {
        
        int n1 = 89;
        int n2 = 60;
        System.out.println(n1 & n2);
        System.out.println(n1 | n2);
        System.out.println(n1 ^ n2);
    }

}
