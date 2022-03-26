import styled from "styled-components"

export default function Header(){
  return( 
    <Div>
        <h1>CINEFLEX</h1>
    </Div>)  
}

const Div = styled.div`
      display: flex;
      justify-content: center;
      width: 100%;
      background: #C3CFD9;

      h1{
        font-family: 'Roboto', sans-serif;
        font-size: 34px;
        font-style: normal;
        font-weight: 400;
        line-height: 40px;
        letter-spacing: 0em;
        text-align: center;
        color: #E8833A;
      }`;
