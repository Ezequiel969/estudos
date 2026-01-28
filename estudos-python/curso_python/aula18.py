# AULA 18 - Exercício if/elif (continuação)
# Quando as primeiras condições são False, continua verificando

condicao1 = False
condicao2 = False
condicao3 = True   # Primeira True encontrada
condicao4 = False

if condicao1:       # False - pula
    print('Codigo da condicao 1')
elif condicao2:     # False - pula
    print('Codigo da condicao 2')
elif condicao3:     # True - EXECUTA
    print('Codigo da condicao 3')
elif condicao4:     # Não chega aqui
    print('Codigo da condicao 4')
else:
    print('------')
    
print('Fora do if')

condicao1 = False
condicao2 = False
condicao3 = True
condicao4 = True

if condicao1:
    print('Código para condição 1')
    print('Código para condição 1')
elif condicao2:
    print('Código para condição 2')
elif condicao3:     # Executa aqui (primeiro True)
    print('Código para condição 3')
elif condicao4:     # condicao4 é True, mas não executa (já achou True)
    print('Código para condição 4')
else:
    print('Nenhuma condição foi satisfeita.')

if 10 == 10:
    print('Outro if')

print('Fora do if')