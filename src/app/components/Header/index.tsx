import * as S from './styles'

const Header = () => {
  
  const handleScroll = (section: string) => {
    const elementDOM = document.getElementById(section);
   
    const headerDOM = document.getElementById('header');

    const elementPosition = elementDOM?.getBoundingClientRect().top;

    if (!elementDOM || !headerDOM || !elementPosition) return;
    
    const offsetPosition = elementPosition + window.pageYOffset - headerDOM.getBoundingClientRect().height;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
  
  return (
    <S.Header id="header">
        <S.Indent>
          <S.Container>
            <S.ContainerLogo>
              <S.Logo src='/images/logo.png' width="64" height="64" alt='Logo Ecum Detailing' />
            </S.ContainerLogo>
            <S.Menu>
              <li><button type='button' onClick={() => { handleScroll('sobre') }}>Sobre</button></li>
              <li><button type='button' onClick={() => { handleScroll('servicos') }}>Serviços</button></li>
              <li><button type='button' onClick={() => { handleScroll('treinamentos') }}>Treinamentos</button></li>
              {/* <li><button type='button' href='#sobre'>Galeria</button></li> */}
              <li><button type='button' onClick={() => { handleScroll('contato') }}>Contato</button></li>
            </S.Menu>

          <S.Hamburger className="open">
            <div></div>
          </S.Hamburger>
          </S.Container>
        </S.Indent>
      </S.Header>
  );
};

export default Header;
