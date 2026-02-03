# Loop externo: i percorre os valores de 0 a 9 (range(10)exclui 8)
for i in range(10):
    # Se i for 2, mostramos uma mensagem e pulamos para a próxima iteração
    # do loop externo — isto evita executar o loop interno para i == 2.
    if i == 2:
        print('i é 2, pulando...')
        continue  # ignora o restante do corpo do for para este i

    # Esta condição nunca será verdadeira com range(8) porque 8 não
    # é gerado pelo range. Se fosse verdadeira, imprimiria a mensagem
    # e interromperia o loop externo com break (o que impediria o else).
    if i == 8:
        print('i é 8, seu else não executará')
        break

    # Loop interno: para cada i (exceto quando usamos continue acima),
    # iteramos j em 1 e 2 e imprimimos o par (i, j).
    for j in range(1, 3):
        print(i, j)
else:
    # O bloco else de um for é executado somente se o loop terminar
    # de forma natural (sem encontrar um break). Aqui ele confirma
    # que percorremos todos os valores de i sem interrupção.
    print('For completo com sucesso!')