"""tipo tupla - Uma lista IMUTÁVEL  
"""

nomes = 'Maria', 'Helena', 'Luiz' 
nomes2 = ('Maria', 'Helena', 'Luiz')  # uma forma de criar as tuplas é não colocando os colchetes [], ou se quiser ser muito específico, pode criar
# as tuplas com parênteses ()
print(nomes[-1]) 
print(nomes[0])   # nos índices o -1 será o último item sempre e o 0 será o primeiro!!

nomes3 = ['Maria', 'Helena', 'Luiz'] # você também pode converter uma lista [] (mutável) em uma tupla (imutável)
nomes3 = tuple(nomes3)

print(nomes3)