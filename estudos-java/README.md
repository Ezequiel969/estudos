# Estudos Java

Projeto de estudos de Java com exercícios de diferentes cursos.

## Estrutura do Projeto

```
src/
├── academy/
│   └── lima/
│       └── kiel/
│           └── introducao/
│               ├── cursonelio/
│               │   ├── javacore/      # Exercícios do curso Nelio
│               │   └── javaOO/        # Exercícios OO do curso Nelio
│               └── cursodevdojo/
│                   └── javacore/      # Exercícios do Dev Dojo
```

## Compilação

### Compilar todo o projeto:

```bash
cd c:\Users\Kiel\IdeaProjects\estudos\estudos-java
javac -d . src/academy/lima/kiel/introducao/cursonelio/javacore/*.java src/academy/lima/kiel/introducao/cursodevdojo/javacore/*.java src/academy/lima/kiel/introducao/cursonelio/javaOO/entities/*.java src/academy/lima/kiel/introducao/cursonelio/javaOO/aplications/*.java
```

### Executar um programa:

```bash
java -cp . academy.lima.kiel.introducao.cursonelio.javacore.SintaxeOpcional46
```

## Programas Disponíveis

### Curso Nelio - javacore:
- `SintaxeOpcional46` - Dia da semana
- `ExerciciosEstruturasCondicionais03` - Exercício de intervalos
- E outros exercícios e aulas

### Dev Dojo - javacore:
- `Aula01OlaDevDojo` - Primeiro programa
- `Aula02TiposPrimitivos` - Tipos primitivos
- E outras aulas

### OO - Aplicações:
- `ProgramaProduto` - Programa com classe Produto
- `ProgramTriangle` - Programa com classe Triangle

## Git

O projeto está versionado no GitHub: https://github.com/Ezequiel969/estudos.git
