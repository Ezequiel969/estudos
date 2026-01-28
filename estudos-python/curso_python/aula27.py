# AULA 27 - Fatiamento (slicing) de strings
# Sintaxe: string[início:fim:passo]
# início = índice inicial (incluso)
# fim = índice final (NÃO incluso)
# passo = de quanto em quanto pula

# Índices:  0 1 2 3 4 5 6 7 8
#           O l á   m u n d o
#          -9-8-7-6-5-4-3-2-1

variavel = 'Olá mundo'
print(variavel[4:])            # 'mundo' (do índice 4 até o fim)
print(variavel[4:8])           # 'mund' (do 4 ao 7)
print(variavel[7:len(variavel)])  # 'do' (do 7 até o final)
print(variavel[::-1])          # 'odnum álO' (invertido, passo -1)