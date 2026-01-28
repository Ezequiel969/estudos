# AULA 24 - Operadores in e not in
# in = verifica se algo EXISTE dentro de outro
# not in = verifica se algo NÃO EXISTE
# Funciona com strings, listas, etc.

# Índices de string:
#  0 1 2 3 4 5
#  O t á v i o
# -6-5-4-3-2-1

nome = input('Digite seu nome: ')
encontrar = input('Digite o que deseja encontrar: ')

if encontrar in nome:  # Verifica se 'encontrar' está dentro de 'nome'
    print(f'{encontrar} está em {nome}')
else:
    print(f'{encontrar} não está em {nome}')