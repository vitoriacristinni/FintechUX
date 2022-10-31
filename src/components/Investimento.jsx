import styles from '../styles/Investimento.module.css'
import image1 from '../imagens/microo.png'
import image2 from '../imagens/investimento.png'
import image3 from '../imagens/ligaçao.png'

function Investimento(){
    return(
        <div className={styles.casa}>
            <h3 className={styles.dicas}>Dicas de investimento e organização de finanças</h3>
       <div className={styles.notice}>
        <div className={styles.campoum}>
        <p className={styles.tnegum}><a href='https://www.bancopan.com.br/blog/publicacoes/negativado-pode-pedir-emprestimo-com-garantia-do-fgts.htm' target = '_blank'>Empréstimo com garantia do FGTS pode ser pedido por quem está negativado</a></p>
        <img src = {image1} alt='Microempreendedor' />
        </div>
        <div className={styles.campodois}>
        <p className={styles.tnegdois}><a href='https://blog.c6bank.com.br/diversificacao-de-investimentos-por-que-e-tao-importante' target='_blank'>Diversificação de investimentos: por que é tão importante?</a></p>
        <img src={image2} alt='Duas pessoas mexendo no computador' />
        </div>
        <div className={styles.campotres}>
        <p className={styles.tnegtres}><a href='https://www.youtube.com/watch?v=joAv0n1bFfE&t=33s' target='_blank'>Golpe da falsa central de atendimento: como identificar e se prevenir</a></p>
        <img src={image3} alt='Mulher ao telefone' />
        </div>
        </div>
</div>
      
    );
}

export default Investimento