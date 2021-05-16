import styled from 'styled-components';

export const Container = styled.section`
  background: rgb(242,242,242);
  background: linear-gradient(270deg, rgba(242,242,242,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
`
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1330px;
  margin: 0 auto; 
`

export const Title = styled.div`
  width: 45%;
  padding: 50px 120px;
  background-color: var(--white);

  h2 {
    font-weight: 700;
    font-size: 2rem;
    text-transform: uppercase;
    width: 45%;
    margin: 0 0 20px;
  }

  p {
    font-weight: 500;
    max-width: 240px;
    line-height: 24px;
  }

  button {
    font-size: 1rem;
    font-weight: 500;
    color: var(--black);
    background: transparent;
    display: block;
    border: 1px solid;
    border-radius: 6px;
    text-align: center;
    width: 162px;
    height: 48px;
    margin: 20px 0;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 768px) {
    width: 100%; 
    padding: 50px 20px;

    h2 {
      width: 100%;
      max-width: 100%;
    }

    p {
      width: 100%;
      max-width: 100%;
    }
  }

`
export const ImageContainer = styled.div`
  width: 55%;

  @media (max-width: 768px) {
    width: 100%; 
    background: var(--grey);
  }
 
`

export const Image = styled.div`
  width: 100%;
  max-width: 676px;
  height: auto;
  margin: 40px 0;
  margin-left: -70px;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`