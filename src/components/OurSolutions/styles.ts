import styled from 'styled-components';


export const Container = styled.section`
  padding: 50px;

  @media (max-width: 768px) {
    padding: 20px ;
  }
`
export const Content = styled.div`
  max-width: 1210px;

  padding: 20px 60px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`
export const Title = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  line-height: 40px;
  margin-bottom: 25px;

  &::before {
    content: '//';
    display: inline-block;
    color: var(--green);
    margin-right: 10px;
  }
`
export const SolutionContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }

`
export const SolutionContent = styled.div`
  width: 23%;

  border: 1px solid var(--grey);
  border-radius: 4px;

  padding: 20px;

  h4 {
    font-weight: 500;
    font-size: 1rem;
    margin: 16px 16px;;
  }

  p {
    font-weight: 500;
    font-size: 0.75rem;
    margin: 16px 16px;

    color: var(--pink);
  }

  ul {
    margin-left: 28px;

    li {
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--dark-grey);
      padding-bottom: 4px;
    }
  }

  button {
    font-size: 1rem;
    font-weight: 500;
    display: block;
    width: 95%;
    height: 48px;

    background-color: var(--green);

    border: none;
    border-radius: 6px;
    margin: 20px auto;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }

`
export const RoundTitle = styled.div`
  font-weight: 500;
  background-color: var(--grey);
  width: 100px;
  height: 100px;
  border-radius: 50%;

  font-size: 2rem;
  text-align: center;
  line-height: 3;
  margin: 10px 10px 50px 10px;
`