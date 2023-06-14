import profileImage from '../images/profileImage.png'

const Biography = () => {
  const handleClick = () => {
    window.location.assign("https://pay.kiwify.com.br/LY3fxNy")
  }

  return (
    <section className="biography">
      <div className='containerProfile'>
        <p className='titleProfile'>
          <span style={ {color: '#ff6c00'} }>Quem sou</span> eu para te ensinar algo?
        </p>
        <p className='contentProfile'>
          Meu nome é Vinicius Guerra, sou empresário e Mentor do método Agenciador 10x. <br />
          <br />
          Nos últimos 3 anos eu fiz mais de R$ 3 MILHÕES apenas em vendas de Pacotes Aéreos. <br />
          <br />
          E hoje, além de aumentar cada dia mais o faturamento da minha Agência de Viagem, eu ajudo
          pessoas como Você a fazer o que eu faço! <br />
          <br />
          Já são dezenas de mentorados que usam a minha Metodologia para venderem pacotes aéreos
          aumentando assim as suas vendas, e agora o próximo a ter acesso a isso será você. <br />
          <br />
        </p>
        <button
          className='btnProfile'
          onClick={ handleClick }
        >
          QUERO ENTRAR PARA O <br />
          AGENCIADOR 10X COM DESCONTO
        </button>
      </div>
      <img
        src={ profileImage }
        alt="Vinícius Guerra"
        className='profileImage'
      />
    </section>
  )
}

export default Biography;
