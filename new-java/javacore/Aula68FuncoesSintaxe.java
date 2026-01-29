package academy.lima.kiel.introducao.cursonelio.javacore;
import java.util.Scanner;

/*
Funções (métodos) em Java - Sintaxe
- Declaração de uma função:
  tipoDeRetorno nomeDaFuncao(tipoParametro1 parametro1, tipoParametro2 parametro2, ...) {
      // corpo da função
      return valorDeRetorno; // se o tipoDeRetorno não for void
  }

*/

public class Aula68FuncoesSintaxe {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter three numbers: ");
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        int c = scanner.nextInt();

        int higher = max(a, b, c);

        showResult(higher);


      scanner.close();  
    }
    public static int max(int x, int y, int z){
        int aux;
        if (x > y && x > z) {
            aux = x;            
        }else if (y > x && y > z) {
            aux = y;            
        }else{
            aux = z;
        }
        return aux;        

    }
    public static void showResult(int value){
        System.out.println("Higher = " + value);
    }

}
