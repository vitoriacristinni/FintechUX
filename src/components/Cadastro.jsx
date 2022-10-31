import styles from '../styles/Cadastro.module.css'
import logo from '../imagens/esse-logo.png'

function Cadastro(){
    return(

    <div className={styles.logincadastro}>
        <div className={styles.campologin}>
            <div className={styles.imagelogo}>
            <img src={logo} alt='Logotipo' />
            <span className={styles.loginspan}>Faça login e comece a usar</span>
            </div>
            <div className={styles.login}>
        <p className={styles.email}>Digite seu CPF</p>
        <input type='number' placeholder='000.000.000-00' className={styles.emailin} />
        <br /> <br />
        <p className={styles.senha}>Crie uma senha</p>
        <input type='password' placeholder='sua senha' className={styles.senhain} />
        <br/> <br/>
        <p className={styles.lembreme}>Lembre-me por 30 dias</p> <input type="checkbox" name="opção" value="selectA" checked className={styles.checkin} />
       <br /> <br />
      <button className={styles.botaoin}>Entrar na plataforma</button>
            </div>
        </div>
    </div>

    );
}

export default Cadastro