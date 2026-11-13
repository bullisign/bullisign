#!/bin/bash
# Doppelklick startet die Website lokal und öffnet sie im Browser.
cd "$(dirname "$0")"
if ! command -v npm >/dev/null 2>&1; then
  echo "Node.js ist nicht installiert. Bitte die LTS-Version von https://nodejs.org installieren und danach erneut doppelklicken."
  read -p "Enter zum Schließen"
  exit 1
fi
if [ ! -d node_modules ]; then
  echo "Installiere Abhängigkeiten (nur beim ersten Mal, dauert ca. 1 Minute) ..."
  npm install || { read -p "Installation fehlgeschlagen. Enter zum Schließen"; exit 1; }
fi
echo "Website läuft auf http://localhost:5173 – zum Beenden dieses Fenster schließen."
npm run dev -- --open
