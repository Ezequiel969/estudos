"""
# AULA 19 - Operadores de comparação (relacionais)
# Retornam True ou False
"""Tabela de operadores:
>   maior que        | 2 > 1   -> True
>=  maior ou igual   | 2 >= 2  -> True
<   menor que        | 1 < 2   -> True
<=  menor ou igual   | 2 <= 2  -> True
==  igual            | 'a'=='a'-> True
!=  diferente        | 'a'!='b'-> True
"""
maior = 2 > 1              # True
maior_ou_igual = 2 >= 2    # True
menor = 1 < 2              # True
menor_ou_igual = 2 <= 2    # True
igual = 'a' == 'a'         # True
diferente = 'a' != 'b'     # True

print(f'O valor maior é {maior}, o valor maior ou igual é {maior_ou_igual}')
print(f'O valor menor é {menor}, o valor igual é {igual} e o valor diferente é {diferente}')