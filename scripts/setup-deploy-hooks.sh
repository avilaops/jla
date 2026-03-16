#!/bin/bash

# Script para obter Deploy Hooks do Render
# Execute após criar os serviços no Render

echo "🔧 Configuração de Deploy Hooks do Render"
echo "=========================================="
echo ""
echo "Para configurar CI/CD automático, você precisa dos Deploy Hooks do Render:"
echo ""

echo "📋 PASSO 1: Obter Deploy Hooks"
echo "-------------------------------"
echo "1. Acesse https://dashboard.render.com"
echo "2. Para cada serviço (Backend API e Frontend):"
echo "   a. Clique no serviço"
echo "   b. Vá em Settings → Deploy Hook"
echo "   c. Copie a URL do Deploy Hook"
echo ""

echo "📋 PASSO 2: Adicionar Secrets no GitHub"
echo "-------------------------------"
echo "1. Acesse: https://github.com/avilaops/jla/settings/secrets/actions"
echo "2. Clique em 'New repository secret'"
echo "3. Adicione os seguintes secrets:"
echo ""
echo "   Nome: RENDER_DEPLOY_HOOK_API"
echo "   Valor: [Cole a URL do Deploy Hook do backend]"
echo ""
echo "   Nome: RENDER_DEPLOY_HOOK_WEB"
echo "   Valor: [Cole a URL do Deploy Hook do frontend]"
echo ""

echo "✅ Após configurar, o CI/CD estará ativo!"
echo ""
echo "🚀 Fluxo de Deploy Automático:"
echo "   git push origin main"
echo "   → GitHub Actions executa testes"
echo "   → Se testes passarem, trigger deploy no Render"
echo "   → Render faz build e deploy automático"
echo "   → Health check pós-deploy"
echo ""
echo "📊 Monitore em: https://github.com/avilaops/jla/actions"
