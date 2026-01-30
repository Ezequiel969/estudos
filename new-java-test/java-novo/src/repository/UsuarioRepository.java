package repository;

import model.Usuario;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class UsuarioRepository {
    private List<Usuario> usuarios = new ArrayList<>();
    private int proximoId = 1;

    // CREATE - Criar usuário
    public Usuario criar(String nome, String email, int idade) {
        Usuario usuario = new Usuario(proximoId++, nome, email, idade);
        usuarios.add(usuario);
        return usuario;
    }

    // READ - Listar todos os usuários
    public List<Usuario> listarTodos() {
        return new ArrayList<>(usuarios);
    }

    // READ - Buscar usuário por ID
    public Optional<Usuario> buscarPorId(int id) {
        return usuarios.stream()
                .filter(u -> u.getId() == id)
                .findFirst();
    }

    // UPDATE - Atualizar usuário
    public boolean atualizar(int id, String nome, String email, int idade) {
        Optional<Usuario> usuarioOpt = buscarPorId(id);
        if (usuarioOpt.isPresent()) {
            Usuario usuario = usuarioOpt.get();
            usuario.setNome(nome);
            usuario.setEmail(email);
            usuario.setIdade(idade);
            return true;
        }
        return false;
    }

    // DELETE - Remover usuário
    public boolean remover(int id) {
        return usuarios.removeIf(u -> u.getId() == id);
    }
}
