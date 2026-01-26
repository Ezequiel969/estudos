package academy.lima.kiel.introducao.cursonelio.javaOO.aplications;

import academy.lima.kiel.introducao.cursonelio.javaOO.entities.Produtos;

import java.util.Locale;
import java.util.Scanner;

public class EstoqueProdutos {
    public static void main(String[] args) {
    Locale.setDefault(Locale.US);
    Scanner scanner = new Scanner(System.in);
    Produtos produto = new Produtos();
        System.out.println("Digite o nome do produto: ");
        System.out.print("Nome: ");
        produto.nome = scanner.nextLine();
        System.out.print("Preço: ");
        produto.preco = scanner.nextDouble();
        System.out.print("Quantidade: ");
        produto.quantidade = scanner.nextInt();

        System.out.println(produto.nome + ", " + produto.preco + ", " + produto.quantidade);






    scanner.close();
    }
}
