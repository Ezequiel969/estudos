import java.util.Scanner;

public class ExercicioIA01 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a, c, d;
        System.out.println("Digite três números inteiros");
        System.out.println("----------------------------");
        System.out.println("Digite o primeiro número:");
        a = sc.nextInt();
        System.out.println("Digite o segundo número:");
        c = sc.nextInt();
        System.out.println("Digite o terceiro número:");
        d = sc.nextInt();

        double baseMenor, baseMaior, altura;

        System.out.println("Digite a base menor:");
        baseMenor = sc.nextDouble();
        System.out.println("Digite a base maior:");
        baseMaior = sc.nextDouble();
        System.out.println("Digite a altura:");
        altura = sc.nextDouble();

        double mediaInteiros = (double) (a + c + d) / 3;
        System.out.printf("Média dos três números inteiros: %.2f%n ", mediaInteiros);
        if (c != 0) {
            double divisaoAc = (double) a / c;
            System.out.printf("Divisão de a e c: %.2f%n ", divisaoAc);
        } else {
            System.out.println("Divisão de a e c: Indefinida (divisão por zero)");
        }

        double areaTrapezio = (baseMenor + baseMaior) / 2.0 * altura;
        System.out.printf("Área do trapézio: %.2f%n ", areaTrapezio);

        sc.close();

    }
}
