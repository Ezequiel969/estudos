package academy.lima.kiel.introducao.cursonelio;

import java.util.Locale;
import java.util.Scanner;

public class Exercicio02 {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner scanner = new Scanner(System.in);
        double pi = 3.14159;
        double raio = scanner.nextDouble();
        double area = pi * raio * raio; // raio * raio é igual a raio²
        System.out.printf("A=%.4f%n", area);



        scanner.close();
    }
}
