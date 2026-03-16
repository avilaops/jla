require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do PostgreSQL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL || `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Middleware
app.use(express.json());
app.use(express.static(__dirname));

// CORS para permitir requisições do frontend
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Testar conexão com banco
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('❌ Erro ao conectar ao PostgreSQL:', err.message);
    } else {
        console.log('✅ PostgreSQL conectado:', res.rows[0].now);
    }
});

// Rotas
app.get('/api/produtos', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT codigo, nome, categoria, descricao, material, dureza, pressao, temperatura FROM produtos WHERE ativo = true ORDER BY codigo'
        );
        
        res.json({
            produtos: result.rows,
            totalPaginas: Math.ceil(result.rows.length / 10),
            dataExtracao: new Date().toISOString()
        });
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        // Fallback para dados de exemplo se DB não estiver disponível
        res.json({
            produtos: [
                {
                    codigo: "KH001",
                    nome: "Hydraulic Seal KH Series",
                    categoria: "Hydraulic Sealing",
                    descricao: "Vedação hidráulica de alta performance para aplicações industriais",
                    material: "NBR",
                    dureza: "90 Shore A",
                    pressao: "0-40 MPa",
                    temperatura: "-30°C a +100°C"
                },
                {
                    codigo: "KP002",
                    nome: "Pneumatic Seal KP Series",
                    categoria: "Pneumatic Sealing",
                    descricao: "Vedação pneumática para cilindros e válvulas",
                    material: "PU",
                    dureza: "95 Shore A",
                    pressao: "0-1.6 MPa",
                    temperatura: "-40°C a +80°C"
                },
                {
                    codigo: "KO003",
                    nome: "O-Ring Standard",
                    categoria: "O-Ring",
                    descricao: "O-Ring padrão para diversas aplicações",
                    material: "Viton",
                    dureza: "75 Shore A",
                    pressao: "0-25 MPa",
                    temperatura: "-20°C a +200°C"
                }
            ],
            totalPaginas: 23,
            dataExtracao: new Date().toISOString()
        });
    }
});

app.get('/api/categorias', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT id, nome, icone, descricao FROM categorias WHERE ativo = true ORDER BY ordem'
        );
        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao buscar categorias:', error);
        // Fallback
        res.json([
            { id: 1, nome: "Hydraulic Sealing", icone: "🔧", descricao: "Vedações hidráulicas" },
            { id: 2, nome: "Pneumatic Sealing", icone: "💨", descricao: "Vedações pneumáticas" },
            { id: 3, nome: "O-Ring", icone: "⭕", descricao: "Anéis de vedação" }
        ]);
    }
});

// Email Marketing endpoints
app.get('/api/promocoes', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM promocoes WHERE ativo = true AND data_inicio <= NOW() AND data_fim >= NOW() ORDER BY prioridade DESC'
        );
        res.json({ promocoes: result.rows });
    } catch (error) {
        console.error('Erro ao buscar promoções:', error);
        res.json({ promocoes: [] });
    }
});

app.get('/api/emails', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT email, nome, empresa FROM emails_lista WHERE ativo = true AND confirmado = true'
        );
        res.json({ emails: result.rows });
    } catch (error) {
        console.error('Erro ao buscar emails:', error);
        res.json({ emails: [] });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
    console.log(`📦 API de produtos e email marketing disponível`);
    console.log(`🗄️  PostgreSQL: ${process.env.DATABASE_URL ? 'Produção' : 'Local'}`);
});
