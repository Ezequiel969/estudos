"""Jogo simples: o usuário tenta descobrir uma palavra letra a letra.

Este arquivo foi mantido intencionalmente simples e comentado
para explicar passo a passo o que cada trecho faz.
"""

import os

# palavra secreta que o usuário deve descobrir
# você pode trocar por qualquer outra palavra (ex: 'python')
palavra_secreta = 'perfume'

# string que armazenará as letras que o usuário acertou até agora
# começamos vazia, e a cada acerto acrescentamos a letra
letras_acertadas = ''

# contador de tentativas válidas (cada vez que o usuário digita
# uma letra válida, incrementamos este contador)
numero_tentativas = 0

# loop principal do jogo: roda indefinidamente até que o programa
# seja interrompido (por exemplo, quando o jogador vencer e quisermos
# reiniciar ou encerrar). Aqui usamos while True para manter o jogo
# em execução.
while True:
    # solicita que o usuário digite uma letra (entrada como string)
    letra_digitada = input('Digite uma letra: ')

    # incrementamos o contador de tentativas NO MOMENTO em que o
    # usuário fornece uma entrada — assim contamos apenas entradas
    # (se quiser contar apenas tentativas válidas, mova esta linha
    # para depois da validação da entrada).
    numero_tentativas += 1

    # validação: se o usuário digitou mais de um caractere, informamos
    # que a entrada é inválida e usamos `continue` para pular o resto
    # do loop e pedir outra entrada. Isso evita processar entradas
    # incorretas (como palavras inteiras).
    if len(letra_digitada) > 1:
        print('Digite apenas uma letra.')
        continue

    # se a letra digitada estiver dentro da palavra secreta,
    # adicionamos essa letra à lista/string de letras acertadas.
    # Assim, registramos que o jogador já descobriu essa letra.
    if letra_digitada in palavra_secreta:
        letras_acertadas += letra_digitada

    # Agora vamos construir a representação atual da palavra, chamada
    # de `palavra_formada`. Para cada letra da `palavra_secreta`, se a
    # letra estiver entre as `letras_acertadas` mostramos a letra,
    # caso contrário mostramos '*' para indicar que aquela posição
    # ainda não foi descoberta.
    palavra_formada = ''
    for letra_secreta in palavra_secreta:
        if letra_secreta in letras_acertadas:
            # letra descoberta: adicionamos ao resultado visível
            palavra_formada += letra_secreta
        else:
            # letra ainda não descoberta: mostramos '*'
            palavra_formada += '*'

    # mostramos ao usuário o estado atual da palavra (com * e letras)
    print('Palavra formada:', palavra_formada)

    # condição de vitória: quando a palavra formada for igual à palavra
    # secreta, o jogador descobriu todas as letras. Aí mostramos as
    # mensagens finais e os resultados.
    if palavra_formada == palavra_secreta:
        # limpa a tela (em sistemas Unix o comando é 'clear'; em Windows
        # o comando equivalente é 'cls'. O uso de os.system aqui é opcional
        # e serve apenas para melhorar a visualização no terminal.)
        os.system('clear')
        print('VOCÊ GANHOU!! PARABÉNS!')
        print('A palavra era', palavra_secreta)
        print('Tentativas:', numero_tentativas)

        # após vencer, o código reseta as variáveis para permitir jogar
        # novamente sem fechar o programa. `letras_acertadas` volta para
        # string vazia e `numero_tentativas` é zerado.
        letras_acertadas = ''
        numero_tentativas = 0