import warrantyIcon from '../images/warrantyIcon.png';
import acessIcon from '../images/acessIcon.png';
import paymentIcon from '../images/paymentIcon.png'

const Promisses = () => {
  return (
    <section className='promissesSession'>
      <div className='iconsThirdMain'>
        <div>
          <img src={ warrantyIcon } alt="Warranty Icon" />
          <h1>
            7 DIAS DE<br />
            GARANTIA
          </h1>
          <p>
            Se você achar que nossa <br />
            comunidade não te ajudou, <br />
            dentro de 7 dias poderá solicitar <br />
            seu investimento de volta.
          </p>
        </div>
        <div>
          <img src={ acessIcon } alt="Acess Icon" />
          <h1>ACESSO IMEDIATO</h1>
          <p>
            Após a compra você receberá <br />
            um e-mail com o link com todas <br />
            as informações necessárias para <br />
            acessar nossos grupos e a <br />
            plataforma de aulas.
          </p>
        </div>
        <div>
          <img src={ paymentIcon } alt="Payment Icon" />
          <h1>
            PAGAMENTO <br />
            SEGURO
          </h1>
          <p>
            Fique tranquilo! Todos os seus <br />
            dados de pagamento estarão <br />
            seguros, pois usamos uma das <br />
            maiores plataformas do Brasil <br />
            para processar o pagamento
          </p>
        </div>
      </div>
    </section>
  )
}

export default Promisses;
