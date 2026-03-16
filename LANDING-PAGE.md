# JLA IMPORTADORA - Landing Page

Landing page profissional desenvolvida com **Next.js 14** e **TypeScript**.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **React 18** - Biblioteca JavaScript

## 📋 Estrutura do Projeto

```
├── app/
│   ├── globals.css       # Estilos globais com Tailwind
│   ├── layout.tsx        # Layout principal da aplicação
│   └── page.tsx          # Página inicial (landing page)
├── components/
│   ├── Navbar.tsx        # Barra de navegação responsiva
│   ├── Hero.tsx          # Seção hero com CTA
│   ├── About.tsx         # Sobre a empresa
│   ├── Services.tsx      # Serviços oferecidos (6 cards)
│   ├── Advantages.tsx    # Diferenciais e estatísticas
│   ├── CTA.tsx           # Call to Action
│   ├── Contact.tsx       # Formulário de contato
│   └── Footer.tsx        # Rodapé com links e redes sociais
├── tsconfig.json         # Configuração TypeScript
├── tailwind.config.ts    # Configuração Tailwind
├── next.config.js        # Configuração Next.js
└── postcss.config.js     # Configuração PostCSS

```

## 🎨 Seções da Landing Page

### 1. **Hero Section**
- Título impactante com gradiente
- Subtítulo descritivo
- 2 CTAs principais
- Design responsivo com animações

### 2. **Sobre Nós**
- Descrição da empresa
- Cards com estatísticas:
  - 15+ anos de experiência
  - 500+ clientes satisfeitos
  - 50+ países de origem

### 3. **Serviços** (6 cards)
1. Consultoria em Importação
2. Sourcing Internacional
3. Desembaraço Aduaneiro
4. Logística Internacional
5. Trading de Produtos
6. Assessoria Tributária

### 4. **Vantagens** (6 cards)
- Economia de Tempo
- Redução de Custos
- Segurança Jurídica
- Rede Global
- Acompanhamento em Tempo Real
- Suporte Especializado

### 5. **Resultados Comprovados**
- 98% Taxa de Satisfação
- -30% Redução Média de Custos
- 24h Tempo Médio de Resposta

### 6. **Call to Action**
- Botões para contato e orçamento
- Design destacado com fundo verde

### 7. **Formulário de Contato**
- Campos: Nome, Email, Telefone, Empresa, Mensagem
- Informações de contato completas
- Endereço e horário de atendimento
- Links para redes sociais

### 8. **Footer**
- Logo e descrição
- Links rápidos
- Informações de contato
- CNPJ

## 🎨 Paleta de Cores

```css
--primary: #0f3460    (Azul escuro)
--secondary: #16c784  (Verde)
--accent: #e94560     (Vermelho)
```

## 🏃‍♂️ Como Executar

### Desenvolvimento
```bash
npm run dev
```
Acesse: http://localhost:3001 (ou próxima porta disponível)

### Build de Produção
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 📱 Responsividade

A landing page é totalmente responsiva com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ✨ Recursos

- ✅ Design moderno e profissional
- ✅ Navegação suave entre seções
- ✅ Animações e transições
- ✅ Menu mobile hamburguer
- ✅ Formulário de contato funcional
- ✅ SEO otimizado (metadata)
- ✅ TypeScript para segurança de tipos
- ✅ Componentes reutilizáveis
- ✅ Performance otimizada com Next.js

## 🔧 Personalização

### Alterar Cores
Edite `tailwind.config.ts`:
```typescript
colors: {
  primary: '#0f3460',
  secondary: '#16c784',
  accent: '#e94560',
}
```

### Alterar Conteúdo
Edite diretamente os componentes em `/components`:
- Textos, descrições e títulos
- Ícones SVG
- Links e contatos

### Adicionar Novas Seções
1. Crie um novo componente em `/components`
2. Importe e adicione em `app/page.tsx`

## 📦 Dependências Principais

```json
{
  "next": "^14.1.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "typescript": "^5.3.3",
  "tailwindcss": "^3.4.1"
}
```

## 🌐 Deploy

Recomendado: **Vercel** (zero config)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Outras opções: Netlify, AWS Amplify, Railway

## 📄 Licença

ISC

---

**Desenvolvido com Next.js e TypeScript** 🚀
