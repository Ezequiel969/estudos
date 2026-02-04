"""
Jogo da Forca com Interface Gráfica usando Tkinter
Baseado no código original de aula47.py
"""

import tkinter as tk
from tkinter import messagebox
import random


class JogoForca:
    def __init__(self, root):
        self.root = root
        self.root.title("🎮 Jogo da Forca")
        self.root.geometry("600x500")
        self.root.configure(bg="#2C3E50")

        # Lista de palavras possíveis (muito expandida!)
        self.palavras = [
            # Tecnologia e Programação
            'python', 'programacao', 'computador', 'desenvolvedor',
            'inteligencia artificial', 'algoritmo', 'tecnologia', 'internet',
            'codigo fonte', 'javascript', 'banco de dados', 'interface',
            'servidor', 'aplicativo', 'software', 'hardware', 'sistema operacional',
            'navegador', 'website', 'desenvolvimento', 'engenharia',
            'arquitetura', 'framework', 'biblioteca', 'debugar', 'compilador',
            'terminal', 'cloud computing', 'machine learning', 'deep learning',
            'ciberseguranca', 'criptografia', 'blockchain', 'frontend', 'backend',

            # Música e Artistas
            'rita lee', 'musica brasileira', 'raul seixas', 'caetano veloso',
            'gilberto gil', 'chico buarque', 'elis regina', 'tim maia',
            'djavan', 'gal costa', 'maria bethania', 'cazuza', 'legiao urbana',
            'los hermanos', 'skank', 'paralamas do sucesso', 'titas',
            'bossa nova', 'samba', 'mpb', 'rock nacional', 'pagode',

            # Animais
            'elefante', 'girafa', 'leopardo', 'rinoceronte', 'hipopotamo',
            'crocodilo', 'tubarao', 'golfinho', 'baleia', 'pinguim',
            'aguia', 'papagaio', 'beija flor', 'borboleta', 'formiga',
            'tamanduá', 'preguica', 'capivara', 'onca pintada', 'arara',

            # Países e Cidades
            'brasil', 'portugal', 'argentina', 'estados unidos', 'japao',
            'australia', 'nova zelandia', 'canada', 'franca', 'alemanha',
            'sao paulo', 'rio de janeiro', 'salvador', 'brasilia', 'curitiba',
            'porto alegre', 'recife', 'fortaleza', 'manaus', 'belo horizonte',

            # Profissões
            'medico', 'engenheiro', 'professor', 'advogado', 'arquiteto',
            'programador', 'designer', 'veterinario', 'dentista', 'piloto',
            'chef de cozinha', 'jornalista', 'fotografo', 'musico', 'ator',

            # Comidas e Bebidas
            'pizza', 'hamburguer', 'macarrao', 'lasanha', 'sushi',
            'brigadeiro', 'pudim', 'sorvete', 'chocolate', 'bolo',
            'feijoada', 'churrasco', 'moqueca', 'acaraje', 'tapioca',
            'cafe', 'suco', 'refrigerante', 'smoothie', 'vitamina',

            # Esportes
            'futebol', 'basquete', 'volei', 'tenis', 'natacao',
            'atletismo', 'ginastica', 'judo', 'carate', 'boxe',
            'ciclismo', 'surf', 'skate', 'escalada', 'mergulho',

            # Filmes e Séries
            'star wars', 'harry potter', 'senhor dos aneis', 'matrix',
            'vingadores', 'jurassic park', 'de volta para o futuro',
            'breaking bad', 'game of thrones', 'stranger things',

            # Natureza
            'floresta amazonica', 'oceano pacifico', 'cordilheira dos andes',
            'deserto do saara', 'grande muralha', 'cataratas do iguacu',
            'monte everest', 'vulcao', 'terremoto', 'tsunami',
            'arco iris', 'tempestade', 'nevoa', 'relampago', 'tornado',

            # Ciências
            'astronomia', 'biologia', 'quimica', 'fisica', 'matematica',
            'geologia', 'arqueologia', 'paleontologia', 'botanica', 'zoologia',
            'medicina', 'psicologia', 'sociologia', 'filosofia', 'historia',

            # Objetos do Cotidiano
            'celular', 'notebook', 'teclado', 'mouse', 'monitor',
            'fone de ouvido', 'carregador', 'camera', 'relogio', 'oculos',
            'livro', 'caderno', 'caneta', 'mochila', 'guarda chuva',

            # Palavras Desafiadoras
            'paralelepipedo', 'otorrinolaringologista', 'inconstitucionalissimamente',
            'pneumoultramicroscopicossilicovulcanoconiotico', 'anticonstitucionalissimamente',
            'oftalmologia', 'gastrenterologia', 'cardiologia', 'neurologia',
            'desoxirribonucleico', 'extraordinario', 'transcendental', 'fenomenal'
        ]

        # Variáveis do jogo
        self.palavra_secreta = ''
        self.letras_acertadas = ''
        self.numero_tentativas = 0
        self.letras_erradas = []
        self.max_erros = 20

        self.criar_interface()
        self.novo_jogo()

    def criar_interface(self):
        # Título
        titulo = tk.Label(
            self.root,
            text="🎮 JOGO DA FORCA 🎮",
            font=("Arial", 24, "bold"),
            bg="#2C3E50",
            fg="#ECF0F1"
        )
        titulo.pack(pady=20)

        # Frame para a palavra
        frame_palavra = tk.Frame(self.root, bg="#2C3E50")
        frame_palavra.pack(pady=20)

        self.label_palavra = tk.Label(
            frame_palavra,
            text="",
            font=("Courier New", 32, "bold"),
            bg="#34495E",
            fg="#ECF0F1",
            padx=20,
            pady=10,
            relief="raised",
            bd=3
        )
        self.label_palavra.pack()

        # Informações do jogo
        self.label_info = tk.Label(
            self.root,
            text="",
            font=("Arial", 12),
            bg="#2C3E50",
            fg="#E74C3C",
            justify="left"
        )
        self.label_info.pack(pady=10)

        # Frame para entrada
        frame_entrada = tk.Frame(self.root, bg="#2C3E50")
        frame_entrada.pack(pady=20)

        tk.Label(
            frame_entrada,
            text="Digite uma letra:",
            font=("Arial", 14),
            bg="#2C3E50",
            fg="#ECF0F1"
        ).pack(side="left", padx=5)

        self.entrada = tk.Entry(
            frame_entrada,
            font=("Arial", 16),
            width=5,
            justify="center",
            bd=3,
            relief="groove"
        )
        self.entrada.pack(side="left", padx=5)
        self.entrada.bind('<Return>', lambda e: self.tentar_letra())
        self.entrada.focus()

        self.botao_tentar = tk.Button(
            frame_entrada,
            text="✓ TENTAR",
            font=("Arial", 12, "bold"),
            bg="#27AE60",
            fg="white",
            padx=20,
            pady=5,
            command=self.tentar_letra,
            cursor="hand2",
            relief="raised",
            bd=3
        )
        self.botao_tentar.pack(side="left", padx=5)

        # Letras já usadas
        self.label_usadas = tk.Label(
            self.root,
            text="Letras usadas: ",
            font=("Arial", 11),
            bg="#2C3E50",
            fg="#95A5A6"
        )
        self.label_usadas.pack(pady=10)

        # Frame para botões
        frame_botoes = tk.Frame(self.root, bg="#2C3E50")
        frame_botoes.pack(pady=20)

        self.botao_novo = tk.Button(
            frame_botoes,
            text="🔄 NOVO JOGO",
            font=("Arial", 12, "bold"),
            bg="#3498DB",
            fg="white",
            padx=20,
            pady=8,
            command=self.novo_jogo,
            cursor="hand2",
            relief="raised",
            bd=3
        )
        self.botao_novo.pack(side="left", padx=10)

        self.botao_sair = tk.Button(
            frame_botoes,
            text="❌ SAIR",
            font=("Arial", 12, "bold"),
            bg="#E74C3C",
            fg="white",
            padx=20,
            pady=8,
            command=self.root.quit,
            cursor="hand2",
            relief="raised",
            bd=3
        )
        self.botao_sair.pack(side="left", padx=10)

    def novo_jogo(self):
        """Inicia um novo jogo"""
        self.palavra_secreta = random.choice(self.palavras).lower()
        self.letras_acertadas = ''
        self.numero_tentativas = 0
        self.letras_erradas = []
        self.entrada.delete(0, tk.END)
        self.entrada.config(state='normal')
        self.botao_tentar.config(state='normal')
        self.atualizar_display()
        self.entrada.focus()

    def construir_palavra_formada(self):
        """Constrói a palavra com letras descobertas e *"""
        palavra_formada = ''
        for letra in self.palavra_secreta:
            if letra == ' ':
                palavra_formada += '  '  # Dois espaços para visualização
            elif letra in self.letras_acertadas:
                palavra_formada += letra + ' '
            else:
                palavra_formada += '* '
        return palavra_formada.strip()

    def atualizar_display(self):
        """Atualiza todos os elementos da interface"""
        # Atualiza palavra
        palavra_formada = self.construir_palavra_formada()
        self.label_palavra.config(text=palavra_formada)

        # Atualiza informações
        erros = len(self.letras_erradas)
        tentativas_restantes = self.max_erros - erros

        info_text = f"❤️ Vidas: {tentativas_restantes}/{self.max_erros}\n"
        info_text += f"🎯 Tentativas: {self.numero_tentativas}"

        if erros > 0:
            self.label_info.config(text=info_text, fg="#E74C3C")
        else:
            self.label_info.config(text=info_text, fg="#2ECC71")

        # Atualiza letras usadas
        todas_letras = sorted(set(self.letras_acertadas + ''.join(self.letras_erradas)))
        letras_display = ', '.join(todas_letras) if todas_letras else 'Nenhuma'
        self.label_usadas.config(text=f"Letras usadas: {letras_display}")

    def tentar_letra(self):
        """Processa a tentativa do jogador"""
        letra = self.entrada.get().lower().strip()
        self.entrada.delete(0, tk.END)

        # Validação
        if not letra:
            messagebox.showwarning("Atenção", "Digite uma letra!")
            return

        # Se digitou mais de uma letra, considera como chute da palavra
        if len(letra) > 1:
            self.numero_tentativas += 1
            if letra == self.palavra_secreta:
                self.vitoria()
            else:
                messagebox.showinfo(
                    "Palavra Errada",
                    "Palavra incorreta! Digite uma letra por vez\nou acerte a palavra completa."
                )
            return

        # Verifica se já foi usada
        if letra in self.letras_acertadas or letra in self.letras_erradas:
            messagebox.showwarning("Atenção", "Você já tentou essa letra!")
            return

        # Incrementa tentativas
        self.numero_tentativas += 1

        # Verifica se acertou
        if letra in self.palavra_secreta:
            self.letras_acertadas += letra

            # Verifica vitória
            palavra_formada_limpa = self.construir_palavra_formada().replace(' ', '')
            palavra_secreta_limpa = self.palavra_secreta.replace(' ', '')

            if palavra_formada_limpa == palavra_secreta_limpa:
                self.vitoria()
        else:
            # Errou a letra
            self.letras_erradas.append(letra)

            # Verifica derrota
            if len(self.letras_erradas) >= self.max_erros:
                self.derrota()

        self.atualizar_display()
        self.entrada.focus()

    def vitoria(self):
        """Jogador ganhou!"""
        self.atualizar_display()
        self.entrada.config(state='disabled')
        self.botao_tentar.config(state='disabled')

        mensagem = f"🎉 PARABÉNS! VOCÊ GANHOU! 🎉\n\n"
        mensagem += f"A palavra era: {self.palavra_secreta.upper()}\n"
        mensagem += f"Tentativas: {self.numero_tentativas}\n\n"
        mensagem += "Quer jogar novamente?"

        resposta = messagebox.askyesno("Vitória!", mensagem)
        if resposta:
            self.novo_jogo()

    def derrota(self):
        """Jogador perdeu!"""
        self.entrada.config(state='disabled')
        self.botao_tentar.config(state='disabled')

        # Mostra a palavra completa
        self.label_palavra.config(text=self.palavra_secreta.upper())

        mensagem = f"😢 GAME OVER! 😢\n\n"
        mensagem += f"A palavra era: {self.palavra_secreta.upper()}\n"
        mensagem += f"Tentativas: {self.numero_tentativas}\n\n"
        mensagem += "Quer tentar novamente?"

        resposta = messagebox.askyesno("Derrota", mensagem)
        if resposta:
            self.novo_jogo()


def main():
    """Função principal que inicia o jogo"""
    root = tk.Tk()
    jogo = JogoForca(root)
    root.mainloop()


if __name__ == "__main__":
    main()
