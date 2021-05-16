import styled from 'styled-components';

export const Container = styled.section`
  background-color: var(--pink);
`
export const Content = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 120px;
  text-align: center;
  color: var(--white);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }

`
export const Title = styled.div`
  width: 65%;
  margin: 0 auto;

  h2 {
    text-transform: uppercase;
    margin: 20px 0 40px;
    font-size: 2rem;
    font-weight: bold;
  }

  p {
    font-weight: 500;
  }

  h3 {
    font-size: 2rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    width: 100%;

    h2 {
      font-size: 1.562rem;
    }
}
`