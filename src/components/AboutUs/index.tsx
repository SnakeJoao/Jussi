import { Container, Content, Title, ImageContainer, Image } from "./styles";

import JussiImage from "../../assets/image-jussi.png";

export function AboutUs() {
  return (
    <Container id="quem-somos">
      <Content>
        <Title>
          <h2>Olá, somos A Jüssi</h2>
          <p>
            A Jüssi é uma agência integrante do grupo global WPP que vem há 10
            anos consolidando o pensamento voltado para produtos e resolução de
            problemas. Nosso área dedicada exclusivamente para Produtos Digitais
            é organizada em 6 especialidades: Product Managamenet, User
            Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
          </p>
          <button> Conheça a Jüssi </button>
        </Title>
        <ImageContainer>
          <Image>
            <img src={JussiImage} alt="Jussi img" />
          </Image>
        </ImageContainer>
      </Content>
    </Container>
  );
}
