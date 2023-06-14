import hearhIcon from '../images/hearthIcon.png';
import airplaneIcon from '../images/airplaneIcon.png';
import worldIcon from '../images/worldIcon.png';

const ForWho = () => {
  return (
    <section className='forwho'>
      <h1 className='titleSecondMain'>O Agenciador 10x é para quem:</h1>
      <div className='contentSecondMain'>
        <img className='icons' src={ hearhIcon } alt="Hearth Icon" width='10%' height='10%'/>
        <p>
          <h2>Para você que ama viajar</h2>
          Gosta de viajar e organizar viagens para família, <br />
          amigos e quer fazer disso uma profissão lucrativa.
        </p>
      </div>
      <div className='contentSecondMain'>
        <img className='icons' src={ airplaneIcon } alt="Airplane Icon" width='10%' height='10%'/>
        <p>
          <h2>Para você totalmente iniciante</h2>
          Você que não tem ideia de que existe uma <br />
          profissão como essa e quer aprender tudo para <br />
          transformar sua vida!
        </p>
      </div>
      <div className='contentSecondMain'>
        <img className='icons' src={ worldIcon } alt="World Icon" width='10%' height='10%'/>
        <p>
          <h2>
            Para você que já é um <br />
            Agente de Viagem
          </h2>
          Se você já trabalha como agente de viagem essa <br />
          é uma ótima oportunidade para você aumentar <br />
          seus resultados.
        </p>
      </div>
    </section>
  )
}

export default ForWho;
