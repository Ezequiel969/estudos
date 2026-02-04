"""enumerate - enumera iteráveis
"""

# [(0, 'Maria'), (1, 'Helena'), (2, 'Luiz'), (3, 'João')] é isso que o enumarate faz, ele cria uma tupla(não sei se pode ser lista tbm) e passa o índice e o valor correspondente.

lista = ['Kiel', 'Mari', 'Jose']
lista.append('Joao')
# lista_enumerada = list(enumerate(lista))

# for item in enumerate(lista):
#     print(item)

for indice, nome in enumerate(lista):    
    print(indice, nome)       
    
# for tupla_enumerada in enumerate(lista):
#     print('FOR DA TUPLA:', )
#     for valor in tupla_enumerada:
#         print(f'\t{valor}')
