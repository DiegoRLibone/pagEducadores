import Styles from '../css/HomeEducacao.module.css'
import iconPacientes from '../images/iconpacientes.png'
import iconEspecialistas from '../images/iconespecialistas.png'

function HomeEducacao() {
  return (
    <div className={Styles.verdeSaudeContainer}>
      <div className={Styles.verdeSaudeConteudo}>
        <header className={Styles.verdeSaudeCabecalho}>
          <h1>BOAS-VINDAS A EDUCAÇÃO ACENIS !</h1>
          <h2>Educação especializada para crianças<br />com síndrome de Down</h2>
          <p>Professores preparados para estimular o desenvolvimento integral dos alunos.</p>
          <button className={Styles.verdeSaudeBotao}>
            <a href="#servicosSaude"> Saiba mais </a>
          </button>
        </header>
      </div>

      {/* Estatística agora fora do verdeSaudeConteudo */}
      <div className={Styles.verdeEstatisticaContainer}>
        <div className={Styles.verdeSaudeCardUnico}>
          <div className={Styles.verdeSaudeItemEstatistica}>
            <div className={Styles.verdeSaudeItemContent}>
              <img 
                src={iconPacientes} 
                alt="Ícone de pacientes" 
                className={Styles.verdeSaudeIconeEstatistica} 
              />
              <p>+80% das crianças mostram progresso em habilidades sociais.</p>
            </div>
          </div>

          <div className={Styles.verdeSaudeDivisoria}></div>

          <div className={Styles.verdeSaudeItemEstatistica}>
            <div className={Styles.verdeSaudeItemContent}>
              <img 
                src={iconEspecialistas} 
                alt="Ícone de especialistas" 
                className={Styles.verdeSaudeIconeEstatistica} 
              />
              <p>Mais de 1.500 famílias atendidas em todo o Brasil.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeEducacao
