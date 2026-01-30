package academy.lima.kiel.introducao.cursonelio.javacore;

import java.util.Scanner;

public class Aula57EstruturaRepetitivaFor {
    public static void main(String[] args) {

        // for (inicialização; condição; incremento) {
        //     // bloco de código a ser repetido
        // }
        Scanner scanner = new Scanner(System.in);

        int N = scanner.nextInt();
        int soma = 0;
        for(int i = 0; i < N; i++) {
            int x = scanner.nextInt();
            soma += x; // soma = soma + x
            

        }
        // 

        System.out.println(soma);

     





        scanner.close();
    }

}
