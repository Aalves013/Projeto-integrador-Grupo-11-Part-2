// Widget de Suporte Flutuante
class SuporteWidget {
    constructor() {
        this.isOpen = false;
        this.currentView = 'menu'; // menu, faq, chamado
        this.init();
    }

    init() {
        this.criarWidget();
        this.addEventListeners();
    }

    criarWidget() {
        const widgetHTML = `
            <div id="suporteWidget" class="suporte-widget">
                <button id="suporteBotao" class="suporte-botao">
                    <span class="suporte-icone">?</span>
                    <span class="suporte-texto">Ajuda</span>
                </button>

                <div id="suporteConteudo" class="suporte-conteudo" style="display: none;">
                    <div class="suporte-header">
                        <h3>Como podemos ajudar?</h3>
                        <button id="suporteFechar" class="suporte-fechar">&times;</button>
                    </div>

                    <div id="suporteBody" class="suporte-body">
                        ${this.getMenuHTML()}
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', widgetHTML);
    }

    getMenuHTML() {
        return `
            <div class="suporte-menu">
                <button class="suporte-opcao" onclick="event.stopPropagation(); suporteWidget.mostrarFAQ()">
                    <span class="opcao-icone">📚</span>
                    <div class="opcao-texto">
                        <strong>Perguntas Frequentes</strong>
                        <small>Respostas rápidas para dúvidas comuns</small>
                    </div>
                </button>

                <button class="suporte-opcao" onclick="event.stopPropagation(); suporteWidget.mostrarFormularioChamado()">
                    <span class="opcao-icone">💬</span>
                    <div class="opcao-texto">
                        <strong>Falar com Suporte</strong>
                        <small>Abra um chamado para nossa equipe</small>
                    </div>
                </button>
            </div>
        `;
    }

    getFAQHTML() {
        return `
            <div class="suporte-faq">
                <button class="suporte-voltar" onclick="event.stopPropagation(); suporteWidget.voltarMenu()">
                    ← Voltar
                </button>

                <h4>Perguntas Frequentes</h4>

                <div class="faq-item">
                    <div class="faq-pergunta" onclick="this.parentElement.classList.toggle('active')">
                        <strong>Como cadastrar um medicamento?</strong>
                        <span class="faq-icone">+</span>
                    </div>
                    <div class="faq-resposta">
                        <p>1. Clique em "Cadastrar Medicamento" no menu superior</p>
                        <p>2. Preencha todos os campos obrigatórios (*)</p>
                        <p>3. Verifique as datas de fabricação e validade</p>
                        <p>4. Clique em "Cadastrar Medicamento"</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-pergunta" onclick="this.parentElement.classList.toggle('active')">
                        <strong>Como fazer uma solicitação de medicamento?</strong>
                        <span class="faq-icone">+</span>
                    </div>
                    <div class="faq-resposta">
                        <p>1. Acesse a página "Solicitações"</p>
                        <p>2. Preencha o formulário com o medicamento desejado</p>
                        <p>3. Informe a quantidade necessária</p>
                        <p>4. Aguarde a aprovação do farmacêutico</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-pergunta" onclick="this.parentElement.classList.toggle('active')">
                        <strong>Como filtrar medicamentos por categoria?</strong>
                        <span class="faq-icone">+</span>
                    </div>
                    <div class="faq-resposta">
                        <p>1. Na página inicial, localize o card "Filtrar Medicamentos"</p>
                        <p>2. Selecione a categoria desejada no dropdown</p>
                        <p>3. Clique em "Filtrar"</p>
                        <p>4. Para ver todos novamente, clique em "Limpar Filtro"</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-pergunta" onclick="this.parentElement.classList.toggle('active')">
                        <strong>O que fazer se esquecer minha senha?</strong>
                        <span class="faq-icone">+</span>
                    </div>
                    <div class="faq-resposta">
                        <p>Entre em contato com o suporte através do formulário de chamado informando seu email cadastrado.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-pergunta" onclick="this.parentElement.classList.toggle('active')">
                        <strong>Quem pode aprovar solicitações?</strong>
                        <span class="faq-icone">+</span>
                    </div>
                    <div class="faq-resposta">
                        <p>Apenas usuários com perfil de Farmacêutico ou Administrador podem aprovar ou rejeitar solicitações de medicamentos.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-pergunta" onclick="this.parentElement.classList.toggle('active')">
                        <strong>Como verificar o estoque de medicamentos?</strong>
                        <span class="faq-icone">+</span>
                    </div>
                    <div class="faq-resposta">
                        <p>Na página inicial, cada card de medicamento mostra a quantidade em estoque. Medicamentos com estoque baixo (menos de 10 unidades) aparecem em vermelho.</p>
                    </div>
                </div>
            </div>
        `;
    }

    getFormularioChamadoHTML() {
        return `
            <div class="suporte-chamado">
                <button class="suporte-voltar" onclick="event.stopPropagation(); suporteWidget.voltarMenu()">
                    ← Voltar
                </button>

                <h4>Falar com Suporte</h4>

                <form id="formSuporte" class="suporte-formulario" onsubmit="suporteWidget.enviarChamado(event)">
                    <div class="form-group">
                        <label for="suporteNome">Nome *</label>
                        <input type="text" id="suporteNome" required placeholder="Digite seu nome">
                    </div>

                    <div class="form-group">
                        <label for="suporteEmail">Email *</label>
                        <input type="email" id="suporteEmail" required placeholder="seu@email.com">
                    </div>

                    <div class="form-group">
                        <label for="suporteAssunto">Assunto *</label>
                        <select id="suporteAssunto" required>
                            <option value="">Selecione um assunto</option>
                            <option value="duvida">Dúvida sobre o sistema</option>
                            <option value="problema">Problema técnico</option>
                            <option value="sugestao">Sugestão de melhoria</option>
                            <option value="medicamento">Questão sobre medicamentos</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="suporteMensagem">Mensagem *</label>
                        <textarea id="suporteMensagem" required placeholder="Descreva sua dúvida ou problema..."></textarea>
                    </div>

                    <button type="submit" class="btn-enviar">Enviar Mensagem</button>
                </form>

                <div class="suporte-info" style="margin-top: 20px;">
                    <div class="info-card">
                        <span class="info-icone">📧</span>
                        <div class="info-texto">
                            <strong>Email</strong>
                            <p>suporte@farmacia.com</p>
                        </div>
                    </div>

                    <div class="info-card">
                        <span class="info-icone">📞</span>
                        <div class="info-texto">
                            <strong>Telefone</strong>
                            <p>(11) 1234-5678</p>
                        </div>
                    </div>

                    <div class="info-card">
                        <span class="info-icone">⏰</span>
                        <div class="info-texto">
                            <strong>Horário</strong>
                            <p>Seg-Sex: 8h às 18h</p>
                            <p>Sábado: 8h às 12h</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getSucessoHTML() {
        return `
            <div class="suporte-sucesso">
                <div class="icone-sucesso">✅</div>
                <h4>Mensagem Enviada!</h4>
                <p>Sua mensagem foi enviada com sucesso.</p>
                <p>Nossa equipe responderá em breve por email.</p>
                <button class="suporte-voltar" onclick="event.stopPropagation(); suporteWidget.voltarMenu()" style="margin-top: 20px;">
                    ← Voltar ao Menu
                </button>
            </div>
        `;
    }

    enviarChamado(event) {
        event.preventDefault();

        const nome = document.getElementById('suporteNome').value;
        const email = document.getElementById('suporteEmail').value;
        const assunto = document.getElementById('suporteAssunto').value;
        const mensagem = document.getElementById('suporteMensagem').value;

        // Simulação de envio
        console.log('Chamado de suporte:', { nome, email, assunto, mensagem });

        // Mostrar mensagem de sucesso
        document.getElementById('suporteBody').innerHTML = this.getSucessoHTML();
    }

    addEventListeners() {
        document.getElementById('suporteBotao').addEventListener('click', () => {
            this.toggle();
        });

        document.getElementById('suporteFechar').addEventListener('click', () => {
            this.fechar();
        });

        // Fechar ao clicar fora
        document.addEventListener('click', (e) => {
            const widget = document.getElementById('suporteWidget');
            if (this.isOpen && !widget.contains(e.target)) {
                this.fechar();
            }
        });
    }

    toggle() {
        if (this.isOpen) {
            this.fechar();
        } else {
            this.abrir();
        }
    }

    abrir() {
        const conteudo = document.getElementById('suporteConteudo');
        const botao = document.getElementById('suporteBotao');

        conteudo.style.display = 'block';
        botao.classList.add('active');
        this.isOpen = true;
        this.voltarMenu();
    }

    fechar() {
        const conteudo = document.getElementById('suporteConteudo');
        const botao = document.getElementById('suporteBotao');

        conteudo.style.display = 'none';
        botao.classList.remove('active');
        this.isOpen = false;
    }

    voltarMenu() {
        this.currentView = 'menu';
        document.getElementById('suporteBody').innerHTML = this.getMenuHTML();
    }

    mostrarFAQ() {
        this.currentView = 'faq';
        document.getElementById('suporteBody').innerHTML = this.getFAQHTML();
    }

    mostrarFormularioChamado() {
        this.currentView = 'chamado';
        document.getElementById('suporteBody').innerHTML = this.getFormularioChamadoHTML();
    }
}

// Inicializar widget quando a página carregar
let suporteWidget;
document.addEventListener('DOMContentLoaded', function() {
    suporteWidget = new SuporteWidget();
});
