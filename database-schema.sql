-- ============================================================================
-- SISTEMA DE E-MAIL MARKETING E PROMOÇÕES
-- ============================================================================

-- Tabela de Produtos (NOVA)
CREATE TABLE IF NOT EXISTS produtos (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(50) NOT NULL UNIQUE,
    nome VARCHAR(255) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    descricao TEXT,
    material VARCHAR(100),
    dureza VARCHAR(50),
    pressao VARCHAR(50),
    temperatura VARCHAR(100),
    ativo BOOLEAN DEFAULT TRUE,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Categorias (NOVA)
CREATE TABLE IF NOT EXISTS categorias (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE,
    icone VARCHAR(10),
    descricao TEXT,
    ativo BOOLEAN DEFAULT TRUE,
    ordem INTEGER DEFAULT 0
);

-- Tabela de Promoções
CREATE TABLE IF NOT EXISTS promocoes (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    desconto_texto VARCHAR(100),
    desconto_percentual INTEGER DEFAULT 0,
    desconto_valor DECIMAL(10, 2) DEFAULT 0,
    codigo_cupom VARCHAR(50) UNIQUE,
    produtos_ids TEXT,
    imagem_url TEXT,
    data_inicio TIMESTAMP NOT NULL,
    data_fim TIMESTAMP NOT NULL,
    ativo BOOLEAN DEFAULT TRUE,
    prioridade INTEGER DEFAULT 0,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Lista de E-mails
CREATE TABLE IF NOT EXISTS emails_lista (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    nome VARCHAR(255),
    telefone VARCHAR(50),
    empresa VARCHAR(255),
    cargo VARCHAR(100),
    ativo BOOLEAN DEFAULT TRUE,
    confirmado BOOLEAN DEFAULT FALSE,
    token_confirmacao VARCHAR(100),
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_confirmacao TIMESTAMP,
    data_ultimo_email TIMESTAMP
);

-- Tabela de Histórico de Disparos
CREATE TABLE IF NOT EXISTS email_estatisticas (
    id SERIAL PRIMARY KEY,
    disparo_id INTEGER NOT NULL,
    promocao_id INTEGER REFERENCES promocoes(id),
    assunto VARCHAR(255) NOT NULL,
    total_enviado INTEGER DEFAULT 0,
    total_sucesso INTEGER DEFAULT 0,
    total_falha INTEGER DEFAULT 0,
    data_disparo TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'concluido'
);

-- Tabela de E-mails Enviados (detalhado)
CREATE TABLE IF NOT EXISTS emails_enviados (
    id SERIAL PRIMARY KEY,
    disparo_id INTEGER NOT NULL,
    email_id INTEGER REFERENCES emails_lista(id),
    status VARCHAR(20) NOT NULL,
    erro_mensagem TEXT,
    data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_produtos_codigo ON produtos(codigo);
CREATE INDEX IF NOT EXISTS idx_produtos_categoria ON produtos(categoria);
CREATE INDEX IF NOT EXISTS idx_produtos_ativo ON produtos(ativo);
CREATE INDEX IF NOT EXISTS idx_categorias_ativo ON categorias(ativo);
CREATE INDEX IF NOT EXISTS idx_promocoes_ativo ON promocoes(ativo);
CREATE INDEX IF NOT EXISTS idx_promocoes_datas ON promocoes(data_inicio, data_fim);
CREATE INDEX IF NOT EXISTS idx_emails_lista_email ON emails_lista(email);
CREATE INDEX IF NOT EXISTS idx_emails_lista_ativo ON emails_lista(ativo, confirmado);

-- ============================================================================
-- DADOS INICIAIS (SEED DATA)
-- ============================================================================

-- Inserir categorias
INSERT INTO categorias (nome, icone, descricao, ordem) VALUES
    ('Hydraulic Sealing', '🔧', 'Vedações hidráulicas de alta performance', 1),
    ('Pneumatic Sealing', '💨', 'Vedações pneumáticas para cilindros e válvulas', 2),
    ('O-Ring', '⭕', 'Anéis de vedação para diversas aplicações', 3)
ON CONFLICT (nome) DO NOTHING;

-- Inserir produtos de exemplo
INSERT INTO produtos (codigo, nome, categoria, descricao, material, dureza, pressao, temperatura) VALUES
    ('KH001', 'Hydraulic Seal KH Series', 'Hydraulic Sealing', 'Vedação hidráulica de alta performance para aplicações industriais', 'NBR', '90 Shore A', '0-40 MPa', '-30°C a +100°C'),
    ('KP002', 'Pneumatic Seal KP Series', 'Pneumatic Sealing', 'Vedação pneumática para cilindros e válvulas', 'PU', '95 Shore A', '0-1.6 MPa', '-40°C a +80°C'),
    ('KO003', 'O-Ring Standard', 'O-Ring', 'O-Ring padrão para diversas aplicações', 'Viton', '75 Shore A', '0-25 MPa', '-20°C a +200°C')
ON CONFLICT (codigo) DO NOTHING;

-- Comentários
COMMENT ON TABLE produtos IS 'Catálogo de produtos importados';
COMMENT ON TABLE categorias IS 'Categorias de produtos';
COMMENT ON TABLE promocoes IS 'Armazena promoções para campanhas de email marketing';
COMMENT ON TABLE emails_lista IS 'Lista de emails cadastrados para receber promoções';
COMMENT ON TABLE email_estatisticas IS 'Estatísticas gerais de cada disparo';
COMMENT ON TABLE emails_enviados IS 'Log detalhado de cada email enviado';
