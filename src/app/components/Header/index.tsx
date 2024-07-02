import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
        <S.Indent>
            <S.Container>
                <S.ContainerLogo>
                    <S.Logo src='/images/logo.png' width="64" height="64" alt='Logo Ecum Detailing' />
                </S.ContainerLogo>
                <S.Menu>
                  <li><a href='#sobre'>Sobre</a></li>
                  <li><a href='#sobre'>Serviços</a></li>
                  <li><a href='#sobre'>Treinamentos</a></li>
                  <li><a href='#sobre'>Galeria</a></li>
                  <li><a href='#sobre'>Contato</a></li>
                </S.Menu>
            </S.Container>
        </S.Indent>
    </S.Header>
  );
};

export default Header;
