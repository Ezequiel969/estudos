/**
 * Widening casting vs Narrowing casting
 */

public class Aula05ConversaoDeTipos {
    public static void main(String[] args) {
       
        byte variavelPequena = 1;
        int variavelGrande = variavelPequena; // wid
        
        short variavelShort = 10;
        int variavelInt = variavelShort; // widening

        // Narrowing casting (casting explícito)
        long variavelLong = 231331231331313L;
        int variavelInt2 = (int) variavelLong; // narrowing
        System.out.println("Variável int após narrowing: " + variavelInt2);

        // Operações de divisão entre números inteiros
        int numero1 = 9;
        int numero2 = 2;
        float resultadoDivisao = (float) numero1 / numero2; // casting explícito para float
        System.out.println("Resultado da divisão:  " + resultadoDivisao);
        
    }

}