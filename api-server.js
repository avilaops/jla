require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(__dirname));

// Dados de exemplo
const produtosExemplo = {
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
};

// Rotas
app.get('/api/produtos', (req, res) => {
    res.json(produtosExemplo);
});

app.get('/api/categorias', (req, res) => {
    res.json([
        {
            id: 1,
            nome: "Hydraulic Sealing",
            icone: "🔧",
            descricao: "Vedações hidráulicas"
        },
        {
            id: 2,
            nome: "Pneumatic Sealing",
            icone: "💨",
            descricao: "Vedações pneumáticas"
        },
        {
            id: 3,
            nome: "O-Ring",
            icone: "⭕",
            descricao: "Anéis de vedação"
        }
    ]);
});

// Email Marketing endpoints (placeholder)
app.get('/api/promocoes', (req, res) => {
    res.json({ promocoes: [] });
});

app.get('/api/emails', (req, res) => {
    res.json({ emails: [] });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
    console.log(`📦 Catálogo disponível com ${produtosExemplo.produtos.length} produtos de exemplo`);
});
