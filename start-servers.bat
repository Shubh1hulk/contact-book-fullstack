@echo off
echo Starting Contact Book Application...
echo.

echo Starting Backend Server...
start "Backend Server" cmd /k "cd /d "%~dp0" && node server.js"

timeout /t 3 /nobreak >nul

echo Starting Frontend Server...
start "Frontend Server" cmd /k "cd /d "%~dp0" && python -m http.server 3000"

timeout /t 2 /nobreak >nul

echo.
echo ========================================
echo   Contact Book Application Started!
echo ========================================
echo.
echo Frontend: http://localhost:3000
echo Backend API: http://localhost:5002/api/contacts
echo.
echo Press any key to close this window...
pause >nul
