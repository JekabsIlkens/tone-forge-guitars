@echo off

set PROJECT_DIR=%~dp0

start cmd /k "cd /d %PROJECT_DIR% && npm run dev"

start cmd /k "cd /d %PROJECT_DIR% && symfony serve"

start https://localhost:8000/