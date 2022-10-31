import styles from '../styles/Fisica.module.css'
import modelo from '../imagens/modelo.png'

function Fisica(){
    return(
<div className={styles.contorno}>
<div className={styles.pfisica}>
            <span className={styles.tittlefis}>Pessoa Fisíca</span>
            <p className={styles.textfis}>Você no controle da melhor experiência</p>
            <h2 className={styles.textocont}>A conta que vai levar você ao controle da sua vida financeira</h2>
        </div>
        <div className={styles.campotexto}>
        <p className={styles.textum}>
                <b>Conta e cartão gratuitos</b>
                <br />
                A conta é digital e sem tarifa de manutenção.
            </p>
            <p className={styles.textdois}>
            <b>Taxa zero para investir</b>
                <br />
                É simples, intuitivo e 100% digital
            </p>
        </div>
        <div className={styles.espacoimage}>
        <img src={modelo} alt='Modelo' />
        </div>
</div>
    );
}

export default Fisica