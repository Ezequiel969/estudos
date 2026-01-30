package server;

import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import database.DatabaseConnection;
import model.Usuario;
import repository.UsuarioRepositoryDB;

import java.io.*;
import java.net.InetSocketAddress;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Optional;

public class WebServer {
    private static final int PORT = 8080;
    private static UsuarioRepositoryDB repository = new UsuarioRepositoryDB();

    public static void main(String[] args) throws IOException {
        DatabaseConnection.inicializarBanco();
        
        HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);
        
        // Static files
        server.createContext("/", new StaticFileHandler());
        
        // API endpoints
        server.createContext("/api/usuarios", new UsuarioHandler());
        
        server.setExecutor(null);
        server.start();
        
        System.out.println("========================================");
        System.out.println("   Servidor rodando em http://localhost:" + PORT);
        System.out.println("   Pressione Ctrl+C para parar");
        System.out.println("========================================");
    }

    // Handler para arquivos estáticos
    static class StaticFileHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String path = exchange.getRequestURI().getPath();
            if (path.equals("/")) path = "/index.html";
            
            File file = new File("../public" + path);
            
            if (file.exists() && file.isFile()) {
                String contentType = getContentType(path);
                exchange.getResponseHeaders().set("Content-Type", contentType);
                exchange.sendResponseHeaders(200, file.length());
                
                try (OutputStream os = exchange.getResponseBody();
                     FileInputStream fis = new FileInputStream(file)) {
                    fis.transferTo(os);
                }
            } else {
                String response = "404 Not Found";
                exchange.sendResponseHeaders(404, response.length());
                try (OutputStream os = exchange.getResponseBody()) {
                    os.write(response.getBytes());
                }
            }
        }
        
        private String getContentType(String path) {
            if (path.endsWith(".html")) return "text/html";
            if (path.endsWith(".css")) return "text/css";
            if (path.endsWith(".js")) return "application/javascript";
            return "text/plain";
        }
    }

    // Handler para API de usuários
    static class UsuarioHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            // CORS headers
            exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "*");
            exchange.getResponseHeaders().set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            exchange.getResponseHeaders().set("Access-Control-Allow-Headers", "Content-Type");
            exchange.getResponseHeaders().set("Content-Type", "application/json");

            String method = exchange.getRequestMethod();
            String path = exchange.getRequestURI().getPath();
            
            // Handle preflight
            if (method.equals("OPTIONS")) {
                exchange.sendResponseHeaders(200, -1);
                return;
            }

            String response = "";
            int statusCode = 200;

            try {
                switch (method) {
                    case "GET":
                        response = handleGet(path);
                        break;
                    case "POST":
                        response = handlePost(exchange);
                        statusCode = 201;
                        break;
                    case "PUT":
                        response = handlePut(exchange, path);
                        break;
                    case "DELETE":
                        response = handleDelete(path);
                        break;
                    default:
                        response = "{\"error\": \"Método não suportado\"}";
                        statusCode = 405;
                }
            } catch (Exception e) {
                response = "{\"error\": \"" + e.getMessage() + "\"}";
                statusCode = 500;
            }

            exchange.sendResponseHeaders(statusCode, response.getBytes().length);
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(response.getBytes());
            }
        }

        private String handleGet(String path) {
            // GET /api/usuarios/{id}
            if (path.matches("/api/usuarios/\\d+")) {
                int id = Integer.parseInt(path.substring(path.lastIndexOf('/') + 1));
                Optional<Usuario> usuario = repository.buscarPorId(id);
                if (usuario.isPresent()) {
                    return usuarioToJson(usuario.get());
                }
                return "{\"error\": \"Usuário não encontrado\"}";
            }
            
            // GET /api/usuarios
            List<Usuario> usuarios = repository.listarTodos();
            return usuariosToJson(usuarios);
        }

        private String handlePost(HttpExchange exchange) throws IOException {
            String body = new String(exchange.getRequestBody().readAllBytes());
            String nome = extractJsonValue(body, "nome");
            String email = extractJsonValue(body, "email");
            int idade = Integer.parseInt(extractJsonValue(body, "idade"));
            
            Usuario usuario = repository.criar(nome, email, idade);
            return usuarioToJson(usuario);
        }

        private String handlePut(HttpExchange exchange, String path) throws IOException {
            int id = Integer.parseInt(path.substring(path.lastIndexOf('/') + 1));
            String body = new String(exchange.getRequestBody().readAllBytes());
            
            String nome = extractJsonValue(body, "nome");
            String email = extractJsonValue(body, "email");
            int idade = Integer.parseInt(extractJsonValue(body, "idade"));
            
            boolean updated = repository.atualizar(id, nome, email, idade);
            if (updated) {
                return "{\"success\": true, \"message\": \"Usuário atualizado\"}";
            }
            return "{\"error\": \"Usuário não encontrado\"}";
        }

        private String handleDelete(String path) {
            int id = Integer.parseInt(path.substring(path.lastIndexOf('/') + 1));
            boolean deleted = repository.remover(id);
            if (deleted) {
                return "{\"success\": true, \"message\": \"Usuário removido\"}";
            }
            return "{\"error\": \"Usuário não encontrado\"}";
        }

        // Simple JSON helpers (sem dependências externas)
        private String usuarioToJson(Usuario u) {
            return String.format(
                "{\"id\": %d, \"nome\": \"%s\", \"email\": \"%s\", \"idade\": %d}",
                u.getId(), u.getNome(), u.getEmail(), u.getIdade()
            );
        }

        private String usuariosToJson(List<Usuario> usuarios) {
            StringBuilder sb = new StringBuilder("[");
            for (int i = 0; i < usuarios.size(); i++) {
                sb.append(usuarioToJson(usuarios.get(i)));
                if (i < usuarios.size() - 1) sb.append(",");
            }
            sb.append("]");
            return sb.toString();
        }

        private String extractJsonValue(String json, String key) {
            String pattern = "\"" + key + "\"\\s*:\\s*";
            int start = json.indexOf("\"" + key + "\"");
            if (start == -1) return "";
            
            start = json.indexOf(":", start) + 1;
            while (json.charAt(start) == ' ') start++;
            
            if (json.charAt(start) == '"') {
                start++;
                int end = json.indexOf("\"", start);
                return json.substring(start, end);
            } else {
                int end = start;
                while (end < json.length() && (Character.isDigit(json.charAt(end)) || json.charAt(end) == '-')) {
                    end++;
                }
                return json.substring(start, end);
            }
        }
    }
}
