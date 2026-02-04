# 🎮 GUIA: Como Transformar o Jogo em .EXE

## 🚀 Método Mais Fácil (Recomendado)

### Opção 1: Usando o Script Python
```bash
python criar_exe.py
```
Este script faz tudo automaticamente:
- Instala PyInstaller se necessário
- Cria o executável
- Limpa arquivos temporários

### Opção 2: Usando o Script BAT (Windows)
```bash
criar_executavel.bat
```
Basta dar duplo clique no arquivo!

---

## 📋 Método Manual (Passo a Passo)

### 1. Instalar PyInstaller
```bash
pip install pyinstaller
```

### 2. Criar o Executável
```bash
pyinstaller --onefile --windowed --name="JogoForca" jogo_forca_gui.py
```

### 3. Pronto!
O arquivo estará em: **dist\JogoForca.exe**

---

## 🎯 Explicação dos Comandos

- `--onefile` → Cria um único arquivo .exe (mais fácil de distribuir)
- `--windowed` → Não abre o console preto (apenas a janela do jogo)
- `--name="JogoForca"` → Nome do executável
- `jogo_forca_gui.py` → Seu arquivo Python

---

## 🎨 EXTRAS: Personalizações

### Adicionar Ícone Personalizado
```bash
pyinstaller --onefile --windowed --icon=icone.ico --name="JogoForca" jogo_forca_gui.py
```

### Adicionar Informações da Versão (Windows)
```bash
pyinstaller --onefile --windowed --name="JogoForca" --version-file=versao.txt jogo_forca_gui.py
```

---

## 📦 O que você receberá

Após executar, serão criadas estas pastas:

```
curso_python/
├── jogo_forca_gui.py
├── criar_exe.py
├── criar_executavel.bat
├── build/              ← Arquivos temporários (pode deletar)
├── dist/
│   └── JogoForca.exe  ← SEU JOGO PRONTO! 🎉
└── JogoForca.spec     ← Configuração (pode deletar)
```

---

## ✅ Testando o Executável

1. Vá até a pasta **dist/**
2. Dê duplo clique em **JogoForca.exe**
3. O jogo deve abrir normalmente!

---

## 💾 Distribuindo o Jogo

Você pode:
- ✅ Copiar o .exe para qualquer PC Windows
- ✅ Enviar por email/WhatsApp para amigos
- ✅ Colocar em um pendrive
- ✅ Criar um instalador com NSIS ou Inno Setup (avançado)

**IMPORTANTE:** O PC que receber o .exe NÃO precisa ter Python instalado!

---

## ⚠️ Problemas Comuns

### Antivírus bloqueia o .exe
**Normal!** Executáveis criados com PyInstaller podem ser marcados como suspeitos.

**Solução:**
- Adicione exceção no antivírus
- Ou envie o arquivo para análise do antivírus (falso positivo)

### Erro "VCRUNTIME140.dll não encontrado"
**Solução:** Instale o Visual C++ Redistributable:
https://aka.ms/vs/17/release/vc_redist.x64.exe

### Executável muito grande (>20 MB)
**Normal!** Ele inclui o Python inteiro + bibliotecas.

**Para reduzir:**
```bash
pyinstaller --onefile --windowed --strip jogo_forca_gui.py
```

---

## 🔧 Arquivo de Configuração Avançado

Se quiser controle total, edite o arquivo `.spec`:

```python
# JogoForca.spec
a = Analysis(
    ['jogo_forca_gui.py'],
    pathex=[],
    binaries=[],
    datas=[],
    hiddenimports=[],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    win_no_prefer_redirects=False,
    win_private_assemblies=False,
    cipher=None,
    noarchive=False,
)

pyz = PYZ(a.pure, a.zipped_data, cipher=None)

exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.zipfiles,
    a.datas,
    [],
    name='JogoForca',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    upx_exclude=[],
    runtime_tmpdir=None,
    console=False,  # False = sem console
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
    icon='icone.ico'  # Seu ícone aqui
)
```

Depois compile com:
```bash
pyinstaller JogoForca.spec
```

---

## 🎁 BÔNUS: Criar Instalador Profissional

Para criar um instalador tipo "Próximo, Próximo, Instalar":

### Usando Inno Setup (Gratuito)
1. Baixe: https://jrsoftware.org/isdl.php
2. Crie um script .iss
3. Compile para gerar setup.exe

Isso é para nível mais avançado! Por enquanto, o .exe simples já funciona perfeitamente! 🚀

---

## 📞 Dúvidas?

Se tiver problemas, me avise que eu ajudo a resolver! 😊
