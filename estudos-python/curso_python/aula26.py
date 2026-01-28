# AULA 26 - Formatação avançada com f-strings
# Alinhamento: > direita | < esquerda | ^ centro
# Sintaxe: {valor:preenchimento alinhamento largura}
"""
Formatação básica de strings
s - string
d - int
f - float
.<número de dígitos>f
x ou X - Hexadecimal
(Caractere)(><^)(quantidade)
> - Esquerda
< - Direita
^ - Centro
= - Força o número a aparecer antes dos zeros
Sinal - + ou -
Ex.: 0>-100,.1f
Conversion flags - !r !s !a 
"""

variavel = 'ABC'
print(f'{variavel}')        # ABC
print(f'{variavel: >10}')   # '       ABC' (alinha à direita)
print(f'{variavel: <10}')   # 'ABC       ' (alinha à esquerda)
print(f'{variavel:$^10}')   # '$$$ABC$$$$' (centraliza com $)
print(f'{1000.3223437734734773:+,.2f}')  # +1,000.32 (sinal, milhar, decimais)
print(f'O hexadecimal de 1500 é {1500:08X}')  # 000005DC
print(f'{variavel!r}')      # 'ABC' (representação com aspas)