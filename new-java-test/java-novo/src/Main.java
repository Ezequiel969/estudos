import database.DatabaseConnection;
import model.Usuario;
import repository.UsuarioRepositoryDB;

import java.util.List;
import java.util.Optional;
import java.util.Scanner;

public class Main {
    private static UsuarioRepositoryDB repository = new UsuarioRepositoryDB();
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        // Inicializa o banco de dados SQLite
        DatabaseConnection.inicializarBanco();
        
        int opcao;

        do {
            exibirMenu();
            opcao = lerInteiro("Escolha uma opção: ");

            switch (opcao) {
                case 1:
                    criarUsuario();
                    break;
                case 2:
                    listarUsuarios();
                    break;
                case 3:
                    buscarUsuario();
                    break;
                case 4:
                    atualizarUsuario();
                    break;
                case 5:
                    removerUsuario();
                    break;
                case 0:
                    System.out.println("Saindo do sistema...");
                    break;
                default:
                    System.out.println("Opção inválida!");
            }

            System.out.println();
        } while (opcao != 0);

        DatabaseConnection.fecharConexao();
        scanner.close();
    }

    private static void exibirMenu() {
        System.out.println("========== CRUD DE USUÁRIOS ==========");
        System.out.println("1. Criar usuário");
        System.out.println("2. Listar todos os usuários");
        System.out.println("3. Buscar usuário por ID");
        System.out.println("4. Atualizar usuário");
        System.out.println("5. Remover usuário");
        System.out.println("0. Sair");
        System.out.println("=======================================");
    }

    private static void criarUsuario() {
        System.out.println("\n--- Criar Novo Usuário ---");
        System.out.print("Nome: ");
        String nome = scanner.nextLine();
        System.out.print("Email: ");
        String email = scanner.nextLine();
        int idade = lerInteiro("Idade: ");

        Usuario usuario = repository.criar(nome, email, idade);
        System.out.println("Usuário criado com sucesso: " + usuario);
    }

    private static void listarUsuarios() {
        System.out.println("\n--- Lista de Usuários ---");
        List<Usuario> usuarios = repository.listarTodos();

        if (usuarios.isEmpty()) {
            System.out.println("Nenhum usuário cadastrado.");
        } else {
            usuarios.forEach(System.out::println);
        }
    }

    private static void buscarUsuario() {
        System.out.println("\n--- Buscar Usuário ---");
        int id = lerInteiro("Digite o ID do usuário: ");

        Optional<Usuario> usuario = repository.buscarPorId(id);
        if (usuario.isPresent()) {
            System.out.println("Usuário encontrado: " + usuario.get());
        } else {
            System.out.println("Usuário não encontrado!");
        }
    }

    private static void atualizarUsuario() {
        System.out.println("\n--- Atualizar Usuário ---");
        int id = lerInteiro("Digite o ID do usuário: ");

        Optional<Usuario> usuarioOpt = repository.buscarPorId(id);
        if (usuarioOpt.isPresent()) {
            System.out.println("Usuário atual: " + usuarioOpt.get());
            System.out.print("Novo nome: ");
            String nome = scanner.nextLine();
            System.out.print("Novo email: ");
            String email = scanner.nextLine();
            int idade = lerInteiro("Nova idade: ");

            if (repository.atualizar(id, nome, email, idade)) {
                System.out.println("Usuário atualizado com sucesso!");
            }
        } else {
            System.out.println("Usuário não encontrado!");
        }
    }

    private static void removerUsuario() {
        System.out.println("\n--- Remover Usuário ---");
        int id = lerInteiro("Digite o ID do usuário: ");

        if (repository.remover(id)) {
            System.out.println("Usuário removido com sucesso!");
        } else {
            System.out.println("Usuário não encontrado!");
        }
    }

    private static int lerInteiro(String mensagem) {
        System.out.print(mensagem);
        while (!scanner.hasNextInt()) {
            System.out.println("Por favor, digite um número válido.");
            scanner.next();
            System.out.print(mensagem);
        }
        int valor = scanner.nextInt();
        scanner.nextLine(); // Limpar buffer
        return valor;
    }
}
