'use client'
import BannerVideo from './components/BannerVideo';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import * as S from './styles'

export default function Home() {
  return (
    <S.MainContainer>

      <Header />
      
      <S.VideoContainer>
        <BannerVideo src="/videos/video-banner2.mp4" />
        <S.Title>GN Detailing</S.Title>
      </S.VideoContainer>
     
      <S.Sobre id="sobre">
        <S.Indent>
            <S.ContainerSobre>
                <S.ImagemSobre src='/images/sobre.jpeg' width="853" height="1280" />
                <S.BoxText>
                  <h2>Sobre mim</h2>
                  <p>Com mais de 25 anos de experiência no setor de estética automotiva, minha jornada profissional tem sido dedicada à excelência e inovação. Sou formado em Processos Gerenciais e atuo como supervisor técnico em mais de 35 concessionárias no interior de São Paulo.</p>
                  <p>Minha carreira é marcada pela responsabilidade de introduzir e desenvolver novos materiais no mercado, além de formar e treinar novos profissionais na área. As técnicas que ensino e os métodos que desenvolvo para evitar desperdícios de materiais têm impactado positivamente a receita das empresas onde trabalho, melhorando a eficiência e a qualidade dos serviços prestados.</p>
                  <p>Sou palestrante em cursos profissionalizantes e também ofereço treinamentos específicos para vendedores, sempre buscando compartilhar conhecimento e elevar os padrões da indústria automotiva.</p>
                </S.BoxText>
            </S.ContainerSobre>
        </S.Indent>
      </S.Sobre>

      <S.Servicos id="servicos">
        <S.ContainerServicos>
          <S.BoxTextServicos>
            <h2>Serviços</h2>
            <S.ListaServicos>
              <li>Lavagem à Seco dos Bancos</li>
              <li>Lavagem à seco do Teto</li>
              <li>Lavagem à seco de Portas (Parte interna)</li>
              <li>Limpeza Interna Detalhada</li>
              <li>Instalação de PPF Completo</li>
              <li>Instalação de PPF Localizado</li>
              <li>Polimento Técnico Completo</li>
              <li>Polimento Técnico Localizado</li>
              <li>Vitrificação Completa</li>
              <li>Vitrificação de Faróis</li>
              <li>Restauração de Faróis</li>
            </S.ListaServicos>
          </S.BoxTextServicos>
          <S.ImagemServicos src='/images/bg-servicos.jpg' width="853" height="1280" />
        </S.ContainerServicos>
      </S.Servicos>

      <S.Treinamentos id="treinamentos">
        <S.ContainerTreinamentos>  
          <S.ImagemTreinamentos src='/images/polindo.jpeg' width="853" height="1280" />
          <S.BoxTextTreinamentos>
            <h2>Treinamentos<br /> Técnicos</h2>
            <S.ListaTreinamentos>
              <li>Lavagem à Seco dos Bancos</li>
              <li>Lavagem à seco do Teto</li>
              <li>Lavagem à seco de Portas (Parte interna)</li>
              <li>Limpeza Interna Detalhada</li>
              <li>Instalação de PPF Completo</li>
              <li>Instalação de PPF Localizado</li>
              <li>Polimento Técnico Completo</li>
              <li>Polimento Técnico Localizado</li>
              <li>Vitrificação Completa</li>
              <li>Vitrificação de Faróis</li>
              <li>Restauração de Faróis</li>
            </S.ListaTreinamentos>
          </S.BoxTextTreinamentos>
        </S.ContainerTreinamentos>
      </S.Treinamentos>

      <S.Servicos>
        <S.ContainerServicos>
          <S.BoxTextServicos>
            <h2>Treinamentos<br /> Comerciais</h2>
            <S.ListaServicos>
              <li>Abordagem</li>
              <li>Pós-venda</li>
              <li>Identificação de problemas, para propor soluções corretas</li>
              <li>Captação de serviços não explorados</li>
              <li>Qualidade no atendimento</li>
              <li>Métodos para atingir os resultados esperado</li>
              <li>Check-list</li>
            </S.ListaServicos>
          </S.BoxTextServicos>
          <S.ImagemServicos src='/images/explicando.jpeg' width="853" height="1280" />
        </S.ContainerServicos>
      </S.Servicos>

      <S.Contato id="contato">
        <S.Indent>
            <h3>Contato</h3>
            <Form />
        </S.Indent>
      </S.Contato>    

      <Footer />  
      
    </S.MainContainer>
  );
}
