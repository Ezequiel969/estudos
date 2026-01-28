# AULA 22 - Operador lógico OR
# or = OU - Basta UMA condição ser True
# Curto-circuito: para no primeiro True encontrado

entrada = input('[E]ntrar [S]air: ')
senha_digitada = input('Senha: ')
senha_permitida = '123456'

# Parênteses para controlar a ordem
if (entrada == 'E' or 'e') and senha_digitada == senha_permitida:
    print('Entrar')
else:
    print('Senha incorreta')
    
# Truque útil: valor padrão com or
# Se input for vazio (''), usa 'Sem senha'
# senha = input('Senha: ') or 'Sem senha'
# print(senha)