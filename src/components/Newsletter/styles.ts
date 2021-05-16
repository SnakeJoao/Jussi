import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--black);
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 120px;
  text-align: center;
  color: var(--white);

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const Title = styled.div`
  width: 65%;
  margin: 0 auto;

  h2 {
    text-transform: uppercase;
    margin: 20px 0 40px;
    font-size: 2rem;
    font-weight: 700;
    padding: 0 40px;

    &::before {
      content: "//";
      color: var(--green);
      margin-right: 15px;
    }
  }

  h3 {
    font-size: 2rem;
    font-weight: normal;
  }

  div {
    position: relative;
    width: 65%;
    margin: 0 auto;
  }

  input {
    font-weight: 500;
    background: none;
    border: none;
    border-bottom: 1px solid var(--green);
    padding: 10px;
    width: 100%;
    color: var(--white);

    &:focus {
      outline: none;
    }
    
    &::placeholder {
      color: var(--white);
    }

  }

  button {
    font-weight: 700;
    background: none;
    border: none;
    color: var(--green);
    position: absolute;
    top: 10px;
    right: 0;

    @media (max-width: 320px) {
      right: -20px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    h2 {
      font-size: 1.562rem;
      padding: 0 18px;
    }

    form{ 
      width: 100%;
    }
  }
`;
