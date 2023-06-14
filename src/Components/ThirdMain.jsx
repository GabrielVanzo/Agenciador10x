import hotelIcon from '../images/hotelIcon.png';
import rocketIcon from '../images/rocketIcon.png';
import lawyerIcon from '../images/lawyerIcon.png';
import arrowDown from '../images/arrowDown.png';

const ThirdMain = () => {
  return (
    <section className="thirdMain">
      <p className='titleThirdMain'>
        Calma aí! Você ainda vai <br />
        receber <span style={ {color: '#ff6c00'} }>3 bônus exclusivos</span>
      </p>
      <div className='contentThirdMain'>
        <img className='iconsBonus' src={ hotelIcon } alt="Hotel Icon" width='10%' height='10%'/>
        <p>
          <h2 className='titleContentThirdMain'>
            #1 E-book Com os Melhores Destinos <br />
            e Melhores Hotéis
          </h2>
          <p>
            De <s><b style={ {color: '#ff6c00'} }>R$ 47</b></s> por 
            <b style={ {color: 'green'} }> R$ 0</b>
          </p>
          Esse E-book será o seu melhor amigo, nele terá <br />
          todas as informações necessárias para você <br />
          entender de todos os destinos mais vendidos.
        </p>
      </div>
      <div className='contentThirdMain'>
        <img className='iconsBonus' src={ rocketIcon } alt="Rocket Icon" width='10%' height='10%'/>
        <p>
          <h2 className='titleContentThirdMain'>
            #2 Um Guia Completo de como <br />
            Você Irá Sair <span style={ {color: '#ff6c00'} }>
              do Zero até consolidar sua <br />
              própria Agência de Viagens
            </span>
          </h2>
          <p>
            De <s><b style={ {color: '#ff6c00'} }>R$ 197</b></s> por 
            <b style={ {color: 'green'} }> R$ 0</b>
          </p>
          Só com esse Guia você já irá sair na frente de 90% <br />
          dos Agentes De Viagens que não fazem ideia <br />
          de como ser um Dono de Agência.
        </p>
      </div>
      <div className='contentThirdMain'>
        <img className='iconsBonus' src={ lawyerIcon } alt="Lawyer Icon" width='10%' height='10%'/>
        <p style={ {marginBottom: '60px'} }>
          <h2 className='titleContentThirdMain'>
            #3 Mentoria de Resolução de Conflitos
          </h2>
          <p>
            De <s><b style={ {color: '#ff6c00'} }>R$ 2.997 </b></s> por 
            <b style={ {color: 'green'} }> R$ 0</b>
          </p>
          Convidamos uma Advogada especializada em <br />
          resolução de conflitos na área do turismo, para <br />
          dar uma verdadeira aula de como você pode <br />
          solucionar os eventuais problemas como <br />
          Agente de Viagem.
        </p>
      </div>
      <p className='endSection'>Agora pensa: quanto vale pra ter acesso a <b>TUDO ISSO?</b></p>
      <img src={ arrowDown } alt="Arrow Down" className='arrowDown' />  
    </section>
  )
}

export default ThirdMain;
