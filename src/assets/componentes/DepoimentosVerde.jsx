import React from 'react';
import Styles from '../css/DepoimentosVerde.module.css';
import fotouserEmili from '../images/fotouser-emili.png';
import fotouserHelena from '../images/fotouser-helena.png';
import fotouserRoberta from '../images/fotouser-roberta.png';

function DepoimentosVerde() {
  return (
    <section className={Styles.verdeDepoimentosSection}>
      <div className={Styles.verdeContainer}>
        <div className={Styles.verdeHeader}>
          <div className={Styles.verdeTituloContainer}>
            <h2 className={Styles.verdeTitulo}>DEPOIMENTOS</h2>
            <h3 className={Styles.verdeSubtitulo}>O que os clientes dizem sobre os profissionais Acenis?</h3>
          </div>
          
          <div className={Styles.verdeCardGrande}>
            <p className={Styles.verdeDepoimentoTexto}>
              "Depois que começamos o acompanhamento com a psicopedagoga da plataforma, meu filho avançou muito na escola."
            </p>
            <div className={Styles.verdeAutorContainer}>
              <div className={Styles.verdeUserIcon}>
                <img src={fotouserHelena} alt="Helena Silva" className={Styles.verdeUserImage} />
              </div>
              <p className={Styles.verdeDepoimentoAutor}>Helena Silva</p>
            </div>
          </div>
        </div>

        <div className={Styles.verdeCardsPequenos}>
          <div className={Styles.verdeCardPequeno}>
            <p className={Styles.verdeDepoimentoTexto}>
              "Me senti acolhida desde o primeiro atendimento. Eles nos ajudam a enxergar possibilidades onde só víamos dificuldades."
            </p>
            <div className={Styles.verdeAutorContainer}>
              <div className={Styles.verdeUserIcon}>
                <img src={fotouserEmili} alt="Emili Souza" className={Styles.verdeUserImage} />
              </div>
              <p className={Styles.verdeDepoimentoAutor}>Emili Souza</p>
            </div>
          </div>

          <div className={Styles.verdeCardPequeno}>
            <p className={Styles.verdeDepoimentoTexto}>
              "Cada consulta é um passo a mais no desenvolvimento do meu filho. Finalmente encontrei profissionais que olham além do diagnóstico."
            </p>
            <div className={Styles.verdeAutorContainer}>
              <div className={Styles.verdeUserIcon}>
                <img src={fotouserRoberta} alt="Roberta Souza" className={Styles.verdeUserImage} />
              </div>
              <p className={Styles.verdeDepoimentoAutor}>Roberta Souza</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DepoimentosVerde
