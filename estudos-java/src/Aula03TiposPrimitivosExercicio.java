/*
   Crie variáveis para os campos descritos abaixo entre <> e imprima a seguinte mensagem:
   "Eu <nome>, morando no endereço <endereço>, confirmo que recebi o meu salário de <salário>, na data <data>."
      */

public class Aula03TiposPrimitivosExercicio {
    public static void main(String[] args) {

        String nome, endereço, data;
        double salário;
        nome = "Kiel";
        endereço = "Odon Cirilo dos Passos 106";
        data = "22/01/2026";
        salário = 2500.00;
        System.out.printf("Eu %s, morando no endereço %s, confirmo que recebi o meu salário de %.2f, na data de %s%n.", nome, endereço, salário, data);
    }

}
