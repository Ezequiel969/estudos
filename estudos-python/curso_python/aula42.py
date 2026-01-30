
# Frase a ser analisada
frase = 'aaaooo'

# Variável para percorrer cada posição da frase
indice = 0
# Guarda a maior quantidade de vezes que uma letra apareceu
maior_quantidade = 0
# Guarda qual letra apareceu mais vezes
letra_mais_frequente = ''


# Loop para percorrer cada caractere da frase
while indice < len(frase):
    letra_atual = frase[indice]  # Pega a letra atual

    # Se for espaço, apenas pula para o próximo caractere
    if letra_atual == ' ':
        indice += 1
        continue  # Volta para o início do loop

    # Conta quantas vezes a letra atual aparece na frase
    quantidade_atual = frase.count(letra_atual)

    # Se essa letra apareceu mais vezes do que a anterior mais frequente
    if maior_quantidade < quantidade_atual:
        maior_quantidade = quantidade_atual  # Atualiza a maior quantidade
        letra_mais_frequente = letra_atual   # Atualiza a letra mais frequente

    indice += 1  # Vai para o próximo caractere


# Exibe o resultado final
print(
    'A letra que apareceu mais vezes foi '
    f'"{letra_mais_frequente}" que apareceu '
    f'{maior_quantidade}x'
)