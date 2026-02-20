"""
    Introdução a funções em Python
    Funções são trechos de código que podem ser reutilizados, elas podem ou não receber
    parâmetros e podem ou não retornar um valor.
    por padrão, as funções retornam None, ou seja, nada.
    
"""

# def imprimir(a, b, c): # parâmetros
#     print(a, b, c)


# imprimir(1, 2, 3) # argumentos
# imprimir(4, 5, 6) # sempre que chamar a função, pode alterar os argumentos

def saudacao(nome):
    print(f"Olá {nome}, tenha um bom dia")


nome_saudacao = input("Qual seu nome? ")

saudacao(nome_saudacao)