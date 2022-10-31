import styles from '../styles/Home.module.css'
import image from '../imagens/banner2.png'
import fundo from '../imagens/Group.png'
import Juridica from './Juridica';
import Fisica from './Fisica';
import Investimento from './Investimento';
import Contato from './Contato';


function Home(){
    return(
        <>
<div className={styles.mestre}>
<div className={styles.fundodtl}>
  <img src={fundo} alt='Fundo' />
</div>
<h1>O BANCO QUE EVOLUI COM VOCÊ</h1>
<div className={styles.taxa}>
<span>UXBANK</span>
<p>Conheça o melhor banco sem taxas</p>
<h2 className={styles.texcontrol}>Controle o que quiser sem abrir mão da segurança! <br /> Menos buracracia e mais inovação</h2>
</div>
{/*<div>
   <form>
        <h3>Abra uma conta e faça seu cartão de crédito</h3>
       <input type='number' placeholder='Digite seu CPF'className={styles.cpf} />
      <input type='button' value='Continuar' className={styles.enviar} />
    </form>
    </div>*/}
<div className={styles.banner}>
<img src={image} alt='banner' />
</div>
</div>

<Juridica />
<Fisica />
<Investimento />
<Contato />
</>
    );
}

export default Home