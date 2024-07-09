import * as S from './styles'

const Footer = () => {
  return (
    <>
      <S.Footer>
        <S.Indent>
          <S.ContainerFooter>
            <S.Box>
              <h5>Entre em contato</h5>
              <a href='https://wa.me/5519988018718'><S.SocialMidia src='/images/icons/whatsapp.png' width="50" height="50" /> (19) 98801-8718</a>
              <a href='mailto:gleibson_horizonte@hotmail.com'><S.SocialMidia src='/images/icons/email.png' width="50" height="50" /> gleibson_horizonte@hotmail.com</a>
            </S.Box>
            <S.Box>
              <h5>Redes sociais</h5>
              <div>
                <a href='https://www.instagram.com/gleibson.nascimento.10/' target='_blank'><S.SocialMidia src='/images/icons/instagram.png' width="50" height="50" /></a>
                <a href='https://www.linkedin.com/in/gleibson-horizonte-a-alves-do-nascimento-92512874/' target='_blank'><S.SocialMidia src='/images/icons/linkedin.png' width="50" height="50" /></a>
              </div>
            </S.Box>
          </S.ContainerFooter>
        </S.Indent>
      </S.Footer>
      <S.Tarja>
          &copy; Todos os Direitos Reservados GN Detailing - 2024 <br />
          Desenvolvido por <a href="https://www.linkedin.com/in/felipe-marcelino/" target='_blank'>Felipe Marcelino</a>
      </S.Tarja>
    </>
  );
};

export default Footer;
