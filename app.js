// Estado da aplicação
let catalogoData = null;
let itensFiltrados = [];

// Carregar dados do catálogo
async function carregarCatalogo() {
    try {
        const response = await fetch('/api/produtos');
        catalogoData = await response.json();
        itensFiltrados = catalogoData.produtos || [];
        
        atualizarEstatisticas();
        renderizarCatalogo();
    } catch (error) {
        console.error('Erro ao carregar catálogo:', error);
        document.getElementById('catalogoContainer').innerHTML = `
            <div class="loading" style="color: red;">
                ❌ Erro ao carregar catálogo. Servidor não disponível.
            </div>
        `;
    }
}

// Atualizar estatísticas
function atualizarEstatisticas() {
    if (!catalogoData) return;
    
    document.getElementById('totalItems').textContent = `${itensFiltrados.length} itens`;
    document.getElementById('totalPaginas').textContent = `${catalogoData.totalPaginas || 0} páginas`;
    
    const dataExtracao = catalogoData.dataExtracao ? new Date(catalogoData.dataExtracao).toLocaleDateString('pt-BR') : 'N/A';
    document.getElementById('dataExtracao').textContent = dataExtracao;
}

// Renderizar catálogo
function renderizarCatalogo() {
    const container = document.getElementById('catalogoContainer');
    
    if (!itensFiltrados || itensFiltrados.length === 0) {
        container.innerHTML = '<div class="loading">Nenhum item encontrado</div>';
        return;
    }
    
    container.innerHTML = itensFiltrados.map((item, index) => `
        <div class="produto-card" style="animation-delay: ${index * 0.03}s">
            <div class="produto-icon">🔧</div>
            <span class="produto-codigo">${item.codigo || 'SEM CÓDIGO'}</span>
            ${item.categoria ? `<div class="produto-categoria">⚙️ ${item.categoria}</div>` : ''}
            <div class="produto-nome">${item.nome || item.linha || 'Produto'}</div>
            ${item.descricao ? `<div class="produto-descricao">${item.descricao.substring(0, 150)}...</div>` : ''}
        </div>
    `).join('');
}

// Filtrar produtos
function filtrarProdutos() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (!catalogoData) return;
    
    if (!searchTerm) {
        itensFiltrados = catalogoData.produtos;
    } else {
        itensFiltrados = catalogoData.produtos.filter(item => {
            const searchIn = JSON.stringify(item).toLowerCase();
            return searchIn.includes(searchTerm);
        });
    }
    
    atualizarEstatisticas();
    renderizarCatalogo();
}

// Filtrar por categoria
function filtrarPorCategoria(categoria) {
    if (!catalogoData) return;
    
    if (categoria === 'todos') {
        itensFiltrados = catalogoData.produtos;
    } else if (categoria === 'produto') {
        itensFiltrados = catalogoData.produtos.filter(item => item.codigo);
    } else if (categoria === 'texto') {
        itensFiltrados = catalogoData.produtos.filter(item => item.tipo === 'texto');
    }
    
    atualizarEstatisticas();
    renderizarCatalogo();
}

// Mostrar todos
function mostrarTodos() {
    if (!catalogoData) return;
    itensFiltrados = catalogoData.produtos;
    document.getElementById('searchInput').value = '';
    atualizarEstatisticas();
    renderizarCatalogo();
}

// Editar empresa (placeholder)
function editarEmpresa() {
    alert('Função de edição da empresa em desenvolvimento');
}

// Gerenciar categorias (placeholder)
function abrirGerenciarCategorias() {
    alert('Gerenciamento de categorias em desenvolvimento');
}

// Email marketing (placeholder)
function abrirEmailMarketing() {
    alert('Sistema de email marketing em desenvolvimento');
}

// Ver PDF original
function verPDFOriginal() {
    alert('Visualização de PDF em desenvolvimento');
}

function fecharPDF() {
    document.getElementById('pdfModal').style.display = 'none';
}

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        fecharPDF();
    }
});

// Permitir busca com Enter
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                filtrarProdutos();
            }
        });
    }
    
    // Carregar catálogo ao iniciar
    carregarCatalogo();
});
