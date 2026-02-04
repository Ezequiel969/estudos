"""
    Exercício
    exiba os indices dessa lista
    0 maria
    1 helena
    2 luiz

 """
 
lista = ['Maria', 'Helena', 'Luiz']
lista.append('Ex viciado')
indices = range(len(lista))

for indice in indices:
    print(indice, lista[indice], type(lista[indice]))


# for nome in enumerate(lista):
#     print(nome, type(nome))