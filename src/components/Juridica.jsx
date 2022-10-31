import styles from '../styles/Juridica.module.css'
import micro from '../imagens/microempreendedor.jpg'
import icone1 from '../imagens/iconpix.png'
import icone2 from '../imagens/foto2.png'
import icone3 from '../imagens/foto3.png'

function Juridica(){
    return(
<div className={styles.paijur}>
    <div className={styles.campoimage}>
        <div className={styles.pjuridica}>
            <span className={styles.tittlejur}>Pessoa Jurídica</span>
            <p className={styles.textjur}>Tudo para o seu negócio</p>
            <h2 className={styles.sonhotext}>Controle o seu negócio e nós te acompanhamos na realização do seu sonho</h2>
        </div>
     <img src={micro} alt='microempreendedor' />
    </div>
    <span className={styles.tituemp}>Para sua empresa</span>

    <div className={styles.cards}>

        <div className={styles.card}>
            <span className={styles.iconejur}>
                <img src={icone1} alt= 'Dinheiro digital' />
            </span>
            <p>TEDs e Pix grátis e ilimitado</p>
        </div>

        <div className={styles.card}>
            <span className={styles.iconejur}>
            <img src={icone2} alt= 'Pagamento digital' />
            </span>
            <p>Receba suas vendas de outras máquininhas</p>
        </div>

        <div className={styles.card}>
            <span className={styles.iconejur}>
            <img src={icone3} alt= 'Cartão de crédito' />
            </span>
            <p>Cartão de crédito grátis e sem anuidade</p>
        </div>

 </div>
</div>
    );
}

export default Juridica