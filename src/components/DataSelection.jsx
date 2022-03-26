import React from "react"
import styled from "styled-components"
import axios from "axios";
import { useEffect } from "react";
import "./styles/style.css"



export default function DataSelection(props){

    const [arrayMovieSections, setArrayMovieSections] = React.useState([])

    useEffect( () => {
        const promise  = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/1/showtimes`)
        promise.then( (response) => {
            setArrayMovieSections(response.data)})
    
            promise.catch( () => console.log(' Deu Erro ')) }   ,[] )

    if (arrayMovieSections.length !== 0){
        return(
            <Section>
                    <h2> Selecione o horário </h2>
                    {arrayMovieSections.map( secao => <OneMovieSection weekday={secao.weekday} date={secao.date} /> )}
            </Section>) }

    else{
        return(
            <div>.................</div>
        )
    }

}

function OneMovieSection(props){
    return(
            <div className="movie-section">
                <p> {props.weekday} - {props.date} </p>
                <div className="hours">
                    <article> 15:00 </article>
                    <article> 15:00 </article>
                    <article> 15:00 </article>
                    <article> 15:00 </article>
                    <article> 15:00 </article>
                </div>
            </div>)
}

const Section = styled.section`
        display: flex;
        flex-direction: column;
        width: 375px;
        height: 100%;
        margin-left: 28px;

        .movie-section{
            margin-bottom: 30px;
        }
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
        p{
            font-family: 'Roboto', sans-serif;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 23px;
            letter-spacing: 0.02em;
            text-align: left;
            color: #293845;
            margin-bottom: 15px;
        }
        .hours{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }           
        article{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 85px;
            height: 45px;
            border-radius: 5px;
            color: #fff;
            background-color: #E8833A;
            margin-right: 30px ;
            margin-bottom: 10px;
        }`;

