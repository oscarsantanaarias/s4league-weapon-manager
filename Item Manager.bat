@echo off
:: Verifica permisos de administrador
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo Solicitando permisos de administrador...
    powershell -Command "Start-Process '%~f0' -Verb runAs"
    exit /b
)

:: Cambia al directorio
cd /d C:\ItemManager

:: Ejecuta Node.js
npm start

pause
