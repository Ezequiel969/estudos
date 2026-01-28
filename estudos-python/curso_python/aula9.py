# AULA 9 - Operadores aritméticos
# + soma | - subtração | * multiplicação
# / divisão | // divisão inteira | ** potência | % módulo (resto)

adicao = 10 + 10          # 20
print('Adição', adicao)

subtracao = 10 - 5        # 5
print('Subtração', subtracao)

multiplicacao = 10 * 10   # 100
print('Multiplicação', multiplicacao)

divisao = 10 / 3          # 3.333... (sempre retorna float)
print('Divisão', divisao)

divisao_inteira = 10 // 3  # 3 (descarta a parte decimal)
print('Divisão inteira', divisao_inteira)

exponenciacao = 2 ** 10    # 2 elevado a 10 = 1024
print('Exponenciação', exponenciacao)

modulo = 55 % 2            # Resto de 55 / 2 = 1
print('Módulo', modulo)

# % é útil para verificar se número é divisível
print(10 % 8 == 0)  # False (10 não é divisível por 8)
print(16 % 8 == 0)  # True (16 é divisível por 8)
print(10 % 2 == 0)  # True (10 é par)
print(15 % 2 == 0)  # False (15 é ímpar)
print(16 % 2 == 0)  # True (16 é par)