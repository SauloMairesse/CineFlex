import "./styles/style.css"
import styled from "styled-components"
import axios from 'axios';

function MovieSelection(props){

    
    return(
        <Section>
            <H2>Selecione o filme</H2>
            <Div className="movie-selection">
                <div onClick = { props.setNextScreen } className="img">filmes</div>
                <div className="img">filmes</div>
            </Div>
        </Section>)}

const Section = styled.section`
        display: flex;
        flex-direction: column;
        width: 90%;
        height: 100%;
        background-color: blue;
        margin: 0 10% 0 10%;`;

const H2 = styled.h2`
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: center;
        color: #293845;
        margin: 40px 0 40px 0;`;

const Div = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 130px;
    height: 195px;
    background-color: orange;`;


// const Section = styled.section`
//         display: flex;
//         flex-wrap: nowrap;
//         width: 375px;
//         justify-content: space-between;
//         padding: 0 28px 0 28px;
//     .img{ 
//         height: 193px;
//         width: 129px;
//         background-color: burlywood;
//         margin-bottom: 27px;}`;

export default MovieSelection