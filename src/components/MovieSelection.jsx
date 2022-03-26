import "./styles/style.css"
import styled from "styled-components"

function MovieSelection(props){
    return(
        <Section>
            <Div>
                <h2>Selecione o filme</h2>
            </Div>
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

const Div = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8px;
    margin-bottom: 8px;`;

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

export default MovieSelection;