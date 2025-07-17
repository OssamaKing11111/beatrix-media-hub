@echo off
echo Starting Beatrix One Media Hub...
echo.
cd /d "%~dp0"
echo Current directory: %CD%
echo.
echo Installing dependencies (if needed)...
npm install
echo.
echo Starting development server...
npm run dev
pause
