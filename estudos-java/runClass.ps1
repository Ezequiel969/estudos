param(
    [string]$source
)

if (-not $source) {
    Write-Error "Provide a path to a .java source file, e.g. ./src/.../ProgramTriangle.java"
    exit 2
}

$full = Resolve-Path $source -ErrorAction Stop
$content = Get-Content $full
$packageLine = $content | Where-Object { $_ -match '^\s*package\s+[a-zA-Z0-9_.]+\s*;' } | Select-Object -First 1
if ($packageLine) {
    $pkg = ($packageLine -replace '^\s*package\s+','' -replace '\s*;\s*$','')
} else {
    $pkg = ""
}

$name = [System.IO.Path]::GetFileNameWithoutExtension($full)
if ($pkg -ne "") {
    $fqcn = "$pkg.$name"
} else {
    $fqcn = $name
}

Write-Host "Compiling $full"
javac -d . $full
if ($LASTEXITCODE -ne 0) { Write-Error "javac failed"; exit $LASTEXITCODE }

Write-Host "Running $fqcn"
java -cp . $fqcn
exit $LASTEXITCODE
