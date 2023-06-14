import checkIcon from '../images/checkIcon.png';

const SubHeader = () => {
  return (
    <div className='containerAvails'>
          <div className='contentAvails'>
            <p className='avail'><img src={checkIcon} alt="check" /> DO ZERO AO AVANÇADO</p>
            <p className='avail'><img src={checkIcon} alt="check" /> ESTRATÉGIAS COPIAR E COLAR</p>
            <p className='avail'><img src={checkIcon} alt="check" /> 3 BÔNUS EXCLUSIVOS</p>
          </div>
          <div className='contentAvails'>
            <p className='avail'><img src={checkIcon} alt="check" /> GRUPO DE NETWORKING</p>
            <p className='avail'><img src={checkIcon} alt="check" /> SUPORTE 24/7</p>
            <p className='avail'><img src={checkIcon} alt="check" /> ACOMPANHAMENTO PELO WHATSAPP</p>
          </div>
        </div>
  )
}

export default SubHeader;
