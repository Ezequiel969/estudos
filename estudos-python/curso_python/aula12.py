# AULA 12 - Exercício: Cálculo de IMC
# Fórmula IMC: peso / altura²
# round(valor, casas) arredonda número decimal

nome = 'Ezequiel Lima'
altura = 1.85
peso = 92
imc = peso / altura ** 2  # ** tem precedência sobre /

# round(imc, 2) arredonda para 2 casas decimais
print(nome, 'tem', altura, 'de altura, pesa', peso, 'quilos e seu IMC é', round(imc, 2))




