import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;

  form {
    position: relative;
    width: 100%;

    @media(max-width: 768px) {
      width: 94%;
    }
  }

  input {
    font-size: 1rem;
    font-weight: 500;
    border: 1px solid var(--grey);
    border-radius: 24px;
    padding: 10px;
    width: 100%;
    box-sizing: content-box;

    &::placeholder{
      color: var(--pink);
    }
  }

  button {
    position: absolute;
    right: 0;
    top: 7px;
    border: none;
    background: none;
    cursor: pointer;

    svg {
      width: 20px;
      height: 25px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`