import logoWhatsBtn from '../images/logoWhatsBtn.png'

const Help = () => {
  return (
    <section className="help">
      <p style={ {fontSize: '23px'} }><b>Se você chegou até aqui e ainda não se decidiu...</b></p>
      <p>Me chama no <b>Whatsapp</b> para eu saber como posso te ajudar</p>
      <a href="https://api.whatsapp.com/send?phone=5514998770703">
        <button className='btnWhats'>
          <img
            src={ logoWhatsBtn }
            alt="Logo Whats"
            className='whatsIcon'
          />
          Chamar no Whatsapp
        </button>
      </a>
      
    </section>
  )
}

export default Help;
