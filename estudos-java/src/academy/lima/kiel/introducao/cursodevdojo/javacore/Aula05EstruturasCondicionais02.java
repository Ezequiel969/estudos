package academy.lima.kiel.introducao.cursodevdojo.javacore;

public class Aula05EstruturasCondicionais02 {
    public static void main(String[] args) {
        // idade < 15 - criança
        // idade >= 15 && idade < 18 - adolescente
        // idade >= 18 && idade < 60 - adulto
        // idade >= 60 - idoso
        int idade = 40;
        if (idade < 15) {
            System.out.println("Criança");
        } else if (idade >= 15 && idade < 18) {
            System.out.println("Adolescente");
        } else if (idade >= 18 && idade < 60) {
            System.out.println("Adulto");
        } else {
            System.out.println("Idoso");
        }
    }

}