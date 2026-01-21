import java.util.Locale;

public class SaidaDeDados {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        int y = 32;
        double x = 10.35784;
        double renda = 4.000;
        String nome = "Maria";
        System.out.printf("%.2f\n", x);
        System.out.printf("%.4f\n", x);
        System.out.println(y);
        System.out.println("RESULTADO = " + x + " METROS");
        System.out.printf("RESULTADO = %.2f METROS%n", x);
        System.out.printf("RESULTADO = %.2f METROS%n", x);
        System.out.printf("%s tem %d anos e ganha R$ %.3f reais %n", nome, y, renda);
    }
}
