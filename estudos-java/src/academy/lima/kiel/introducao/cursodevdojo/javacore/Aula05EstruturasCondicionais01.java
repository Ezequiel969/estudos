package academy.lima.kiel.introducao.cursodevdojo.javacore;

public class Aula05EstruturasCondicionais01 {
    public static void main(String[] args) {
        int idade = 29;
        boolean isAutorizadoComprarBebiba = idade >= 18;
        // !
        // O if só executa o bloco de código caso a condição seja verdadeira
        // o else precisa ser usado após um if
        if (isAutorizadoComprarBebiba != false) {
            System.out.println("Autorizado a comprar bebida alcólica");
        } else {
            System.out.println("Não Autorizado a comprar bebida alcólica");
        }
        boolean c = true;
        if (c == false) {
            System.out.println("Dentro de algo que nunca deve ser feito");
        }


        System.out.println("Fora do if");
    }
}
