"""
Flag (Bandeira) - Marcar um local
None = Não valor
is e is not = é ou não é (tipo, valor, identidade)
id = Identidade
"""
condicao = False
passou_no_if = None

if condicao:
    passou_no_if = True
    print('Faça algo')
else:
    print('Não faça algo')


if passou_no_if is None:
    print('É None')
else:
    print('Passou no if')
    
# Enquanto "==" compara o tipo da variavel por assim se dizer, o "is" compara o tipo do ID da variavel.

a = [1, 2, 3]
b = [1, 2, 3]   

print(a == b)  #true

print(a is b)  #false