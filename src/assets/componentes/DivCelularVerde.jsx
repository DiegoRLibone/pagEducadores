import Styles from '../css/DivCelularVerde.module.css'
import iconPacientes2 from '../images/iconpacientes.png'
import iconEspecialistas2 from '../images/iconespecialistas.png'

function DivCelularVerde(){
    return(
        <main className={Styles.verdeCaixacelular}>
          <div className={Styles.verdeDivcelular}>
              <img src={iconPacientes2} alt="Ícone de pacientes" className={Styles.verdeCelularIconeEstatistica} />
              <p>+80% das crianças mostram <br/> progresso em habilidades sociais.</p>
          </div>

          <div className={Styles.verdeDivcelular}>
              <img src={iconEspecialistas2} alt="Ícone de especialistas" className={Styles.verdeCelularIconeEstatistica} />
              <p>Mais de 1.500 famílias <br/>  atendidas em todo o Brasil.</p>
          </div>

        </main>                   
    )
}

export default DivCelularVerde
