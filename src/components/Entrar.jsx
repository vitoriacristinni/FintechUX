import styles from '../styles/Entrar.module.css'
import logo from '../imagens/esse-logo.png'

function Entrar(){
    return(

    <div className={styles.logincasa}>
        <div className={styles.campologin}>
            <div className={styles.imagelogo}>
            <img src={logo} alt='Logotipo' />
            <span className={styles.loginspan}>Faça login e comece a usar</span>
            </div>
            <div className={styles.login}>
        <p className={styles.email}>Digite seu e-mail</p>
        <input type='email' placeholder='seunome@email.com' className={styles.emailin} />
        <br /> <br />
        <p className={styles.senha}>Digite sua senha</p>
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

export default Entrar