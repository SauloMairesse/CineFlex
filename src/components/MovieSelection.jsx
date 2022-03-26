import React from "react";
import "./styles/style.css"
import styled from "styled-components"
import axios from 'axios';
import { useEffect } from "react";

function MovieSelection(props){
    
    const [listaFilmes, setListaFilmes] = React.useState([])
    
    useEffect( () => {
            const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
            promise.then( (response) => {
                setListaFilmes(response.data)
                // console.log('Atualizou Lista De filmes')
                console.log(response.data)
            } )

            promise.catch(() => console.log("deu erro") )}
        ,[]);

        if(listaFilmes.length !== 0){
            return(
                <Section>
                    <h2>Selecione o filme</h2>
                    <div>
                        {listaFilmes.map( filme => <Img setNextScreen={props.setNextScreen} postMovie={filme.posterURL} /> )}
                    </div>
                </Section>)
        }
        else{
            return (
                <div>.............</div>
            )
        }
}

function Img(props){
    return(
        <img onClick={props.setNextScreen} src={props.postMovie}/>)
}

const Section = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 375px;
        height: 100%;

        h2{
            font-family: 'Roboto', sans-serif;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0.04em;
            text-align: center;
            color: #293845;
            margin: 40px 0 40px 0;
        }
        div{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            width: 100%;
        }
        img{
            object-fit: cover;
            width: 130px;
            height: 195px;
            margin-bottom: 40px;
            background-color: orange}`;

export default MovieSelection