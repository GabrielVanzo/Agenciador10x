import video1 from '../video/video1.mp4';
import video2 from '../video/video2.mp4';
import handleClick from "../utils/function";

const SecondMain = () => {
  return (
    <section className='secondMain'>
      <h1 className='titleCardsMain'>
        + de <span style={ {color: '#ff6c00'} }>1.000</span> membros lucrando todos os meses
      </h1>
      <section className='cardsContainer'>
        <div className='card'>
          <video className='video' src={ video1 } controls>
            <p>Your browser doesn't support HTML5 video. Here is a <a href={ video1 }>link to the video</a> instead.</p>
          </video>
        </div>
        <div className='card'>
        <video className='video' src={ video2 } controls>
          <p>Your browser doesn't support HTML5 video. Here is a <a href={ video2 }>link to the video</a> instead.</p>
        </video>
        </div>
      </section>
      <p><b>Poderia ser você, mas você não acredita</b></p>
      <button
        className='btnSecondMain'
        onClick={ handleClick }  
      >
        QUERO SER O PRÓXIMO A MANDAR DEPOIMENTO
      </button>
    </section>
  )
}

export default SecondMain;

/* <span style={{ backgroundColor: 'purple' }}>❌</span> */