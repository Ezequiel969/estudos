# =====================================================================
# VALIDADOR DE CPF - EXPLICAÇÃO COMPLETA E MASTIGADA
# =====================================================================
#
# O QUE É UM CPF?
# ----------------
# CPF tem 11 números. Exemplo: 746.824.890-70
# Os 9 PRIMEIROS números (746824890) são a "base" do CPF.
# Os 2 ÚLTIMOS números (70) são os "dígitos verificadores".
# Esses 2 dígitos são CALCULADOS a partir dos 9 primeiros.
# Se o cálculo bater com o que a pessoa digitou, o CPF é válido!
#
# COMO CALCULAR O PRIMEIRO DÍGITO VERIFICADOR (o "7" do -70)?
# ------------------------------------------------------------
# Passo 1: Pega os 9 primeiros números:  7  4  6  8  2  4  8  9  0
# Passo 2: Multiplica cada um por uma contagem regressiva de 10 até 2:
#
#           Números do CPF:   7   4   6   8   2   4   8   9   0
#           Multiplicadores: 10   9   8   7   6   5   4   3   2
#           Resultado:       70  36  48  56  12  20  32  27   0
#
# Passo 3: Soma tudo: 70+36+48+56+12+20+32+27+0 = 301
# Passo 4: Multiplica a soma por 10: 301 * 10 = 3010
# Passo 5: Pega o RESTO da divisão por 11: 3010 % 11 = 7
# Passo 6: Se o resto for maior que 9, o dígito é 0. Senão, o dígito é o resto.
#           7 não é maior que 9, então o PRIMEIRO DÍGITO = 7 ✓
#
# COMO CALCULAR O SEGUNDO DÍGITO VERIFICADOR (o "0" do -70)?
# -----------------------------------------------------------
# É a MESMA lógica, mas agora usa os 9 números + o primeiro dígito (10 números)
# e a contagem regressiva vai de 11 até 2.
#
#           Números:          7   4   6   8   2   4   8   9   0   7
#           Multiplicadores: 11  10   9   8   7   6   5   4   3   2
#           Resultado:       77  40  54  64  14  24  40  36   0  14
#
# Soma: 77+40+54+64+14+24+40+36+0+14 = 363
# 363 * 10 = 3630
# 3630 % 11 = 0
# 0 não é maior que 9, então o SEGUNDO DÍGITO = 0 ✓
#
# RESULTADO: Os dígitos calculados (7 e 0) batem com o CPF (746.824.890-70).
#            Logo, o CPF é VÁLIDO!
# =====================================================================

# "re" é uma biblioteca para trabalhar com expressões regulares (padrões de texto)
# Usamos ela para limpar o CPF, tirando pontos, traços, espaços, etc.
import re

# "sys" é uma biblioteca do sistema. Usamos ela para encerrar o programa
# caso o CPF seja inválido logo de cara (ex: 111.111.111-11)
import sys

# ---- PASSO 1: RECEBER O CPF DO USUÁRIO ----
# Pedimos para o usuário digitar o CPF (pode ser com pontos e traço ou só números)
texto_digitado = input('CPF [746.824.890-70]: ')

# Agora limpamos o CPF: removemos TUDO que NÃO for número (0-9)
# Por exemplo: "746.824.890-70" vira "74682489070"
# O re.sub substitui tudo que bate com o padrão r'[^0-9]' por '' (nada)
# r'[^0-9]' significa: "qualquer caractere que NÃO seja um número de 0 a 9"
cpf_so_numeros = re.sub(
    r'[^0-9]',      # padrão: qualquer coisa que NÃO é número
    '',              # substitui por nada (ou seja, apaga)
    texto_digitado   # texto onde vai procurar
)

