# 🌐 Configuração de Domínio Customizado

## Domínio: jla.avilaops.com

### 📋 Registros DNS Necessários

Configure no painel DNS de `avilaops.com`:

#### Para Frontend (obrigatório)
```
Tipo:  CNAME
Nome:  jla
Valor: jla-importadora-web.onrender.com
TTL:   3600 (ou automático)
```

#### Para Backend/API (opcional, mas recomendado)
```
Tipo:  CNAME
Nome:  api.jla
Valor: jla-importadora-api.onrender.com
TTL:   3600 (ou automático)
```

---

## 🚀 Configuração no Render

### Frontend (jla-importadora-web)

1. Acesse o serviço no Render Dashboard
2. Vá em **Settings** → **Custom Domain**
3. Clique em **"Add Custom Domain"**
4. Digite: `jla.avilaops.com`
5. Clique em **"Add"**
6. ✅ Render automaticamente provisiona SSL (Let's Encrypt)

### Backend (jla-importadora-api) - Opcional

1. Acesse o serviço no Render Dashboard
2. Vá em **Settings** → **Custom Domain**
3. Clique em **"Add Custom Domain"**
4. Digite: `api.jla.avilaops.com`
5. Clique em **"Add"**
6. ✅ SSL automático

---

## ⏱️ Tempo de Propagação

- **Mínimo**: 5-10 minutos
- **Típico**: 15-30 minutos
- **Máximo**: 24-48 horas

Teste a propagação em: https://dnschecker.org

---

## ✅ Verificação

### Após configurar DNS e adicionar no Render:

```bash
# Verificar DNS
nslookup jla.avilaops.com
nslookup api.jla.avilaops.com

# Testar HTTPS (após propagação)
curl https://jla.avilaops.com
curl https://api.jla.avilaops.com/health
```

### URLs Finais

```
Landing Page: https://jla.avilaops.com
API Backend:  https://api.jla.avilaops.com
              (ou https://jla-importadora-api.onrender.com)
```

---

## 🔧 Atualizar Variáveis de Ambiente

Após configurar domínios customizados:

### Frontend (jla-importadora-web)
```env
NEXT_PUBLIC_API_URL=https://api.jla.avilaops.com
NEXT_PUBLIC_BASE_URL=https://jla.avilaops.com
```

Se decidir não usar domínio para API:
```env
NEXT_PUBLIC_API_URL=https://jla-importadora-api.onrender.com
```

---

## 🎯 Benefícios do Domínio Customizado

- ✅ URL profissional e fácil de lembrar
- ✅ SSL/TLS automático (HTTPS)
- ✅ Independência do provedor (pode migrar sem mudar URL)
- ✅ Melhor SEO
- ✅ Confiança do usuário

---

## 🐛 Troubleshooting

### "Site não carrega" após configurar
- Aguarde propagação DNS (15-30 min)
- Verifique DNS com `nslookup jla.avilaops.com`
- Confirme CNAME no painel DNS

### "Certificado SSL inválido"
- Aguarde até 10 minutos após DNS propagar
- Render provisiona SSL automaticamente
- Verifique status em Settings → Custom Domain

### "DNS_PROBE_FINISHED_NXDOMAIN"
- CNAME não configurado corretamente
- Verifique nome: deve ser apenas `jla`, não `jla.avilaops.com`
- Confirme valor: `jla-importadora-web.onrender.com`

### "Connection timed out"
- Serviço pode estar em sleep (plano free)
- Aguarde ~30s para primeira resposta
- Verifique se serviço está "Live" no Render

---

## 📝 Checklist de Configuração

- [ ] DNS configurado: CNAME `jla` → `jla-importadora-web.onrender.com`
- [ ] DNS configurado (opcional): CNAME `api.jla` → `jla-importadora-api.onrender.com`
- [ ] Domínio adicionado no Render (Frontend)
- [ ] Domínio adicionado no Render (Backend - opcional)
- [ ] Aguardada propagação DNS (15-30 min)
- [ ] SSL ativo (cadeado verde no navegador)
- [ ] `NEXT_PUBLIC_API_URL` atualizada no frontend
- [ ] Testado `https://jla.avilaops.com`
- [ ] Testado `https://api.jla.avilaops.com/health`
- [ ] Redeploy do frontend após atualizar variáveis

---

**Configuração por GitHub Copilot** 🤖✨
