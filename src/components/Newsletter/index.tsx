import { Container, Content, Title } from "./styles";

export function Newsletter() {
  return (
    <Container>
      <Content>
        <Title>
          <h2>receba novidades da nossa área de produtos digitais.</h2>

          <div>
            <input type="email" placeholder="Digite seu e-mail" />
            <button>CADASTRAR</button>
          </div>
        </Title>
      </Content>
    </Container>
  );
}
