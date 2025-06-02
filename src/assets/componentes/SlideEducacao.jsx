import { useState, useEffect } from 'react';
import Styles from '../css/SlideEducacao.module.css';
import iconNeuroeducador from '../images/icon-neuroeducador.png';
import iconProfessorEducacaoEspecial from '../images/icon-professor-educacao-especial.png';
import iconEducadorMultidisciplinar from '../images/icon-educador-multidisciplinar.png';
import iconPedagogoInclusao from '../images/icon-pedagogo-inclusao.png';
import iconCoordenadorInclusao from '../images/icon-coordenador-inclusao.png';
import iconPsicopedagogo from '../images/icon-psicopedagogo.png';
import iconEducadorApoio from '../images/icon-educador-apoio.png';

function SlideEducacao() {
  const profissionais = [
    {
      id: 1,
      icon: iconNeuroeducador,
      title: 'Neuroeducador',
      description:
        'Aplica princípios de neurociência para otimizar o aprendizado de alunos com síndrome de Down, focando no desenvolvimento cognitivo.',
      link: '#',
    },
    {
      id: 2,
      icon: iconProfessorEducacaoEspecial,
      title: 'Professor de Educação Especial',
      description:
        'Desenvolve planos de ensino individualizados para promover a inclusão de alunos com síndrome de Down em ambientes escolares.',
      link: '#',
    },
    {
      id: 3,
      icon: iconEducadorMultidisciplinar,
      title: 'Educador Multidisciplinar',
      description:
        'Integra pedagogia e estratégias socioemocionais para apoiar o desenvolvimento integral de alunos com síndrome de Down.',
      link: '#',
    },
    {
      id: 4,
      icon: iconPedagogoInclusao,
      title: 'Pedagogo com Especialização em Inclusão',
      description:
        'Cria currículos adaptados para garantir a participação de alunos com síndrome de Down em salas de aula regulares.',
      link: '#',
    },
    {
      id: 5,
      icon: iconCoordenadorInclusao,
      title: 'Coordenador de Inclusão Escolar',
      description:
        'Gerencia programas de inclusão, treinando professores para apoiar alunos com síndrome de Down em ambientes escolares.',
      link: '#',
    },
    {
      id: 6,
      icon: iconPsicopedagogo,
      title: 'Psicopedagogo',
      description:
        'Intervém em dificuldades de aprendizagem, promovendo o desenvolvimento acadêmico de alunos com síndrome de Down.',
      link: '#',
    },
    {
      id: 7,
      icon: iconEducadorApoio,
      title: 'Educador de Apoio Escolar',
      description:
        'Oferece suporte individualizado em sala de aula, auxiliando alunos com síndrome de Down a acompanhar as atividades.',
      link: '#',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesPerView = window.innerWidth < 768 ? 1 : 3;
  const totalSlides = Math.ceil(profissionais.length / slidesPerView);

  const getCurrentSlideItems = () => {
    const start = currentSlide * slidesPerView;
    return profissionais.slice(start, start + slidesPerView);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const handleResize = () => {
      const newSlidesPerView = window.innerWidth < 768 ? 1 : 3;
      const newTotalSlides = Math.ceil(profissionais.length / newSlidesPerView);
      if (currentSlide >= newTotalSlides) {
        setCurrentSlide(0);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSlide, profissionais.length]);

  return (
    <section className={Styles['verde-educacao-container']}>
      <div className={Styles['verde-educacao-content']}>
        <h2 className={Styles['verde-educacao-title']}>Nossa Equipe de Educação Inclusiva</h2>

        <div className={Styles['verde-educacao-slider']}>
          <button
            className={Styles['verde-educacao-nav-button']}
            onClick={prevSlide}
            aria-label="Slide anterior"
          >
            ‹
          </button>

          <div className={Styles['verde-educacao-cards']}>
            {getCurrentSlideItems().map((profissional) => (
              <div key={profissional.id} className={Styles['verde-educacao-card']}>
                <div className={Styles['verde-educacao-icon-container']}>
                  <img
                    src={profissional.icon}
                    alt={`Ícone ${profissional.title}`}
                    className={Styles['verde-educacao-icon']}
                  />
                </div>
                <h3 className={Styles['verde-educacao-card-title']}>{profissional.title}</h3>
                <p className={Styles['verde-educacao-card-description']}>
                  {profissional.description}
                </p>
                <a href={profissional.link} className={Styles['verde-educacao-card-button']}>
                  VEJA A LISTA COMPLETA
                </a>
              </div>
            ))}
          </div>

          <button
            className={Styles['verde-educacao-nav-button']}
            onClick={nextSlide}
            aria-label="Próximo slide"
          >
            ›
          </button>
        </div>

        <div className={Styles['verde-educacao-dots']}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`${Styles['verde-educacao-dot']} ${
                index === currentSlide ? Styles['verde-educacao-dot-active'] : ''
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SlideEducacao