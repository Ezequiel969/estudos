import java.util.Scanner;

public class Aula06EntradaDeDados {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um número inteiro: ");
        int primeiroNumero = scanner.nextInt();
        System.out.println("Você digitou: " + primeiroNumero);

        scanner.close();

        // Saída de dados formatada
        String nome = "Kiel";   
        int idade = 25;
        System.out.printf("Meu nome é %s e eu tenho %d anos e eu digitei %d.%n", nome, idade, primeiroNumero);
        
        float salario = 3.0f;
        System.out.printf("o salario é %f%n", salario);

        // saida de dados formatada boolean
        boolean ativo = true;
        System.out.printf("O usuário está ativo? %b%n", ativo);
        // saida de dados formatada caractere
        char sexo = 'M';    
        System.out.printf("O sexo do usuário é: %c%n", sexo);
        // saida de dados formatada double
        double valorConta = 1500.50;
        System.out.printf("O valor da conta é: %.2f%n", valorConta);
        


    }

}
