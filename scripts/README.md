# Scripts de Deploy e Automação

Scripts auxiliares para CI/CD e deploy no Render.

## setup-deploy-hooks.sh

Script interativo para configurar Deploy Hooks do Render no GitHub Secrets.

### Como usar:

```bash
# Linux/Mac
chmod +x scripts/setup-deploy-hooks.sh
./scripts/setup-deploy-hooks.sh

# Windows (Git Bash)
bash scripts/setup-deploy-hooks.sh
```

### O que faz:
- Mostra instruções para obter Deploy Hooks no Render
- Guia para adicionar secrets no GitHub
- Explica o fluxo de CI/CD

## Obtendo Deploy Hooks Manualmente

### Backend (jla-importadora-api)
1. Dashboard Render → jla-importadora-api
2. Settings → Deploy Hook
3. Copie a URL (formato: `https://api.render.com/deploy/srv-xxxxx?key=yyyy`)

### Frontend (jla-importadora-web)
1. Dashboard Render → jla-importadora-web
2. Settings → Deploy Hook
3. Copie a URL

## Configurando no GitHub

1. Acesse: https://github.com/avilaops/jla/settings/secrets/actions
2. New repository secret:
   - `RENDER_DEPLOY_HOOK_API` = URL do backend
   - `RENDER_DEPLOY_HOOK_WEB` = URL do frontend

## Testando

Após configurar:

```bash
git commit -m "test: Testing CI/CD pipeline"
git push origin main
```

Monitore em: https://github.com/avilaops/jla/actions
