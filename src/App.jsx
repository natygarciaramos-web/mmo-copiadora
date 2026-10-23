import "./App.css"
import logo from "./assets/logo-mmo.png"

import copiasImg from "./assets/servicos/copias.png"
import plotagensImg from "./assets/servicos/plotagens.png"
import plastificacaoImg from "./assets/servicos/plastificacao.png"
import cartaoVisitaImg from "./assets/servicos/cartao-visita.png"
import digitalizacaoImg from "./assets/servicos/digitalizacao.png"
import personalizadosImg from "./assets/servicos/personalizados.png"

import {
  Files,
  ScanLine,
  CreditCard,
  FileImage,
  Maximize,
  MapPin,
  Phone,
  Clock3,
  Mail,
  MessageCircle,
  Zap,
  CheckCircle2,
  BadgeDollarSign,
  Scissors,

} from "lucide-react"

function App() {
  const whatsapp =
    "https://wa.me/5521975338356?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."

  const mapa =
    "https://www.google.com/maps/search/?api=1&query=Largo+do+Machado+8+Rio+de+Janeiro"

  return (
    <div className="site">

      {/* ================= MENU ================= */}

      <header className="header">
        <div className="container nav">

          <a href="#inicio" aria-label="MMO Copiadora - Início">
            <img
              src={logo}
              alt="MMO Copiadora"
              className="logo"
            />
          </a>

          <nav>
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre nós</a>
            <a href="#contato">Contato</a>
          </nav>

          <a
            className="btn-orcamento"
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Pedir orçamento
          </a>

        </div>
      </header>


      <main>

        {/* ================= HOME ================= */}

        <section className="hero" id="inicio">

          <div className="container hero-content">

            <div className="hero-text">

              <span className="destaque">
                MMO COPIADORA
              </span>

              <h1>
                Suas ideias ganham
                <strong> formas impressas.</strong>
              </h1>

              <p>
                Impressões, cópias, plotagens e soluções gráficas
                com rapidez, qualidade e atendimento personalizado.
              </p>

              <div className="hero-buttons">

                <a
                  className="btn-principal"
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  Solicitar orçamento
                </a>

                <a
                  className="btn-secundario"
                  href="#servicos"
                >
                  Conheça nossos serviços
                </a>

              </div>

            </div>


            <div className="hero-logo">
              <img
                src={logo}
                alt="Logo da MMO Copiadora"
              />
            </div>

          </div>

        </section>


        {/* ================= SERVIÇOS ================= */}

        <section className="servicos" id="servicos">

          <div className="container">

            <div className="section-header">

              <span className="section-tag">
                NOSSOS SERVIÇOS
              </span>

              <h2>
                Soluções para o que você precisa
              </h2>

              <p>
                Da impressão de um documento à produção de materiais
                para seu trabalho ou negócio.
              </p>

            </div>


            <div className="servicos-grid">

              {/* CÓPIAS E IMPRESSÕES */}

              <div className="servico-card servico-card-foto">

                <div className="servico-imagem">
                  <img
                    src={copiasImg}
                    alt="Serviço de cópias e impressões da MMO Copiadora"
                  />
                </div>

                <div className="servico-conteudo">

                  <div className="servico-titulo">

                    <div className="servico-icon">
                      <Files size={27} />
                    </div>

                    <div>
                      <h3>Cópias e Impressões</h3>
                      <span>Coloridas e preto e branco</span>
                    </div>

                  </div>

                  <h4>Qualidade em cada trabalho</h4>

                  <p>
                    Cópias e impressões coloridas e em preto e branco, com ótima
                    definição, cores nítidas e acabamento de qualidade.
                  </p>

                  <div className="servico-selos">
                    <span>Colorido e P&amp;B</span>
                    <span>Alta definição</span>
                    <span>Qualidade</span>
                  </div>

                </div>

              </div>


              {/* PLOTAGENS */}

              <div className="servico-card servico-card-foto">

                <div className="servico-imagem">
                  <img
                    src={plotagensImg}
                    alt="Plotagem de projetos em grande formato"
                  />
                </div>

                <div className="servico-conteudo">

                  <div className="servico-titulo">

                    <div className="servico-icon">
                      <Maximize size={27} />
                    </div>

                    <div>
                      <h3>Plotagens</h3>
                      <span>Grandes formatos</span>
                    </div>

                  </div>

                  <h4>Precisão nos grandes formatos</h4>

                  <p>
                    Plotagens coloridas e em preto e branco para projetos,
                    plantas, desenhos técnicos e outros trabalhos.
                  </p>

                  <div className="servico-selos">
                    <span>Grandes formatos</span>
                    <span>Alta precisão</span>
                    <span>Colorido e P&amp;B</span>
                  </div>

                </div>

              </div>


              {/* PLASTIFICAÇÃO */}

              <div className="servico-card servico-card-foto">

                <div className="servico-imagem">
                  <img
                    src={plastificacaoImg}
                    alt="Serviço profissional de plastificação"
                  />
                </div>

                <div className="servico-conteudo">

                  <div className="servico-titulo">

                    <div className="servico-icon">
                      <FileImage size={27} />
                    </div>

                    <div>
                      <h3>Plastificação</h3>
                      <span>Proteção e durabilidade</span>
                    </div>

                  </div>

                  <h4>Proteção para seus materiais</h4>

                  <p>
                    Plastificação para preservar documentos e materiais,
                    proporcionando maior resistência e durabilidade.
                  </p>

                  <div className="servico-selos">
                    <span>Proteção</span>
                    <span>Durabilidade</span>
                    <span>Bom acabamento</span>
                  </div>

                </div>

              </div>


              {/* CARTÃO DE VISITA */}

              <div className="servico-card servico-card-foto">

                <div className="servico-imagem">
                  <img
                    src={cartaoVisitaImg}
                    alt="Cartões de visita impressos"
                  />
                </div>

                <div className="servico-conteudo">

                  <div className="servico-titulo">

                    <div className="servico-icon">
                      <CreditCard size={27} />
                    </div>

                    <div>
                      <h3>Cartão de visita</h3>
                      <span>Apresente seu negócio</span>
                    </div>

                  </div>

                  <h4>Uma boa impressão começa aqui</h4>

                  <p>
                    Cartões de visita para apresentar sua marca com
                    qualidade e fortalecer sua imagem profissional.
                  </p>

                  <div className="servico-selos">
                    <span>Qualidade</span>
                    <span>Bom acabamento</span>
                    <span>Profissional</span>
                  </div>

                </div>

              </div>


              {/* DIGITALIZAÇÃO */}

              <div className="servico-card servico-card-foto">

                <div className="servico-imagem">
                  <img
                    src={digitalizacaoImg}
                    alt="Digitalização profissional de documentos"
                  />
                </div>

                <div className="servico-conteudo">

                  <div className="servico-titulo">

                    <div className="servico-icon">
                      <ScanLine size={27} />
                    </div>

                    <div>
                      <h3>Digitalização</h3>
                      <span>Documentos e trabalhos</span>
                    </div>

                  </div>

                  <h4>Seus documentos no formato digital</h4>

                  <p>
                    Digitalização de documentos e trabalhos em geral
                    com praticidade, qualidade e segurança.
                  </p>

                  <div className="servico-selos">
                    <span>Praticidade</span>
                    <span>Qualidade</span>
                    <span>Segurança</span>
                  </div>

                </div>

              </div>


              {/* CORTE E PERSONALIZADOS */}

              <div className="servico-card servico-card-foto servico-personalizados">

                <div className="servico-imagem">
                  <img
                    src={personalizadosImg}
                    alt="Máquina de corte para produção de adesivos, etiquetas e personalizados"
                  />
                </div>

                <div className="servico-conteudo">

                  <div className="servico-titulo">

                    <div className="servico-icon">
                      <Scissors size={27} />
                    </div>

                    <div>
                      <h3>Corte e Personalizados</h3>
                      <span>Produção com máquina de corte</span>
                    </div>

                  </div>

                  <h4>Detalhes que dão forma às suas ideias</h4>

                  <p>
                    Produção personalizada de adesivos, etiquetas, topo de bolo
                    e outros materiais, com corte preciso e acabamento cuidadoso.
                  </p>

                  <div className="servico-selos">
                    <span>Adesivos</span>
                    <span>Etiquetas</span>
                    <span>Topo de bolo</span>
                  </div>

                </div>

              </div>

            </div>


            {/* SERVIÇOS NÃO LISTADOS */}

            <div className="servicos-cta">

              <div>

                <strong>
                  Precisa de outro serviço?
                </strong>

                <p>
                  Consulte nossa equipe sobre outros trabalhos disponíveis.
                </p>

              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={20} />
                Consultar serviço
              </a>

            </div>

          </div>

        </section>


        {/* ================= SOBRE ================= */}

        <section className="sobre" id="sobre">

          <div className="container sobre-content">

            <div className="sobre-destaque">

              <div className="anos-box">

                <span className="numero-anos">
                  12
                </span>

                <div>
                  <strong>ANOS</strong>
                  <p>no mercado</p>
                </div>

              </div>


              <div className="sobre-frase">
                Experiência que se transforma em
                qualidade para nossos clientes.
              </div>

            </div>


            <div className="sobre-texto">

              <span className="section-tag">
                SOBRE A MMO
              </span>

              <h2>
                Há 12 anos transformando ideias em resultados
              </h2>

              <p>
                A MMO Copiadora atua há 12 anos oferecendo soluções
                em impressão, cópias, plotagens, digitalização e
                outros serviços gráficos.
              </p>

              <p>
                Nossa missão é facilitar o dia a dia dos nossos
                clientes, oferecendo serviços com agilidade,
                qualidade e atendimento próximo.
              </p>


              <div className="diferenciais">

                <div className="diferencial-item">

                  <span>
                    <Zap size={24} />
                  </span>

                  <div>
                    <strong>Rapidez</strong>
                    <p>Agilidade para você não perder tempo.</p>
                  </div>

                </div>


                <div className="diferencial-item">

                  <span>
                    <CheckCircle2 size={24} />
                  </span>

                  <div>
                    <strong>Qualidade</strong>
                    <p>Cuidado em cada trabalho realizado.</p>
                  </div>

                </div>


                <div className="diferencial-item">

                  <span>
                    <BadgeDollarSign size={24} />
                  </span>

                  <div>
                    <strong>Melhor preço</strong>
                    <p>
                      Qualidade e praticidade com ótimo custo-benefício.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CONTATO ================= */}

        <section className="contato" id="contato">

          <div className="container">

            <div className="section-header">

              <span className="section-tag">
                FALE CONOSCO
              </span>

              <h2>
                Estamos prontos para atender você
              </h2>

              <p>
                Aqui você encontra nossos canais de atendimento,
                endereço e horários.
              </p>

            </div>


            <div className="contato-grid">

              {/* ENDEREÇO */}

              <div className="contato-card">

                <div className="contato-icon">
                  <MapPin size={30} />
                </div>

                <h3>Onde estamos</h3>

                <p>Largo do Machado, nº 08</p>
                <p>Loja I</p>
                <p>Rio de Janeiro - RJ</p>

                <a
                  href={mapa}
                  target="_blank"
                  rel="noreferrer"
                >
                  Como chegar →
                </a>

              </div>


              {/* TELEFONES */}

              <div className="contato-card">

                <div className="contato-icon">
                  <Phone size={30} />
                </div>

                <h3>Fale conosco</h3>

                <p>WhatsApp</p>

                <strong>
                  (21) 97533-8356
                </strong>

                <p className="telefone-secundario">
                  Telefone: (21) 3259-5407
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chamar no WhatsApp →
                </a>

              </div>


              {/* HORÁRIO */}

              <div className="contato-card">

                <div className="contato-icon">
                  <Clock3 size={30} />
                </div>

                <h3>Horário de atendimento</h3>

                <p>Segunda a sexta</p>

                <strong>
                  8h30 às 18h
                </strong>

                <p className="horario-sabado">
                  Sábado
                </p>

                <strong>
                  8h30 às 13h
                </strong>

              </div>

            </div>


            {/* E-MAIL */}

            <div className="email-box">

              <div>

                <span>
                  <Mail size={26} />
                </span>

                <div>

                  <small>
                    PREFERE E-MAIL?
                  </small>

                  <strong>
                    mmocopiadora@gmail.com
                  </strong>

                </div>

              </div>

              <a href="mailto:mmocopiadora@gmail.com">
                Enviar e-mail
              </a>

            </div>

          </div>

        </section>


        {/* ================= CHAMADA FINAL ================= */}

        <section className="cta-final">

          <div className="container cta-final-content">

            <div>

              <span>
                MMO COPIADORA
              </span>

              <h2>
                Seu projeto merece
                <br />
                uma boa impressão.
              </h2>

              <p>
                Conte com a experiência da MMO para transformar
                suas ideias em materiais impressos.
              </p>

            </div>


            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={21} />
              Pedir orçamento
            </a>

          </div>

        </section>

      </main>


      {/* ================= RODAPÉ ================= */}

      <footer className="footer">

        <div className="container footer-content">

          {/* MARCA */}

          <div className="footer-marca">

            <img
              src={logo}
              alt="MMO Copiadora"
            />

            <p>
              Rapidez, qualidade e melhor preço.
            </p>

          </div>


          {/* NAVEGAÇÃO */}

          <div className="footer-links">

            <strong>Navegação</strong>

            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre nós</a>
            <a href="#contato">Contato</a>

          </div>


          {/* REDES E EMPRESA */}

          <div className="footer-contato">

            <strong>Siga a MMO</strong>

            <div className="redes-sociais">

              <div className="rede-item">
                <span className="instagram-letra">◎</span>
                <span>@mmocopiadora</span>
              </div>

              <div className="rede-item">
                <span className="facebook-letra">f</span>
                <span>mmocopiadora</span>
              </div>

            </div>

            <p className="footer-cnpj">
              CNPJ: 20.814.558/0001-18
            </p>

          </div>

        </div>


        <div className="footer-bottom">

          <div className="container">

            <p>
              © 2026 MMO Copiadora. Todos os direitos reservados.
            </p>

          </div>

        </div>

      </footer>


      {/* ================= WHATSAPP FLUTUANTE ================= */}

      <a
        className="whatsapp-flutuante"
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a MMO Copiadora pelo WhatsApp"
      >
        <MessageCircle size={29} />
      </a>

    </div>
  )
}

export default App