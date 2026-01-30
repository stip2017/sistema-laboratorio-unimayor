@echo off
title Sistema de Reservas - Laboratorio Unimayor

echo.
echo ================================================
echo    SISTEMA DE RESERVAS Y PRESTAMOS
echo    Laboratorio de Fisica y Sistemas Embebidos
echo    Institucion Universitaria Colegio Mayor del Cauca
echo ================================================
echo.
echo.
echo Iniciando sistema completo...
echo.
echo [1/2] Iniciando Backend (Puerto 3001)...
start "Backend - API Server" cmd /c "node server/index.js"
timeout /t 2 /nobreak >nul

echo [2/2] Iniciando Frontend (Puerto 5173)...
start "Frontend - React App" cmd /c "npm run dev"
timeout /t 3 /nobreak >nul

echo.
echo ================================================
echo    SISTEMA INICIADO CORRECTAMENTE
echo ================================================
echo.
echo Backend:  http://localhost:3001
echo Frontend: http://localhost:5173
echo.
echo El navegador deberia abrirse automaticamente.
echo Si no, abre manualmente: http://localhost:5173
echo.
echo Para detener el sistema, cierra las ventanas
echo de Backend y Frontend que se abrieron.
echo.
echo ================================================
pause
