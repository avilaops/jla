# 🚀 Guia de Deploy no Render.com

## 📋 Pré-requisitos

1. Conta no [Render.com](https://render.com) (gratuita)
2. Repositório Git commitado e pushed
3. Schema SQL pronto ([database-schema.sql](database-schema.sql))

---

## 🗄️ PASSO 1: Criar Banco de Dados PostgreSQL

1. Acesse o [Dashboard do Render](https://dashboard.render.com)
2. Clique em **"New +"** → **"PostgreSQL"**
3. Configure:
   - **Name**: `jla-postgres`
   - **Database**: `jla_importadora`
   - **User**: `jla_user`
   - **Region**: escolha o mais próximo
   - **Plan**: **Free**
4. Clique em **"Create Database"**
5. ⏳ Aguarde a criação (1-2 minutos)
6. **Copie a URL de conexão interna** (ex: `postgresql://jla_user:...@...`)

### Executar Schema SQL

Após criar o banco:

1. No painel do banco, vá em **"Connect"**
2. Use o **"PSQL Command"** ou a aba **"Shell"**
3. Cole e execute o conteúdo de `database-schema.sql`
4. Verifique se as tabelas foram criadas:
   ```sql
   \dt
   ```
   Deve listar: `produtos`, `categorias`, `promocoes`, `emails_lista`, etc.

---

## 🔧 PASSO 2: Deploy do Backend (API)

1. No Dashboard, clique em **"New +"** → **"Web Service"**
2. Conecte seu repositório GitHub
3. Configure:
   - **Name**: `jla-importadora-api`
   - **Region**: mesma do banco
   - **Branch**: `main` (ou sua branch)
   - **Root Directory**: deixe vazio
   - **Environment**: **Node**
   - **Build Command**: `npm install`
   - **Start Command**: `npm run api`
   - **Plan**: **Free**

4. **Variáveis de Ambiente** → Clique em "Add Environment Variable":
   ```
   NODE_ENV = production
   PORT = 3000
   DATABASE_URL = [Cole a URL do PostgreSQL copiada no Passo 1]
   EMAIL_HOST = smtp.gmail.com
   EMAIL_PORT = 587
   EMAIL_SECURE = false
   EMAIL_USER = seu-email@gmail.com
   EMAIL_PASS = sua-senha-app-gmail
   EMAIL_FROM = JLA Importadora <seu-email@gmail.com>
   ```

5. Clique em **"Create Web Service"**
6. ⏳ Aguarde o build (~2-5 min)
7. **Copie a URL do backend** (ex: `https://jla-importadora-api.onrender.com`)

### Testar API

Abra no navegador:
```
https://jla-importadora-api.onrender.com/health
https://jla-importadora-api.onrender.com/api/produtos
```

---

## 🌐 PASSO 3: Deploy do Frontend (Next.js)

1. No Dashboard, clique em **"New +"** → **"Web Service"**
2. Conecte o mesmo repositório
3. Configure:
   - **Name**: `jla-importadora-web`
   - **Region**: mesma do backend
   - **Branch**: `main`
   - **Root Directory**: deixe vazio
   - **Environment**: **Node**
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: **Free**

4. **Variáveis de Ambiente**:
   ```
   NODE_ENV = production
   NEXT_PUBLIC_API_URL = [Cole a URL do backend copiada no Passo 2]
   ```

5. Clique em **"Create Web Service"**
6. ⏳ Aguarde o build (~3-7 min)
7. **Sua landing page estará no ar!** 🎉

---

## ✅ Verificação Final

### Backend
- [ ] `/health` retorna `{"status":"ok"}`
- [ ] `/api/produtos` retorna lista com 3 produtos
- [ ] `/api/categorias` retorna 3 categorias
- [ ] Logs não mostram erros de conexão PostgreSQL

### Frontend (Após Deploy)
```
https://jla.avilaops.com (domínio customizado)
https://jla-importadora-web.onrender.com (URL Render)
```

### Backend
```
https://api.jla.avilaops.com (domínio customizado)
https://jla-importadora-api.onrender.com (URL Render)
```

---

## 🔗 URLs Esperadas

Após deploy completo:

```
Frontend Web: https://jla.avilaops.com (domínio customizado)
Backend API:  https://api.jla.avilaops.com (recomendado)
              https://jla-importadora-api.onrender.com (alternativa)

Endpoints:
- GET /health
- GET /api/produtos
- GET /api/categorias
- GET /api/promocoes
- GET /api/emails
```

---

## 🌐 Configurar Domínio Customizado (jla.avilaops.com)

### Para o Frontend

1. No Render Dashboard, acesse o serviço **jla-importadora-web**
2. Vá em **Settings** → **Custom Domain**
3. Clique em **"Add Custom Domain"**
4. Digite: `jla.avilaops.com`
5. Render mostrará os registros DNS necessários

### Configurar DNS (no seu provedor)

No painel DNS do domínio `avilaops.com`, adicione:

```
Tipo    Nome    Valor
CNAME   jla     jla-importadora-web.onrender.com
```

**OU** se preferir usar o backend com subdomínio também:

```
Tipo    Nome    Valor
CNAME   jla     jla-importadora-web.onrender.com
CNAME   api.jla jla-importadora-api.onrender.com
```

### Aguardar Propagação
- Propagação DNS: 5 minutos a 48 horas (geralmente 15-30 min)
- Render automaticamente provisiona certificado SSL (Let's Encrypt)
- Após propagação, acesse: `https://jla.avilaops.com`

---

## 📝 Próximos Passos (Opcional)

1. **Domínio customizado**: Configure em Settings → Custom Domain
2. **Monitoramento**: Ative notifications para down/erro
3. **Backups**: PostgreSQL Free não tem backup automático - considere upgrade
4. **CI/CD**: Já funciona automaticamente via GitHub
5. **Analytics**: Adicione Google Analytics ao Next.js
6. **Email real**: Configure Gmail App Password ou use SendGrid

---

**Deploy configurado por GitHub Copilot** 🤖✨
