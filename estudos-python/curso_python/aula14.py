# AULA 14 - Método .format() para formatar strings
# Alternativa ao f-string, usa placeholders {nome}

a = 'AAAAA'
b = 'BBBBBB'
c = 1.1

# String com placeholders {} - usam nomes para identificar onde substituir
# {nome:.2f} formata número com 2 casas decimais
string = 'b={nome2} a={nome1} a={nome1} c={nome3:.2f}'

# .format() substitui os placeholders pelos valores das variáveis
formato = string.format(
    nome1=a,    # {nome1} vira 'AAAAA'
    nome2=b,    # {nome2} vira 'BBBBBB'
    nome3=c     # {nome3:.2f} vira '1.10'
)

print(formato)  # Resultado: b=BBBBBB a=AAAAA a=AAAAA c=1.10