@echo off
echo ========================================
echo   CRIANDO EXECUTAVEL DO JOGO DA FORCA
echo ========================================
echo.

echo [1/3] Verificando se PyInstaller esta instalado...
pip show pyinstaller >nul 2>&1
if %errorlevel% neq 0 (
    echo PyInstaller nao encontrado! Instalando...
    pip install pyinstaller
) else (
    echo PyInstaller ja esta instalado!
)

echo.
echo [2/3] Gerando executavel...
echo Isso pode levar alguns segundos...
pyinstaller --onefile --windowed --name="JogoForca" jogo_forca_gui.py

echo.
echo [3/3] Pronto!
echo.
echo ========================================
echo   EXECUTAVEL CRIADO COM SUCESSO!
echo ========================================
echo.
echo O arquivo esta em: dist\JogoForca.exe
echo.
echo Pode distribuir este arquivo para qualquer PC Windows!
echo.
pause
