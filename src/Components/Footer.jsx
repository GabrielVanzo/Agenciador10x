import logoGVStudio from '../images/logoGVStudio.png'

const Footer = () => {
  return (
    <footer>
      <section>
        <p className='contentFooter'>
          Este site não faz parte do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. <br />
          <br />
          Usamos cookies de remarketing neste site para nos comunicarnmos novamente com as pessoas que visitam nosso site e garanti que <br />
          possamos alcançá-las no futuro com mensagens e informações relevantes. O Facebook mostra nossos anúncios na internet para <br />
          ajudar a comunicar nossa mensagem e alcançar as pessoas certas que mostraram interesse em nosso conteúdo no passado.
        </p>
        <span className='copyright'>MixMKT • Todos os direitos reservados 2023 © • Desenvolvido por</span>
        <img src={ logoGVStudio } alt="Logo GV Studio" />
      </section>
    </footer>
    
  )
}

export default Footer;
