# AULA 13 - F-strings (strings formatadas)
# f antes das aspas permite colocar variáveis dentro de {}
# :.2f formata número com 2 casas decimais

nome = 'Ezequiel Lima'
altura = 1.85
peso = 92
imc = peso / altura ** 2

# f-string: f'texto {variavel}'
# {imc:.2f} = mostra imc com 2 casas decimais
print(f'{nome} tem {altura} de altura, pesa {peso} quilos e seu IMC é {imc:.2f}')
