# AULA 17 - Múltiplos elif e fluxo de execução
# Apenas UM bloco é executado: o primeiro que for True
# Mesmo que várias condições sejam True, só a primeira executa

condicao1 = True
condicao2 = False
condicao3 = False
condicao4 = False

if condicao1:       # True - EXECUTA e sai do if
    print('Codigo da condicao 1')
elif condicao2:     # Não chega aqui
    print('Codigo da condicao 2')
elif condicao3:
    print('Codigo da condicao 3')
elif condicao4:
    print('Codigo da condicao 4')
else:
    print('------')
    
print('Fora do if')

# Exemplo: todas True, mas só a primeira executa
condicao1 = True
condicao2 = True
condicao3 = True
condicao4 = True

if condicao1:       # True - executa APENAS este bloco
    print('Código para condição 1')
    print('Código para condição 1')
elif condicao2:     # Ignorado (já encontrou True acima)
    print('Código para condição 2')
elif condicao3:
    print('Código para condição 3')
elif condicao4:
    print('Código para condição 4')
else:
    print('Nenhuma condição foi satisfeita.')

# Cada if é independente - este é um NOVO if
if 10 == 10:
    print('Outro if')

print('Fora do if')