# ---- PASSO 2: VERIFICAR SE O CPF É SEQUENCIAL (tipo 111.111.111-11) ----
# CPFs como 000.000.000-00, 111.111.111-11, 222.222.222-22 são matematicamente
# "válidos" pelo cálculo, mas na prática NÃO existem. Então bloqueamos.
#
# Como funciona essa verificação:
# texto_digitado[0] pega o PRIMEIRO caractere digitado
# texto_digitado[0] * len(texto_digitado) repete esse caractere N vezes
# Exemplo: se digitou "11111111111", o primeiro caractere é "1"
#          "1" * 11 = "11111111111"
#          "11111111111" == "11111111111" → True! É sequencial!
cpf_eh_sequencial = texto_digitado == texto_digitado[0] * len(texto_digitado)

if cpf_eh_sequencial:
    print('Você enviou dados sequenciais.')
    sys.exit()  # Encerra o programa aqui, não continua

# ---- PASSO 3: SEPARAR OS 9 PRIMEIROS DÍGITOS ----
# Do CPF "74682489070", pegamos só os 9 primeiros: "746824890"
# O [:9] significa "do início até a posição 9 (sem incluir a 9)"
nove_primeiros_digitos = cpf_so_numeros[:9]

# ---- PASSO 4: CALCULAR O PRIMEIRO DÍGITO VERIFICADOR ----
# Precisamos de um multiplicador que começa em 10 e vai diminuindo até 2
multiplicador = 10

# Essa variável vai acumulando a soma das multiplicações
soma_das_multiplicacoes = 0

# Para CADA número dentro dos 9 primeiros dígitos...
for numero in nove_primeiros_digitos:
    # int(numero) transforma o caractere '7' no número 7
    # Multiplica pelo multiplicador atual e SOMA ao acumulador
    # Exemplo na 1ª volta: 0 + (7 * 10) = 70
    # Exemplo na 2ª volta: 70 + (4 * 9) = 106
    # E assim por diante...
    soma_das_multiplicacoes += int(numero) * multiplicador

    # Diminui o multiplicador em 1 para a próxima volta
    # 10 → 9 → 8 → 7 → 6 → 5 → 4 → 3 → 2
    multiplicador -= 1

# Agora calculamos o dígito:
# 1) Multiplica a soma por 10
# 2) Pega o resto da divisão por 11 (operador %)
primeiro_digito = (soma_das_multiplicacoes * 10) % 11

# Se o resultado deu maior que 9 (ou seja, 10), o dígito é 0
# Senão, o dígito é o próprio resultado
# Isso acontece porque dígito tem que ser um número de 0 a 9
primeiro_digito = primeiro_digito if primeiro_digito <= 9 else 0

# ---- PASSO 5: CALCULAR O SEGUNDO DÍGITO VERIFICADOR ----
# Agora juntamos os 9 dígitos + o primeiro dígito que acabamos de calcular
# Exemplo: "746824890" + "7" = "7468248907" (10 dígitos)
dez_digitos = nove_primeiros_digitos + str(primeiro_digito)

# Agora o multiplicador começa em 11 (porque temos 10 números, vai de 11 até 2)
multiplicador = 11

# Zeramos a soma para calcular de novo
soma_das_multiplicacoes = 0

# Mesma lógica do primeiro dígito, mas agora com 10 números e multiplicador de 11
for numero in dez_digitos:
    soma_das_multiplicacoes += int(numero) * multiplicador
    multiplicador -= 1

# Calcula o segundo dígito da mesma forma
segundo_digito = (soma_das_multiplicacoes * 10) % 11
segundo_digito = segundo_digito if segundo_digito <= 9 else 0

# ---- PASSO 6: MONTAR O CPF CALCULADO E COMPARAR ----
# Juntamos tudo: os 9 dígitos originais + os 2 dígitos que calculamos
# Exemplo: "746824890" + "7" + "0" = "74682489070"
cpf_calculado = f'{nove_primeiros_digitos}{primeiro_digito}{segundo_digito}'

# Agora comparamos: o CPF que o usuário digitou é igual ao CPF que calculamos?
# Se sim, o CPF é válido! Se não, é inválido.
if cpf_so_numeros == cpf_calculado:
    print(f'{cpf_so_numeros} é válido')
else:
    print('CPF inválido')
