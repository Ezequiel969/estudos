"""
Exercício
Peça ao usuário para digitar seu nome
Peça ao usuário para digitar sua idade
Se nome e idade forem digitados:
    Exiba:
        Seu nome é {nome}
        Seu nome invertido é {nome invertido}
        Seu nome contém (ou não) espaços
        Seu nome tem {n} letras
        A primeira letra do seu nome é {letra}
        A última letra do seu nome é {letra}
Se nada for digitado em nome ou idade: 
    exiba "Desculpe, você deixou campos vazios."
"""

# ==================== ENTRADA DE DADOS ====================
# input() lê o que o usuário digita e retorna como string
nome = input('Digite o seu nome: ')
idade = input('Digite sua idade: ')

# ==================== VALIDAÇÃO ====================
# "if nome and idade:" verifica se AMBAS as variáveis têm valor
# Uma string vazia ("") é considerada False em Python
# Uma string com conteúdo ("João") é considerada True
# O operador "and" exige que AMBOS sejam True para entrar no if
if nome and idade:
    
    # ==================== EXIBINDO O NOME ====================
    # f-string: permite colocar variáveis dentro de {} na string
    print(f'Seu nome é {nome}')
    
    # ==================== INVERTENDO O NOME (SLICING) ====================
    # nome[::-1] usa "slicing" (fatiamento) para inverter a string
    # Sintaxe: string[início:fim:passo]
    # [::-1] significa: do início ao fim, andando de -1 em -1 (de trás pra frente)
    # Exemplo: "João" → "oãoJ"
    print(f'Seu nome invertido é {nome[::-1]}')

    # ==================== VERIFICANDO ESPAÇOS ====================
    # O operador "in" verifica se um caractere/substring existe dentro da string
    # ' ' in nome → retorna True se houver espaço, False se não houver
    if ' ' in nome:
        print('Seu nome contém espaços')
    else:
        print('Seu nome NÃO contém espaços')

    # ==================== TAMANHO DA STRING ====================
    # len() retorna o número de caracteres da string (incluindo espaços)
    # Exemplo: len("João") → 4
    print(f'Seu nome tem {len(nome)} letras')
    
    # ==================== ACESSANDO CARACTERES POR ÍNDICE ====================
    # Strings são indexadas começando em 0
    # nome[0] → primeiro caractere (índice 0)
    # nome[-1] → último caractere (índice -1 conta de trás pra frente)
    # Exemplo: "João" → nome[0] = "J", nome[-1] = "o"
    print(f'A primeira letra do seu nome é {nome[0]}')
    print(f'A última letra do seu nome é {nome[-1]}')

# Se nome OU idade estiverem vazios, cai no else
else:
    print("Desculpe, você deixou campos vazios.")
