# AULA 15 - Função input() - Entrada de dados
# input() lê o que o usuário digita (sempre retorna string)
# Para fazer cálculos, converta com int() ou float()

nome = input('Qual seu nome? ')      # Lê texto do usuário
idade = input('Qual sua idade? ')    # input retorna STRING
idade_dobrada = int(idade) + int(idade)  # Converte para int para somar

print(f'O nome digitado foi: {nome}')
print(f'A idade digitada foi: {int(idade)}')
print(f'A idade dobrada é {int(idade_dobrada)}')