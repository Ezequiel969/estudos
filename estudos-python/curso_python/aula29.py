"""
Introdução ao try/except
try -> tentar executar o código
except -> ocorreu algum erro ao tentar executar
"""

numero_str = input(
    'Vou dobrar o número que você digitar: '
    )

try:
    print('STR: ', numero_str)
    numero_float = float(numero_str)
    print('FLOAT:', numero_float)
    print(f'O dobro do {numero_float:.2f} é {numero_float * 2:.2f}')
    
except:
    print('Você não digitou um número!')
    



# if numero_str.isdigit():
#     numero_float = float(numero_str)
#     print(f'O dobro do {numero_float:.2f} é {numero_float * 2:.2f}')
# else:
#     print('Você não digitou um número!')
