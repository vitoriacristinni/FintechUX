import styles from '../styles/Contato.module.css'

function Contato(){
    return(
<div className={styles.casacontato}>
<h2 className={styles.titulocont}>Entre em Contato</h2>
<input className={styles.preencher} type='text' placeholder='Digite aqui sua dúvida ou depoimento e um e-mail será encaminhado' />
<br></br>
<input className={styles.preencherdois} type='email' placeholder='Digite seu e-mail' />
<br />
<button className={styles.btnctt}>Enviar</button>
</div>
    );
}

export default Contato