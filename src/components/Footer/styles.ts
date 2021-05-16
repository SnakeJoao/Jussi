import styled from 'styled-components';

export const Container = styled.footer`
  background: var(--black);
`;

export const Content = styled.div`
  max-width: 1210px;
  margin: auto;
  padding: 20px 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const LeftContent = styled.div`
  width: 30%;
  @media (max-width: 768px){
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const RightContent = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px){
    width: 100%;
  }

  svg {
    width:31px;
    height: 27px;
    color: var(--white);
  }
`;