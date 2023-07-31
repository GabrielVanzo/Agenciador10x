import handleClick from "../utils/function";

const Header = () => {  
  return (
    <section className='header'>
      <p className='discountApplied'>✅ Cupom de desconto aplicado com sucesso</p>
      <h1 className='title'>
        VOCÊ JÁ PENSOU EM VIAJAR E <span style={ {color: '#ff6c00'} }>LUCRAR COM VIAGENS?</span> <br />
      </h1>
      <h2 className='subtitle'>
        COM UMA PROFISSÃO <u>AINDA POUCA EXPLORADA</u> NO PAÍS! <br />
      </h2>
      <p className='subtitle2'>
        Com baixo investimento e risco zero, saindo na frente de 99% dos brasileiros <br />
        e consquistando a sua tão sonhada liberdade!
      </p>
      <p className='realPrice'>R$ 997 à vista</p>
      <p>ou</p>
      <p className='offerPrice  '>🔥 Por apenas 12x <b>R$ 99,70</b></p>
      <button
        className='btnHeader'
        onClick={ handleClick }
      >
        CLIQUE PARA GARANTIR SUA VAGA COM VALOR EXCLUSIVO
      </button>
    </section>
  )
};

export default Header;
