package academy.lima.kiel.introducao.cursonelio;

import java.util.Scanner;

public class ExerciciosEstruturasCondicionais01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int numero = scanner.nextInt();

        if(numero > 0){
            System.out.println("POSITIVO");
        }else {
            System.out.println("NEGATIVO");
        }
    }
}
