import React from "react";
import axios from 'axios';
import { useEffect } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components"
import "./styles/style.css"

import Header from "./Header";

export default function MovieSelection(props){
    
    const [listaFilmes, setListaFilmes] = React.useState([])
    let idFilme;

    useEffect( () => {
            const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
            promise.then( (response) => {
                console.log(response.data)
                setListaFilmes(response.data)})

            promise.catch(() => console.log("deu erro")) }  ,[]);

        if(listaFilmes.length !== 0){
            return(
                <Main>
                    <Header/>
                    <Section>
                        <h2>Selecione o filme</h2>
                        <div>
                            {listaFilmes.map( filme => <Link to={`/section/${idFilme=filme.id}`}> <Img   postMovie={filme.posterURL}/> </Link> )}
                        </div>
                    </Section>
                </Main>)
        }
        else{
            return (
                <div>.............</div>
            )
        }
}

function Img(props){
    return(
        <img src={props.postMovie}/>
        )}

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

const Main = styled.main`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
`;
