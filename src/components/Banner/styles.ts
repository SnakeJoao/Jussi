import styled from 'styled-components'

export const Background = styled.div`
  width: 100%;
  background-color: var(--green);
`
export const Container = styled.div`
  max-width: 1440px;
  max-height: 560px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
  margin: 0 auto;
`
export const Title = styled.div`
  width: 40%;
  padding: 20px;

  h1 {
    font-weight: 500;
    font-size: 64px;
    line-height: 77px;
    text-transform: uppercase;

    width: 451px;
    height: 231px;
    top: 0px;

    @media (max-width: 1080px) {
      width: 460px;
      height: 226px;
    }

    @media (max-width: 768px) {
      height: 120px;
      line-height: inherit;
    }

    @media (max-width: 425px) {
      width: 400px;
    }

    @media (max-width: 375px) {
      width: 350px;
      height: 180px;
    }

    @media (max-width: 320px) {
      width: 300px;
    }

    margin: 10px 0;

    position: relative;

    &::before {
      content: '//';
      position: absolute;
      left: -75px;
      color: var(--white);
    }
  }

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin: 10px 0;
    padding: 0 108px 0 0;
  }

  button {
    font-size: 1rem;
    font-weight: 500;
    color: var(--black);
    background: none;
    display: block;
    border: 1px solid;
    border-radius: 6px;
    text-align: center;
    width: 196px;
    height: 48px; 
    margin:30px 0;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;

    h1 {
      font-size: 45px;
    }

  }


`
export const Image = styled.div`
  width: 35%;

  @media (max-width: 768px) {
    display: none;
  }

  img {
    width: 100%;
  }
`
