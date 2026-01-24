package academy.lima.kiel.introducao.cursonelio;

import java.util.Locale;
import java.util.Scanner;

public class ExerciciosEstruturasCondicionais04 {
    /***
     * EXERCÍCIO: QUADRANTES DO PLANO CARTESIANO
     *
     * Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas
     * de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o
     * ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).
     * Se o ponto estiver na origem, escreva a mensagem "Origem".
     * Se o ponto estiver sobre um dos eixos escreva "Eixo X" ou "Eixo Y", conforme for a
     * situação.
     *
     * ============================================================================
     * CONCEITO DE QUADRANTES - EXPLICAÇÃO DETALHADA:
     * ============================================================================
     *
     * O plano cartesiano é dividido em 4 quadrantes por dois eixos perpendiculares:
     * - Eixo X (horizontal): valores negativos à esquerda, positivos à direita
     * - Eixo Y (vertical): valores negativos abaixo, positivos acima
     *
     * Visualização do plano cartesiano:
     *
     *           Eixo Y (vertical)
     *                 ↑
     *                 |
     *       Q2        |        Q1
     *    (x-, y+)     |     (x+, y+)
     *                 |
     * ←---------------+---------------→  Eixo X (horizontal)
     *      (0,0) = Origem
     *                 |
     *       Q3        |        Q4
     *    (x-, y-)     |     (x+, y-)
     *                 |
     *                 ↓
     *
     * RESUMO DOS QUADRANTES:
     * - Q1 (Quadrante 1): x POSITIVO e y POSITIVO (canto superior direito)
     * - Q2 (Quadrante 2): x NEGATIVO e y POSITIVO (canto superior esquerdo)
     * - Q3 (Quadrante 3): x NEGATIVO e y NEGATIVO (canto inferior esquerdo)
     * - Q4 (Quadrante 4): x POSITIVO e y NEGATIVO (canto inferior direito)
     *
     * EXEMPLOS PRÁTICOS:
     * - Ponto (4.0, 5.0)   → Q1 (x positivo E y positivo)
     * - Ponto (-3.0, 2.0)  → Q2 (x negativo E y positivo)
     * - Ponto (-1.0, -7.0) → Q3 (x negativo E y negativo)
     * - Ponto (8.0, -2.0)  → Q4 (x positivo E y negativo)
     * - Ponto (0.0, 0.0)   → Origem (ambos zero)
     * - Ponto (5.0, 0.0)   → Eixo X (y é zero, mas x não)
     * - Ponto (0.0, 3.0)   → Eixo Y (x é zero, mas y não)
     *
     */
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner scanner = new Scanner(System.in);

        // Lê as coordenadas do ponto no plano cartesiano
        double x = scanner.nextDouble(); // Coordenada X (posição horizontal)
        double y = scanner.nextDouble(); // Coordenada Y (posição vertical)

        // ============================================================================
        // IMPORTANTE: A ordem das verificações importa!
        // Começamos pelos casos especiais (origem e eixos) antes dos quadrantes
        // ============================================================================

        // 1º CASO: Verifica se o ponto está na ORIGEM (centro do plano)
        // Isso acontece quando AMBOS x E y são zero (0, 0)
        // A origem é o ponto onde os dois eixos se cruzam
        if (x == 0 && y == 0) {
            System.out.println("Origem");
        }
        // 2º CASO: Verifica se o ponto está sobre o EIXO Y (linha vertical)
        // Isso acontece quando x é zero, mas y NÃO é zero
        // Exemplos: (0, 5), (0, -3), (0, 10.5) - todos estão no eixo Y
        // Pense: se x=0, o ponto não se move para esquerda nem direita, só sobe/desce
        else if (x == 0) {
            System.out.println("Eixo Y");
        }
        // 3º CASO: Verifica se o ponto está sobre o EIXO X (linha horizontal)
        // Isso acontece quando y é zero, mas x NÃO é zero
        // Exemplos: (7, 0), (-2, 0), (15.3, 0) - todos estão no eixo X
        // Pense: se y=0, o ponto não se move para cima nem baixo, só para os lados
        else if (y == 0) {
            System.out.println("Eixo X");
        }
        // 4º CASO: QUADRANTE 1 (superior direito)
        // x é POSITIVO (à direita do eixo Y) E y é POSITIVO (acima do eixo X)
        // Exemplo: (4, 5) → x=4 (direita) e y=5 (cima) = canto superior direito
        // Ambos os valores são maiores que zero
        else if (x > 0 && y > 0) {
            System.out.println("Q1");
        }
        // 5º CASO: QUADRANTE 2 (superior esquerdo)
        // x é NEGATIVO (à esquerda do eixo Y) E y é POSITIVO (acima do eixo X)
        // Exemplo: (-3, 2) → x=-3 (esquerda) e y=2 (cima) = canto superior esquerdo
        // x é negativo, mas y é positivo
        else if (x < 0 && y > 0) {
            System.out.println("Q2");
        }
        // 6º CASO: QUADRANTE 3 (inferior esquerdo)
        // x é NEGATIVO (à esquerda do eixo Y) E y é NEGATIVO (abaixo do eixo X)
        // Exemplo: (-1, -7) → x=-1 (esquerda) e y=-7 (baixo) = canto inferior esquerdo
        // Ambos os valores são menores que zero
        else if (x < 0 && y < 0) {
            System.out.println("Q3");
        }
        // 7º CASO: QUADRANTE 4 (inferior direito)
        // x é POSITIVO (à direita do eixo Y) E y é NEGATIVO (abaixo do eixo X)
        // Exemplo: (8, -2) → x=8 (direita) e y=-2 (baixo) = canto inferior direito
        // x é positivo, mas y é negativo
        else if (x > 0 && y < 0) {
            System.out.println("Q4");
        }

        scanner.close();
    }
}
