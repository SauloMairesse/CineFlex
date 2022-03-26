import styled from "styled-components"

export default function Header(){
  return( 
        <H1>CINEFLEX</H1>
        )  
}

const H1 = styled.h1`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 60px;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-size: 34px;
      font-weight: 400;
      line-height: 40px;
      letter-spacing: 0em;
      background: #C3CFD9;
      color: #E8833A;`;
