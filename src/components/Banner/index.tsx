import { Background, Container, Title, Image } from "./styles";

import BannerImg from "../../assets/Banner.png";

export function Banner() {
  return (
    <Background>
      <Container>
        <Title>
          <h1>Criamos lojas que vendem mais.</h1>
          <p>
            A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
            Precisa criar sua loja ou migrar de plataforma?
          </p>
          <button>Veja nossas soluções</button>
        </Title>
        <Image>
          <img src={BannerImg} alt="Products" />
        </Image>
      </Container>
    </Background>
  );
}
