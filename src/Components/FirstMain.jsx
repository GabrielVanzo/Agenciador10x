import notebookImage from '../images/notebookImage.png';
import tourImage from '../images/firstMainImage.png';
import handleClick from "../utils/function";

const FirstMain = () => {
  return (
    <section className="firstMain">
      <div className='containerFirstMain'>
        <img src={notebookImage} alt="Notebook" className='notebookImage' />
        <p className='contentFirstMain'>
          <h1 className="titleFirstMain">
            A Estratégia <span style={ {color: '#ff6c00'} }>mais completa</span> do <br />
            mercado
          </h1>
          No conteúdo do Agenciador 10x, você terá acesso a todo <br />
          passo a passo na prática para fazer renda extra, ou viver <br />
          dessa renda, todos os meses. <br />
          <br />
          Aulas direto ao ponto, mostrando tudo oque você precisa <br />
          para ingressar nesse mercado ainda pouquíssimo <br />
          conhecido no Brasil. <br />
          <br />
          Tudo isso sem correr riscos e sem depender de ninguém. <br />
          <br />
          É como dizem "Quem chega cedo bebe água limpa". <br />
          Aproveite agora antes que seja tarde demais! <br />
          <br />
          <button
            className='btnFirstMain'
            onClick={ handleClick }
          >
            CLIQUE PARA GARANTIR SUA VAGA COM VALOR EXCLUSIVO
          </button>
        </p>
      </div>
      <div className="containerFirstMain">
        <p className="contentFirstMain">
          <h1 className='titleFirstMain'>
            O que você vai aprender <br />
            dentro do <span style={ {color: '#ff6c00'} }>Agenciador 10x</span>
          </h1>
          Módulos e aulas 100% atualizadas para que você tenha <br />
          resultados o mais rápido possível. <br />
          <br />
          Aulas práticas e sem enrolação com estratégias que <br />
          podem ser aplicadas em poucas horas. <br />
          <br />
          Também temos o melhor suporte do mercado. <br />
          <br />
          Nós pegamos na sua mão e não largamos até você ter <br />
          resultados.
        </p>
        <img src={ tourImage } alt="Imagem sobre Turismo"  className='tourImage' />
      </div>
    </section>
  )
}

export default FirstMain;
