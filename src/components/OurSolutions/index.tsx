import {
  Container,
  Content,
  Title,
  SolutionContainer,
  SolutionContent,
  RoundTitle,
} from "./styles";

export function OurSolutions() {
  return (
    <Container id="nossas-solucoes">
      <Content>
        <Title>Nossas soluções</Title>
        <SolutionContainer>
          <SolutionContent>
            <RoundTitle>P1</RoundTitle>
            <h4>Nome do Produto #1</h4>
            <p>Descrição do produto #1</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button>Ver solução</button>
          </SolutionContent>
          <SolutionContent>
            <RoundTitle>P2</RoundTitle>
            <h4>Nome do Produto #2</h4>
            <p>Descrição do produto #2</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button>Ver solução</button>
          </SolutionContent>
          <SolutionContent>
            <RoundTitle>P3</RoundTitle>
            <h4>Nome do Produto #3</h4>
            <p>Descrição do produto #3</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button>Ver solução</button>
          </SolutionContent>
          <SolutionContent>
            <RoundTitle>P4</RoundTitle>
            <h4>Nome do Produto #4</h4>
            <p>Descrição do produto #4</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button>Ver solução</button>
          </SolutionContent>
        </SolutionContainer>
      </Content>
    </Container>
  );
}
