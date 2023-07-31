import checkIcon from '../images/checkIcon.png';
import handleClick from "../utils/function";

const Card = () => {
  return (
    <section className='cardSession'>
      <p className='especialOffer'>🔥 Oferta <b><u>especial</u></b></p>
      <div className='cardPrice'>
        <h1 className='titleCardPrice'>AGENCIADOR 10X</h1>
        <p className='availsCardsPrice'>
          <img src={checkIcon} alt="check" /> Curso completo
          <hr />
          <img src={checkIcon} alt="check" /> Abordagem do Zero para <b>Iniciantes</b>
          <hr />
          <img src={checkIcon} alt="check" /> Suporte 24/7
          <hr />
          <img src={checkIcon} alt="check" /> Bônus 1: Melhores Hotéis e Destinos
          <hr />
          <img src={checkIcon} alt="check" /> Bônus 2: Guia Completo para sua Agência
          <hr />
          <img src={checkIcon} alt="check" /> Bônus 3: Mentoria e Resolução de Conflito
          <hr />
        </p>
        <h1 className='titleCardPrice'>Por <b>12x R$ 99,70</b></h1>
        <button
          className='btnCardPrice'
          onClick={ handleClick }  
        >
          QUERO ENTRAR PARA O AGENCIADOR 10X COM DESCONTO 2023
        </button>
      </div>
    </section>
  )
}

export default Card;
