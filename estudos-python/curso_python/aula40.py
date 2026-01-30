""" Calculadora com While 
Pedir o primeiro número para o usuário
Pedir segundo número para o usuário
Perguntar o operador
"""

numero1 = input('Digite o primeiro número: ')
numero2 = input('Digite o segundo número: ')
operador = input('Escolha o operador (+-*/): ')

while True:
    numero1_float = float(numero1)
    numero2_float = float(numero2)
    
    
    if operador == '+':
        print(numero1_float + numero2_float)
    elif operador == '-':
        print(numero1_float - numero2_float)
    elif operador == '*':
        print(numero1_float * numero2_float)
    elif operador == '/':
        print(numero1_float / numero2_float)
    else:
        while operador not in ['+', '-', '*', '/']:
            operador = input('Digite um operador válido: ')
        # Agora calcula com o operador válido
        if operador == '+':
            print(numero1_float + numero2_float)
        elif operador == '-':
            print(numero1_float - numero2_float)
        elif operador == '*':
            print(numero1_float * numero2_float)
        elif operador == '/':
            print(numero1_float / numero2_float)
    
        
        
    sair = input('Deseja [s]air?').lower().startswith('s')
    
    if sair:
            print('Saindo...')            
    else:
        while not sair:
            sair = input('Deseja [s]air?').lower().startswith('s')        
    break

""" Calculadora com while (RESOLUÇÃO DO PROFESSOR) """
# while True:
#     numero_1 = input('Digite um número: ')
#     numero_2 = input('Digite outro número: ')
#     operador = input('Digite o operador (+-/*): ')
#
#     numeros_validos = None
#
#     try:
#         num_1_float = float(numero_1)
#         num_2_float = float(numero_2)
#         numeros_validos = True
#     except:
#         numeros_validos = None
#
#           if numeros_validos is None:
#         print('Um ou ambos os números digitados são inválidos.')
#         continue
#
#     operadores_permitidos = '+-/*'
#
#     if operador not in operadores_permitidos:
#         print('Operador inválido.')
#         continue
#
#     if len(operador) > 1:
#         print('Digite apenas um operador.')
#         continue
#
#     ###
#
#     sair = input('Quer sair? [s]im: ').lower().startswith('s')
#
#     if sair is True:
#         break
    
      


    



