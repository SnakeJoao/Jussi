import styled from 'styled-components'

export const Container = styled.section`
  background-color: var(--grey) ;
`

export const Content = styled.div`
  max-width: 1295px;
  max-height: 560px;


  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  padding: 20px 60px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }

`
export const LeftContent = styled.div`
  width:25%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;

    span{
      transform: rotate(90deg);
    }
  }
`
export const RightContent = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Logo = styled.div`
  
  &:nth-child(2),
  &:nth-child(1) {
    padding-top: 10px;
  }

  img {
    width: 100%;
  }

  @media (max-width: 1024px) {
    margin: 10px 0;
    width: 20%;
  }

  @media (max-width: 425px) {
    margin: 10px 20px;
    width: 34%;
  }
`