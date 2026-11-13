@echo off
REM Doppelklick startet die Website lokal und oeffnet sie im Browser.
cd /d "%~dp0"
where npm >nul 2>nul
if errorlevel 1 (
  echo Node.js ist nicht installiert. Bitte die LTS-Version von https://nodejs.org installieren und danach erneut doppelklicken.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Installiere Abhaengigkeiten ^(nur beim ersten Mal^) ...
  call npm install
)
echo Website laeuft auf http://localhost:5173 - zum Beenden dieses Fenster schliessen.
call npm run dev -- --open
pause
