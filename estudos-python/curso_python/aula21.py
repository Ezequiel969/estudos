# AULA 21 - Operador lógico AND
# and = E - TODAS as condições precisam ser True
# Valores falsy: 0, 0.0, '', False, None

entrada = input('[E]ntrar [S]air: ')
senha_digitada = input('Senha: ')
senha_permitida = '123456'

# Cuidado com precedência! and tem prioridade sobre or
if entrada == 'E' or 'e' and senha_digitada == senha_permitida:
    print('Entrar')
else:
    print('Sair')

# Curto-circuito: para no primeiro False
print(True and False and True)  # False (parou no False)
print(True and 0 and True)      # 0 (parou no 0, que é falsy)

if 1 and 1:  # Ambos são truthy
    print(True and 1 and False)  # False