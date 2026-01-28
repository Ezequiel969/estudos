# Build script for estudos-java project
# This script compiles all Java source files in the project

Write-Host "Building estudos-java project..." -ForegroundColor Green

$projectRoot = Get-Location
$sourceDir = "src"

Write-Host "Compiling all Java files..." -ForegroundColor Yellow

javac -d . `
    "$sourceDir/academy/lima/kiel/introducao/cursonelio/javacore/*.java" `
    "$sourceDir/academy/lima/kiel/introducao/cursodevdojo/javacore/*.java" `
    "$sourceDir/academy/lima/kiel/introducao/cursonelio/javaOO/entities/*.java" `
    "$sourceDir/academy/lima/kiel/introducao/cursonelio/javaOO/aplications/*.java"

if ($LASTEXITCODE -eq 0) {
    Write-Host "Build completed successfully!" -ForegroundColor Green
} else {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}
