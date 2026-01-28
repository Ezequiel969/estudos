# AULA 16 - Estrutura condicional if/elif/else
# if = se (primeira condição)
# elif = senão se (condições alternativas)
# else = senão (quando nenhuma condição é verdadeira)
# IMPORTANTE: código dentro do if precisa de indentação (4 espaços)

entrada = input('Você quer "entrar" ou "sair"? ')

if entrada == 'entrar':             # Se digitou 'entrar'
    print('Você entrou no sistema')
    print(12341234)
elif entrada == 'sair':             # Senão, se digitou 'sair'
    print('Você saiu do sistema')
else:                               # Senão (qualquer outra coisa)
    print('Você não digitou nem entrar e nem sair.')

print('FORA DOS BLOCOS')  # Executa sempre (sem indentação)