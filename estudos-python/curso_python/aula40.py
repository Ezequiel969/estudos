""" Calculadora com While 
Pedir o primeiro número para o usuário
Pedir segundo número para o usuário
Perguntar o operador
"""

numero1 = input('Digite o primeiro número: ')
numero2 = input('Digite o segundo número: ')
operador = input('Escolha o operador: ')
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
        print('Você não digitou um operador válido')
        
    sair = input('Deseja [s]air?').lower().startswith('s')
    if sair:
            print('Saindo...')
            
    else:
        print('Digite "s" para sair. ')
        
    break

    


    



