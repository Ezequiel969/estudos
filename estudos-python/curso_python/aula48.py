"""
Listas em Python
Tipo list - Mutável
Suporta vários valores de qualquer tipo
Conhecimentos reutilizáveis - índices e fatiamento
Métodos úteis: append, insert, pop, del, clear, extend, +
"""

"""
Listas em Python
Tipo list - Mutável
Suporta vários valores de qualquer tipo
Conhecimentos reutilizáveis - índices e fatiamento
Métodos úteis:
    append, insert, pop, del, clear, extend, +
Create Read Update   Delete
Criar, ler, alterar, apagar = lista[i] (CRUD)
"""

# string = 'ABCDE' # 5 CARACTERES (len)
# #         0     1          2          3     4     5
# lista = [123, True, 'Ezequiel Lima', 1.2, False, []] # '' igual criar uma string vazia, é contado por item, que são tudo entre as vírgulas, exemplo: 'Ezequiel Lima' é UM item.
# # print(bool([])) # False
# # print(lista, type(lista))
# lista[2] = 'Novo Ezequiel Lima' # como lista é um tipo MUTÁVEL, você pode alterar o valor da lista.
# print(lista)
# print(lista[2]) 
#        -4  -3 -2 -1
#        0   1    2   3

# lista[2] = 300
# del lista[2]  # apaga o item da lista e atualiza o índice. Esse processo de moover os itens na lista gasta muito processamento, deixando o programa lento, é recomendável evitar isso.
# # é interessante adicionar e remover itens do FINAL da lista
# print(lista)
# print(lista[2])


# remove o último append

 # o append pode ser adicionado quantas vezes você quiser.
# lista = [10, 20, 30, 40]
# lista.append('Kiel')
# lista.pop() # pode adicionar o índice que deseja remover no parênteses do pop.()
# lista.append(1233)
# del lista[-1]
# # lista.clear()
# lista.insert(0, 'Ezequiel Lima')
# print(lista)


# essas alterações são recomendáveis para listas pequenas, se alista for grande é recomendável que evite mexer no inicio ou meio da lista, melhor mexer no final se for grande.

# lista_a = [1, 2, 3, 'Kiel Limas']
# lista_b = [4, 5, 6]
# lista_c = lista_a + lista_b
# lista_a.extend(lista_b)
# print(lista_a)

"""
Cuidados com dados mutáveis
= - copiado o valor (imutáveis)
= - aponta para o mesmo valor na memória (mutável)
"""

lista_a = ['Kiel', 'Mari', 1, True, 1.2]
lista_b = lista_a.copy() # agora sim copia a lista a pra dentro da lista b

lista_a[0] = "Ezequiel"  # como aponta para o mesmo lugar na memória, quando altera um, altera o outro também!

print(lista_a)
print(lista_b)

