package javacore;
import java.util.Locale;
import java.util.Scanner;

public class Exercicio05 {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner scanner = new Scanner(System.in);

        int codigoPeca1 = scanner.nextInt();
        int quantidadeDePeca1 = scanner.nextInt();
        double valorUnitarioPeca1 = scanner.nextDouble();

        int codigoPeca2 = scanner.nextInt();
        int quantidadeDePeca2 = scanner.nextInt();
        double valorUnitarioPeca2 = scanner.nextDouble();

        double valorTotalPeca1 = quantidadeDePeca1 * valorUnitarioPeca1;
        double valorTotalPeca2 = quantidadeDePeca2 * (valorUnitarioPeca2);

        double valorPagar = valorTotalPeca1 + valorTotalPeca2;

        System.out.printf("VALOR A PAGAR: %.2f", valorPagar);



        scanner.close();
    }
}
