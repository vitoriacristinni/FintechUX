import styles from '../styles/Nav.module.css'
import logo from '../imagens/agora-esse.png'
import {Link} from 'react-router-dom';

function Header(){
    return(
<div className={styles.pai}>
<div className={styles.logotipo}>
<img src={logo} alt='logotipo uxbank' />
</div>
<nav>
    <ul>
<Link to='/'><li>Início</li></Link>      
<Link to='/Fisica'><li>Pessoa Física</li></Link>        
<Link to='/Juridica'><li>Pessoa Jurídica</li></Link>
<Link to='/Investimento'><li>Investimentos</li></Link>
<Link to='/Contato'><li>Central de Atendimento</li></Link>
<Link to='/Entrar'>
    <input type ='button' value= 'Entrar' className={styles.entrar} />
</Link>
<Link to='Cadastro'>
<input type ='button' value= 'Abra sua conta' className={styles.abrir} />
</Link>
    </ul>
</nav>

</div>
    );
}

export default Header