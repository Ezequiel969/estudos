"""
Script Python para criar executável do Jogo da Forca
Alternativa ao arquivo .bat - funciona em qualquer sistema
"""

import subprocess
import sys
import os


def instalar_pyinstaller():
    """Instala PyInstaller se não estiver instalado"""
    print("📦 Verificando PyInstaller...")
    try:
        import PyInstaller
        print("✅ PyInstaller já está instalado!")
        return True
    except ImportError:
        print("⏳ PyInstaller não encontrado. Instalando...")
        try:
            subprocess.check_call([sys.executable, "-m", "pip", "install", "pyinstaller"])
            print("✅ PyInstaller instalado com sucesso!")
            return True
        except Exception as e:
            print(f"❌ Erro ao instalar PyInstaller: {e}")
            return False


def criar_executavel():
    """Cria o executável usando PyInstaller"""
    print("\n🔨 Criando executável...")
    print("⏳ Isso pode levar alguns segundos...\n")

    # Comando para criar o executável
    comando = [
        "pyinstaller",
        "--onefile",           # Gera um único arquivo
        "--windowed",          # Sem console (apenas janela)
        "--name=JogoForca",    # Nome do executável
        "jogo_forca_gui.py"
    ]

    try:
        subprocess.run(comando, check=True)
        print("\n✅ EXECUTÁVEL CRIADO COM SUCESSO!")
        print("\n" + "="*50)
        print("📁 Localização: dist\\JogoForca.exe")
        print("="*50)
        print("\n💡 Você pode:")
        print("   - Copiar o arquivo .exe para qualquer lugar")
        print("   - Enviar para amigos (funciona sem Python instalado)")
        print("   - Criar um atalho na área de trabalho")
        print("\n⚠️  Os antivírus podem dar falso positivo - é normal!")
        return True
    except subprocess.CalledProcessError as e:
        print(f"\n❌ Erro ao criar executável: {e}")
        return False
    except FileNotFoundError:
        print("\n❌ PyInstaller não encontrado no PATH")
        print("💡 Tente reinstalar: pip install --upgrade pyinstaller")
        return False


def limpar_arquivos_temporarios():
    """Pergunta se quer limpar arquivos temporários"""
    print("\n🗑️  Deseja remover arquivos temporários? (build e .spec)")
    resposta = input("Digite 's' para sim ou 'n' para não: ").lower()

    if resposta == 's':
        import shutil
        try:
            if os.path.exists('build'):
                shutil.rmtree('build')
                print("✅ Pasta 'build' removida")

            spec_file = 'JogoForca.spec'
            if os.path.exists(spec_file):
                os.remove(spec_file)
                print(f"✅ Arquivo '{spec_file}' removido")

            print("✅ Limpeza concluída!")
        except Exception as e:
            print(f"⚠️  Erro ao limpar: {e}")


def main():
    """Função principal"""
    print("="*50)
    print("  🎮 CRIADOR DE EXECUTÁVEL - JOGO DA FORCA 🎮")
    print("="*50)
    print()

    # Verifica se o arquivo do jogo existe
    if not os.path.exists('jogo_forca_gui.py'):
        print("❌ Erro: jogo_forca_gui.py não encontrado!")
        print("💡 Execute este script na mesma pasta do jogo.")
        input("\nPressione Enter para sair...")
        return

    # Instala PyInstaller
    if not instalar_pyinstaller():
        input("\nPressione Enter para sair...")
        return

    # Cria o executável
    if criar_executavel():
        limpar_arquivos_temporarios()
        print("\n🎉 Processo concluído!")

    input("\nPressione Enter para sair...")


if __name__ == "__main__":
    main()
