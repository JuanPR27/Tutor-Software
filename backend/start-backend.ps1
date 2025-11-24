# Script de inicio Backend - Tutor Software
Write-Host "=== INICIANDO BACKEND TUTOR SOFTWARE ===" -ForegroundColor Cyan
Write-Host "Activando entorno virtual..." -ForegroundColor Yellow

# Activar entorno virtual
if (Test-Path ".venv") {
    .\.venv\Scripts\Activate.ps1
    Write-Host "Entorno virtual activado" -ForegroundColor Green
} else {
    Write-Host "Creando entorno virtual..." -ForegroundColor Yellow
    python -m venv .venv
    .\.venv\Scripts\Activate.ps1
    Write-Host "Entorno virtual creado y activado" -ForegroundColor Green
    
    Write-Host "Instalando dependencias..." -ForegroundColor Yellow
    pip install --upgrade pip setuptools wheel
    pip install -r requirements.txt
    Write-Host "Dependencias instaladas" -ForegroundColor Green
}

Write-Host "Iniciando servidor backend en http://localhost:8000" -ForegroundColor Green
Write-Host "Documentación API: http://localhost:8000/docs" -ForegroundColor Yellow
Write-Host "Presiona Ctrl+C para detener el servidor" -ForegroundColor Red

uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
