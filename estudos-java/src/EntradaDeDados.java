import java.util.Locale;
import java.util.Scanner;

public class EntradaDeDados {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        String x;
        x = sc.next();
        double z;
        z = sc.nextDouble();
        char y;
        y = sc.next().charAt(0);

        System.out.println("Você digitou: " + x);
        System.out.printf("Você digitou: %.2f%n ", z);
        System.out.printf("Você digitou: %s%n ", y);

        String a;
        int b;
        double c;

        a = sc.next(); // dessa forma os dados serão lidos na mesma linha quando fizer a entrada, separados por espaço
        b = sc.nextInt();
        c = sc.nextDouble();
        System.out.println("Dados digitados");
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);



        sc.close();
    }





}
