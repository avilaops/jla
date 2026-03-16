-- ============================================================================
-- SISTEMA DE E-MAIL MARKETING E PROMOÇÕES
-- ============================================================================

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
CREATE INDEX IF NOT EXISTS idx_promocoes_ativo ON promocoes(ativo);
CREATE INDEX IF NOT EXISTS idx_promocoes_datas ON promocoes(data_inicio, data_fim);
CREATE INDEX IF NOT EXISTS idx_emails_lista_email ON emails_lista(email);
CREATE INDEX IF NOT EXISTS idx_emails_lista_ativo ON emails_lista(ativo, confirmado);

-- Comentários
COMMENT ON TABLE promocoes IS 'Armazena promoções para campanhas de email marketing';
COMMENT ON TABLE emails_lista IS 'Lista de emails cadastrados para receber promoções';
COMMENT ON TABLE email_estatisticas IS 'Estatísticas gerais de cada disparo';
COMMENT ON TABLE emails_enviados IS 'Log detalhado de cada email enviado';
