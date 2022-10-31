import styles from '../styles/Redes.module.css'
import logos from '../imagens/esse-logo.png'

function Redes(){
    return(
     <div className={styles.casape}>
        <div className={styles.casadcasa}>
    <img className={styles.logope} src={logos} alt='Logotipo' />
     <span className={styles.strede}>O banco que evolui com você</span>
     <div className={styles.redes}>
        <div className={styles.redlink}><a href='https://github.com/vitoriacristinni' target='_blank'><i class="fa-brands fa-github"></i></a></div>
        <div className={styles.linkreddois}><a href='https://www.linkedin.com/in/vitoriacristinni/' target='_blank'><i class="fa-brands fa-linkedin-in"></i></a></div>
        <span className={styles.spanred}>©2022 UXBank. Todos direitos reservados.</span>
     </div>
     </div>
     </div>
    );
}

export default Redes