# AULA 25 - Interpolação com % (modo antigo)
# %s = string | %d = inteiro | %f = float | %x = hexadecimal
# %.2f = float com 2 casas decimais
# %08X = hexadecimal com 8 dígitos preenchidos com 0

nome = 'Luiz'
preco = 1000.95897643

# % (tupla) substitui os placeholders na ordem
variavel = '%s, o preço é R$%.2f' % (nome, preco)
print(variavel)  # Luiz, o preço é R$1000.96

print('O hexadecimal de %d é %08X' % (1500, 1500))  # 000005DC