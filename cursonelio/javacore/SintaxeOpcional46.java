package javacore;
import java.util.Locale;
import java.util.Scanner;

public class SintaxeOpcional46 {
    public static void main(String[] args) {
        /**
         * Fazer um programa para ler um valor inteiro de 1 a 7 e escrever o dia da semana correspondente.
         * sendo que 1 corresponde a domingo, 2 a segunda-feira, e assim por diante.
         */
        Scanner scanner = new Scanner(System.in);
        Locale.setDefault(Locale.US);
        int dia = scanner.nextInt();
        switch (dia) {
            case 1:
                System.out.println("Domingo");
                break;
            case 2:
                System.out.println("Segunda-feira");
                break;
            case 3:
                System.out.println("Terça-feira");
                break;
            case 4:
                System.out.println("Quarta-feira");
                break;
            case 5:
                System.out.println("Quinta-feira");
                break;
            case 6:
                System.out.println("Sexta-feira");
                break;
            case 7:
                System.out.println("Sábado");
                break;
        } //

        scanner.close();
    }
}