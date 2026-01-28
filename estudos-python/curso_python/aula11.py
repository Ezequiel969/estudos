# AULA 11 - Precedência de operadores (ordem de execução)
# 1º Parênteses ()
# 2º Exponenciação **
# 3º Multiplicação, divisão * / // %
# 4º Soma e subtração + -

conta_1 = (1 + int(0.5 + 0.5)) ** (5 + 5)
# Passo a passo:
# (1 + int(1.0)) ** (10) -> (1 + 1) ** 10 -> 2 ** 10 = 1024
print(conta_1)