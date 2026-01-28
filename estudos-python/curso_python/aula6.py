# AULA 6 - Conversão de tipos (type casting)
# Converte um tipo de dado em outro
# Funções: int(), float(), str(), bool()

print(int('1'), type(int('1')))   # Converte string '1' para inteiro 1
print(int('1') + 1)               # Agora pode somar: 1 + 1 = 2
print(type(float('1') + 1))       # float + int = float
print(bool(' '))                  # String com espaço = True (não é vazia)
print(type(str(11) + 'b'))        # Converte 11 para '11' e concatena