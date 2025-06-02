import { useState, useMemo } from 'react';
import { Search, MapPin, Star, Phone, Mail, X, Clock, DollarSign, Home, Award, User } from 'lucide-react';
import Styles from '../css/ListaEducacional.module.css'

function ListaEducacional() {
  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState('');
  const [localizacaoSelecionada, setLocalizacaoSelecionada] = useState('');
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [modalAberto, setModalAberto] = useState(false);
  const [profissionalSelecionado, setProfissionalSelecionado] = useState(null);
  const profissionaisPorPagina = 4;

  const especialidades = [
    'Neuroeducador',
    'Professor de Educação Especial',
    'Educador Multidisciplinar',
    'Pedagogo com Especialização em Inclusão',
  'Coordenador de Inclusão Escolar',
  'Psicopedagogo',
  'Educador de Apoio Escolar'
  ];

  const estados = [
    'São Paulo, SP',
    'Rio de Janeiro, RJ', 
    'Minas Gerais, MG',
    'Paraná, PR',
    'Rio Grande do Sul, RS',
    'Bahia, BA',
    'Santa Catarina, SC',
    'Goiás, GO'
  ];

  const profissionais = [
    // Neuroeducador
    {
      id: 1,
      nome: 'Prof. Mariana Silva',
      especialidade: 'Neuroeducador',
      credencial: 'CNE 123456/SP',
      experiencia: '12 anos de experiência em neuroeducação para pessoas com síndrome de Down.',
      descricao: 'Especialista em aplicar princípios de neurociência para otimizar o aprendizado de alunos com síndrome de Down, utilizando estratégias personalizadas para desenvolvimento cognitivo.',
      localizacao: 'São Paulo, SP',
      avaliacao: 5.0,
      telefone: '(11) 99999-9999',
      email: 'mariana.silva@email.com',
      foto: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      valorConsulta: 'R$ 150,00',
      tipoAtendimento: 'Presencial e Online',
      localAtendimento: 'Centro de Neuroeducação - Vila Mariana',
      horarioFuncionamento: 'Seg-Sex: 08:00-18:00 | Sáb: 08:00-12:00',
      formacao: 'Graduação em Pedagogia - USP, Especialização em Neuroeducação',
      abordagens: ['Neuroeducação', 'Estratégias Cognitivas', 'Aprendizagem Personalizada']
    },
    {
      id: 2,
      nome: 'Prof. João Mendes',
      especialidade: 'Neuroeducador',
      credencial: 'CNE 654321/RJ',
      experiencia: '10 anos de experiência em neurociência aplicada à educação.',
      descricao: 'Focado em desenvolver habilidades cognitivas e socioemocionais em alunos com síndrome de Down, utilizando abordagens baseadas em neurociência.',
      localizacao: 'Rio de Janeiro, RJ',
      avaliacao: 4.9,
      telefone: '(21) 98888-8888',
      email: 'joao.mendes@email.com',
      foto: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
      valorConsulta: 'R$ 130,00',
      tipoAtendimento: 'Presencial',
      localAtendimento: 'Instituto de Neuroeducação - Copacabana',
      horarioFuncionamento: 'Seg-Sex: 09:00-17:00',
      formacao: 'Graduação em Psicologia - UFRJ, Mestrado em Neuroeducação',
      abordagens: ['Neurociência Educacional', 'Desenvolvimento Cognitivo', 'Treinamento de Habilidades']
    },
    
    // Professor de Educação Especial
    {
      id: 3,
      nome: 'Profa. Clara Ferreira',
      especialidade: 'Professor de Educação Especial',
      credencial: 'CNE 789012/SP',
      experiencia: '8 anos de experiência em educação inclusiva para síndrome de Down.',
      descricao: 'Especialista em criar planos de ensino individualizados para alunos com síndrome de Down, promovendo inclusão e desenvolvimento acadêmico em ambientes escolares.',
      localizacao: 'São Paulo, SP',
      avaliacao: 4.8,
      telefone: '(11) 97777-7777',
      email: 'clara.ferreira@email.com',
      foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      valorConsulta: 'R$ 140,00',
      tipoAtendimento: 'Presencial e Online',
      localAtendimento: 'Escola Inclusiva - Moema',
      horarioFuncionamento: 'Seg-Sex: 08:00-17:00 | Sáb: 08:00-13:00',
      formacao: 'Graduação em Pedagogia - PUC-SP, Especialização em Educação Especial',
      abordagens: ['Educação Inclusiva', 'Planejamento Educacional Individualizado', 'Adaptação Curricular']
    },
    {
      id: 4,
      nome: 'Prof. Pedro Almeida',
      especialidade: 'Professor de Educação Especial',
      credencial: 'CNE 456789/MG',
      experiencia: '7 anos de experiência em inclusão escolar.',
      descricao: 'Trabalho com adaptações curriculares e estratégias inclusivas para apoiar o aprendizado e a socialização de alunos com síndrome de Down.',
      localizacao: 'Minas Gerais, MG',
      avaliacao: 4.7,
      telefone: '(31) 96666-6666',
      email: 'pedro.almeida@email.com',
      foto: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face',
      valorConsulta: 'R$ 120,00',
      tipoAtendimento: 'Presencial',
      localAtendimento: 'Centro de Educação Inclusiva - Savassi',
      horarioFuncionamento: 'Seg-Sex: 13:00-19:00',
      formacao: 'Graduação em Pedagogia - UFMG, Especialização em Educação Inclusiva',
      abordagens: ['Inclusão Escolar', 'Ensino Colaborativo', 'Desenvolvimento Socioemocional']
    },

    // Educador Multidisciplinar
    {
      id: 5,
      nome: 'Profa. Laura Santos',
      especialidade: 'Educador Multidisciplinar',
      credencial: 'CNE 234567/SP',
      experiencia: '15 anos de experiência em educação holística para síndrome de Down.',
      descricao: 'Integro pedagogia, psicologia e estratégias socioemocionais para apoiar o desenvolvimento integral de alunos com síndrome de Down em ambientes inclusivos.',
      localizacao: 'São Paulo, SP',
      avaliacao: 4.9,
      telefone: '(11) 95555-5555',
      email: 'laura.santos@email.com',
      foto: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
      valorConsulta: 'R$ 200,00',
      tipoAtendimento: 'Presencial e Online',
      localAtendimento: 'Instituto de Educação Holística - Bela Vista',
      horarioFuncionamento: 'Seg-Sex: 07:00-16:00',
      formacao: 'Graduação em Pedagogia - USP, Mestrado em Educação Multidisciplinar',
      abordagens: ['Educação Holística', 'Desenvolvimento Socioemocional', 'Integração Multidisciplinar']
    },
    {
      id: 6,
      nome: 'Profa. Sofia Ribeiro',
      especialidade: 'Educador Multidisciplinar',
      credencial: 'CNE 345678/RJ',
      experiencia: '10 anos de experiência em consultoria educacional inclusiva.',
      descricao: 'Especialista em abordagens multidisciplinares, combinando estratégias pedagógicas e socioemocionais para promover a inclusão de alunos com síndrome de Down.',
      localizacao: 'Rio de Janeiro, RJ',
      avaliacao: 5.0,
      telefone: '(21) 94444-4444',
      email: 'sofia.ribeiro@email.com',
      foto: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      valorConsulta: 'R$ 180,00',
      tipoAtendimento: 'Presencial',
      localAtendimento: 'Centro de Educação Multidisciplinar - Ipanema',
      horarioFuncionamento: 'Seg-Sex: 08:00-17:00',
      formacao: 'Graduação em Pedagogia - UFRJ, Especialização em Educação Multidisciplinar',
      abordagens: ['Consultoria Educacional', 'Inclusão Multidisciplinar', 'Treinamento de Professores']
    }
  ];

  // Filtrar profissionais baseado nos filtros selecionados
  const profissionaisFiltrados = useMemo(() => {
    return profissionais.filter(profissional => {
      const matchEspecialidade = !especialidadeSelecionada || profissional.especialidade === especialidadeSelecionada;
      const matchLocalizacao = !localizacaoSelecionada || profissional.localizacao === localizacaoSelecionada;
      return matchEspecialidade && matchLocalizacao;
    });
  }, [especialidadeSelecionada, localizacaoSelecionada]);

  // Calcular paginação
  const totalPaginas = Math.ceil(profissionaisFiltrados.length / profissionaisPorPagina);
  const indexInicio = (paginaAtual - 1) * profissionaisPorPagina;
  const profissionaisPagina = profissionaisFiltrados.slice(indexInicio, indexInicio + profissionaisPorPagina);

  // Reset página quando filtros mudam
  const handleFiltroChange = (tipo, valor) => {
    if (tipo === 'especialidade') {
      setEspecialidadeSelecionada(valor);
    } else {
      setLocalizacaoSelecionada(valor);
    }
    setPaginaAtual(1);
  };

  const renderEstrelas = (avaliacao) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(avaliacao) ? Styles['verde-star-filled'] : Styles['verde-star-empty']}
      />
    ));
  };

  const abrirModal = (profissional) => {
    setProfissionalSelecionado(profissional);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setProfissionalSelecionado(null);
  };

  return (
    <div className={Styles['verde-container-principal']}>
      <div className={Styles['verde-container-conteudo']}>
        {/* Header */}
        <div className={Styles['verde-header']}>
          <h1 className={Styles['verde-titulo-principal']}>
            Especialistas em Educação para <br/> Síndrome de Down
          </h1>
          <p className={Styles['verde-subtitulo']}>
            Encontre profissionais especializados em educação e inclusão para pessoas com síndrome de Down. Nossa equipe está pronta para apoiar o desenvolvimento e a inclusão educacional.
          </p>
        </div>

        {/* Filtros */}
        <div className={Styles['verde-filtros-container']}>
          <div className={Styles['verde-filtros-grid']}>
            <div className={Styles['verde-filtro-grupo']}>
              <label className={Styles['verde-filtro-label']}>
                <Search className={`${Styles['verde-filtro-icon']} ${Styles['verde-filtro-icon-blue']}`} />
                Especialidade
              </label>
              <select
                value={especialidadeSelecionada}
                onChange={(e) => handleFiltroChange('especialidade', e.target.value)}
                className={Styles['verde-filtro-select']}
              >
                <option value="">Todas as especialidades</option>
                {especialidades.map(esp => (
                  <option key={esp} value={esp}>{esp}</option>
                ))}
              </select>
            </div>
            
            <div className={Styles['verde-filtro-grupo']}>
              <label className={Styles['verde-filtro-label']}>
                <MapPin className={`${Styles['verde-filtro-icon']} ${Styles['verde-filtro-icon-purple']}`} />
                Localização
              </label>
              <select
                value={localizacaoSelecionada}
                onChange={(e) => handleFiltroChange('localização', e.target.value)}
                className={Styles['verde-filtro-select']}
              >
                <option value="">Todas as localizações</option>
                {estados.map(estado => (
                  <option key={estado} value={estado}>{estado}</option>
                ))}
              </select>
            </div>
            
            <button className={Styles['verde-btn-buscar']}>
              <Search size={18} />
              Buscar
            </button>
          </div>
        </div>

        {/* Resultados */}
        <div className={Styles['verde-resultados-info']}>
          <p className={Styles['verde-resultados-texto']}>
            <span className={Styles['verde-resultado-numero']}>{profissionaisFiltrados.length}</span> profissionais encontrados
            {especialidadeSelecionada && <span> em <span className={Styles['verde-filtro-ativo']}>{especialidadeSelecionada}</span></span>}
            {localizacaoSelecionada && <span> em <span className={Styles['verde-filtro-ativo']}>{localizacaoSelecionada}</span></span>}
          </p>
        </div>

        {/* Cards dos Profissionais */}
        <div className={Styles['verde-cards-grid']}>
          {profissionaisPagina.map(profissional => (
            <div key={profissional.id} className={Styles['verde-card-profissional']}>
              <div className={Styles['verde-card-conteudo']}>
                <div className={Styles['verde-profissional-header']}>
                  <img
                    src={profissional.foto}
                    alt={profissional.nome}
                    className={Styles['verde-profissional-foto']}
                  />
                  <div className={Styles['verde-profissional-info']}>
                    <h3 className={Styles['verde-profissional-nome']}>{profissional.nome}</h3>
                    <p className={Styles['verde-profissional-especialidade']}>{profissional.especialidade}</p>
                    <p className={Styles['verde-profissional-crp']}>{profissional.credencial}</p>
                    <div className={Styles['verde-avaliacao-container']}>
                      {renderEstrelas(profissional.avaliacao)}
                      <span className={Styles['verde-avaliacao-numero']}>{profissional.avaliacao}</span>
                    </div>
                    <div className={Styles['verde-localizacao-container']}>
                      <MapPin size={14} className={Styles['verde-localizacao-icon']} />
                      {profissional.localizacao}
                    </div>
                  </div>
                </div>
                
                <p className={Styles['verde-profissional-descricao']}>
                  {profissional.descricao}
                </p>
                
                <div className={Styles['verde-card-acoes']}>
                  <button 
                    onClick={() => abrirModal(profissional)}
                    className={Styles['verde-btn-ver-info']}
                  >
                    Ver Informações Completas
                  </button>
                  
                  <div className={Styles['verde-contato-info']}>
                    <div className={Styles['verde-contato-item']}>
                      <Phone size={14} className={`${Styles['verde-contato-icon']} ${Styles['verde-contato-icon-green']}`} />
                      <span className={Styles['verde-contato-texto']}>{profissional.telefone}</span>
                    </div>
                    <div className={Styles['verde-contato-item']}>
                      <Mail size={14} className={`${Styles['verde-contato-icon']} ${Styles['verde-contato-icon-orange']}`} />
                      <span className={Styles['verde-contato-texto']}>{profissional.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paginação */}
        {totalPaginas > 1 && (
          <div className={Styles['verde-paginacao']}>
            <button
              onClick={() => setPaginaAtual(prev => Math.max(1, prev - 1))}
              disabled={paginaAtual === 1}
              className={Styles['verde-btn-paginacao']}
            >
              Anterior
            </button>
            
            {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(numero => (
              <button
                key={numero}
                onClick={() => setPaginaAtual(numero)}
                className={`${Styles['verde-btn-paginacao']} ${numero === paginaAtual ? Styles['verde-btn-paginacao-ativo'] : ''}`}
              >
                {numero}
              </button>
            ))}
            
            <button
              onClick={() => setPaginaAtual(prev => Math.min(totalPaginas, prev + 1))}
              disabled={paginaAtual === totalPaginas}
              className={Styles['verde-btn-paginacao']}
            >
              Próxima
            </button>
          </div>
        )}

        {/* Caso não encontre resultados */}
        {profissionaisFiltrados.length === 0 && (
          <div className={Styles['verde-sem-resultados']}>
            <div className={Styles['verde-sem-resultados-icon']}>
              <Search size={48} />
            </div>
            <h3 className={Styles['verde-sem-resultados-titulo']}>Nenhum profissional encontrado</h3>
            <p className={Styles['verde-sem-resultados-texto']}>Tente ajustar os filtros de busca para encontrar mais resultados.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalAberto && profissionalSelecionado && (
        <div className={Styles['verde-modal-overlay']}>
          <div className={Styles['verde-modal-container']}>
            <div className={Styles['verde-modal-header']}>
              <h2 className={Styles['verde-modal-titulo']}>Informações do Profissional</h2>
              <button 
                onClick={fecharModal}
                className={Styles['verde-btn-fechar-modal']}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className={Styles['verde-modal-conteudo']}>
              {/* Header do profissional */}
              <div className={Styles['verde-modal-profissional-header']}>
                <img
                  src={profissionalSelecionado.foto}
                  alt={profissionalSelecionado.nome}
                  className={Styles['verde-modal-profissional-foto']}
                />
                <div className={Styles['verde-modal-profissional-info']}>
                  <h3 className={Styles['verde-modal-profissional-nome']}>{profissionalSelecionado.nome}</h3>
                  <p className={Styles['verde-modal-profissional-especialidade']}>{profissionalSelecionado.especialidade}</p>
                  <p className={Styles['verde-modal-profissional-crp']}>{profissionalSelecionado.credencial}</p>
                  <div className={Styles['verde-modal-avaliacao']}>
                    {renderEstrelas(profissionalSelecionado.avaliacao)}
                    <span className={Styles['verde-modal-avaliacao-numero']}>{profissionalSelecionado.avaliacao}</span>
                  </div>
                  <div className={Styles['verde-modal-localizacao']}>
                    <MapPin size={16} className={Styles['verde-modal-localizacao-icon']} />
                    {profissionalSelecionado.localizacao}
                  </div>
                </div>
              </div>

              {/* Informações principais */}
              <div className={Styles['verde-info-cards-grid']}>
                <div className={`${Styles['verde-info-card']} ${Styles['verde-info-card-green']}`}>
                  <div className={Styles['verde-info-card-header']}>
                    <div className={`${Styles['verde-info-card-icon']} ${Styles['verde-info-card-icon-green']}`}>
                      <DollarSign size={20} />
                    </div>
                    <h4 className={Styles['verde-info-card-titulo']}>Valor da Consulta</h4>
                  </div>
                  <p className={`${Styles['verde-info-card-valor']} ${Styles['verde-info-card-valor-green']}`}>{profissionalSelecionado.valorConsulta}</p>
                </div>

                <div className={`${Styles['verde-info-card']} ${Styles['verde-info-card-blue']}`}>
                  <div className={Styles['verde-info-card-header']}>
                    <div className={`${Styles['verde-info-card-icon']} ${Styles['verde-info-card-icon-blue']}`}>
                      <User size={20} />
                    </div>
                    <h4 className={Styles['verde-info-card-titulo']}>Tipo de Atendimento</h4>
                  </div>
                  <p className={`${Styles['verde-info-card-valor']} ${Styles['verde-info-card-valor-blue']}`}>{profissionalSelecionado.tipoAtendimento}</p>
                </div>

                <div className={`${Styles['verde-info-card']} ${Styles['verde-info-card-purple']}`}>
                  <div className={Styles['verde-info-card-header']}>
                    <div className={`${Styles['verde-info-card-icon']} ${Styles['verde-info-card-icon-purple']}`}>
                      <Home size={20} />
                    </div>
                    <h4 className={Styles['verde-info-card-titulo']}>Local de Atendimento</h4>
                  </div>
                  <p className={Styles['verde-info-card-texto']}>{profissionalSelecionado.localAtendimento}</p>
                </div>

                <div className={`${Styles['verde-info-card']} ${Styles['verde-info-card-orange']}`}>
                  <div className={Styles['verde-info-card-header']}>
                    <div className={`${Styles['verde-info-card-icon']} ${Styles['verde-info-card-icon-orange']}`}>
                      <Clock size={20} />
                    </div>
                    <h4 className={Styles['verde-info-card-titulo']}>Horário de Funcionamento</h4>
                  </div>
                  <p className={Styles['verde-info-card-texto']}>{profissionalSelecionado.horarioFuncionamento}</p>
                </div>
              </div>

              {/* Descrição e experiência */}
              <div className={Styles['verde-descricao-container']}>
                <h4 className={Styles['verde-secao-titulo']}>Sobre o Profissional</h4>
                <p className={Styles['verde-descricao-texto']}>{profissionalSelecionado.descricao}</p>
                <p className={Styles['verde-experiencia-texto']}>{profissionalSelecionado.experiencia}</p>
              </div>

              {/* Formação */}
              <div className={Styles['verde-formacao-container']}>
                <div className={Styles['verde-formacao-header']}>
                  <div className={Styles['verde-formacao-icon']}>
                    <Award size={20} />
                  </div>
                  <h4 className={Styles['verde-secao-titulo']}>Formação</h4>
                </div>
                <p className={Styles['verde-formacao-texto']}>{profissionalSelecionado.formacao}</p>
              </div>

              {/* Abordagens */}
              <div className={Styles['verde-abordagens-container']}>
                <h4 className={Styles['verde-secao-titulo']}>Abordagens e Especialidades</h4>
                <div className={Styles['verde-abordagens-tags']}>
                  {profissionalSelecionado.abordagens.map((abordagem, index) => (
                    <span 
                      key={index}
                      className={Styles['verde-abordagem-tag']}
                    >
                      {abordagem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contato */}
              <div className={Styles['verde-contato-container']}>
                <h4 className={Styles['verde-secao-titulo']}>Informações de Contato</h4>
                <div className={Styles['verde-contato-grid']}>
                  <div className={Styles['verde-contato-item-modal']}>
                    <div className={`${Styles['verde-contato-icon-container']} ${Styles['verde-contato-icon-container-green']}`}>
                      <Phone size={20} />
                    </div>
                    <div className={Styles['verde-contato-info-modal']}>
                      <p className={Styles['verde-contato-label']}>Telefone</p>
                      <p className={Styles['verde-contato-valor']}>{profissionalSelecionado.telefone}</p>
                    </div>
                  </div>
                  <div className={Styles['verde-contato-item-modal']}>
                    <div className={`${Styles['verde-contato-icon-container']} ${Styles['verde-contato-icon-container-orange']}`}>
                      <Mail size={20} />
                    </div>
                    <div className={Styles['verde-contato-info-modal']}>
                      <p className={Styles['verde-contato-label']}>E-mail</p>
                      <p className={Styles['verde-contato-valor']}>{profissionalSelecionado.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botões de ação */}
              <div className={Styles['verde-modal-acoes']}>
                <button className={Styles['verde-btn-contato']}>
                  <Phone size={18} />
                  Entrar em Contato
                </button>
                <button className={Styles['verde-btn-agendar']}>
                  <Mail size={18} />
                  Agendar Consulta
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListaEducacional