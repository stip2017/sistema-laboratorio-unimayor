@echo off
echo ============================================
echo  Sistema de Reservas - BACKEND
echo  Laboratorio de Fisica y Sistemas Embebidos
echo ============================================
echo.
echo Iniciando servidor backend en http://localhost:3001
echo.
echo Presiona Ctrl+C para detener el servidor
echo.

call node server/index.js

pause
