import checkIcon from '../images/checkIcon.png';

const Card = () => {
  const handleClick = () => {
    window.location.assign("https://pay.kiwify.com.br/LY3fxNy")
  }

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
        <h1 className='titleCardPrice'>Por <b>10x R$ 5,50</b></h1>
        <p className='minLetter'>Menos que uma <b>pizza.</b></p>
        <p className='minLetter'>A diferença é que nós engordamos apenas o seu bolso.</p>
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
