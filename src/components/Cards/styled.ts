import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 247px;
  height: 285px;
  background: #fff;
  margin: 20px auto;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;


`


export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  img {
    width: 117px;
    height: 150px;
  }
`
export const CardTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 10px;

  h1 {
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    background: ${props => props.theme.colors.price};
    padding: 0.5rem;
    border-radius: 10px;
    color: #fff;
  }
`
export const CardDescription = styled.div`
  font-size: 10px;
  display: flex;
  width: 100%;
  align-items: center;
  
  margin: 1rem 0;

  p {
    font-size: .7rem;
    font-weight: 400;
    margin-left: .7rem;
    width: 100%;
  }

`
export const CardButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;

  font-size: 16px;
  font-weight: 500;

  button {
    width: 100%;
    height: 100%;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-end-end-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #0F52BA;
    transition: 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  span {
    margin-left: 10px;
  }
`


export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  max-width: 900px;
  margin: auto;

`