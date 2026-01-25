package academy.lima.kiel.introducao.cursonelio.javacore;
import java.util.Locale;
import java.util.Scanner;

public class Exercicio04 {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner scanner = new Scanner(System.in);
        int numeroEmpregado = scanner.nextInt();
        int horasTrabalhadas = scanner.nextInt();
        double valorPorHora = scanner.nextDouble();
        double salario = horasTrabalhadas * valorPorHora;
        System.out.println("NUMBER = " + numeroEmpregado);
        System.out.printf("SALARY = U$ %.2f%n", salario);

        scanner.close();
    }
}
