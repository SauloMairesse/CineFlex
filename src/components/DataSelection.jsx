import React from "react"
import styled from "styled-components"
import axios from "axios";
import { useEffect } from "react";
import "./styles/style.css"
import { Link, useParams } from "react-router-dom";
import Header from "./Header";



export default function DataSelection(props){

    const {idFilme} = useParams()
    const [arrayMovieSections, setArrayMovieSections] = React.useState([])
    let idSessao = "ID_DA_SESSAO"

    useEffect( () => {
        const promise  = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        promise.then( (response) => {
            console.log(response.data)
            setArrayMovieSections(response.data)   })
            
            promise.catch( () => console.log(' Deu Erro ')) }   ,[])

    if (arrayMovieSections.length !== 0){
        return(
            <Main>
                <Header />
                <Section>
                        <h2> Selecione o horário </h2>
                        {arrayMovieSections.days.map( movieSection => <FilmSection   weekday={movieSection.weekday} 
                                                                                date={movieSection.date}
                                                                                setNextScreen={props.setNextScreen}
                                                                                arrayTeste={horinhas(movieSection.showtimes,idSessao)}/> )}
                </Section>
                <Footer>
                    <img src={arrayMovieSections.posterURL} />
                    <h3>{arrayMovieSections.title}</h3>
                </Footer>
            </Main>) }
    else{
        return(
            <div>.................</div>
        )}
}

function FilmSection(props){
    return(
        <div className="movie-section">
                <p> {props.weekday} - {props.date} </p>
                <div className="show-times">
                    {props.arrayTeste}
                </div>
            </div>)
}
function horinhas(showtimes,idSessao){
    const horasDisponiveis = showtimes; 
    return(
        <>
            {horasDisponiveis.map( horadisponivel => <Link to={`/assentos/${idSessao = horadisponivel.id}`}> <Article   showtimes={horadisponivel.name} /> </Link> )}
        </>)
}
function Article(props){
    return(
        <article> <span>{props.showtimes}</span> </article>  )
}

const Section = styled.section`
        display: flex;
        flex-direction: column;
        width: 375px;
        height: 100%;
        margin-left: 28px;
        margin-bottom: 117px;
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
            margin: 40px 0 40px 0;        }   
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
        }
        span{
            text-decoration: none;
        }
        .show-times{
            display: flex;
        }`;
const Footer = styled.footer`
        display: flex;
        align-items: center;
        width: 100%;
        height: 117px;
        padding: 0 0 0 20px ;
        border-top: 1px solid #9EADBA;
        background-color: #DFE6ED; 
        position: fixed;
        bottom: 0;
        img{
            object-fit: cover;
            width: 48px;
            height: 72px;
            border-radius: 2px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            margin-right: 20px;
        }
        h3{
            font-family: 'Roboto', sans-serif;
            font-size: 26px;
            font-style: normal;
            font-weight: 400;
            line-height: 30px;
            letter-spacing: 0em;
            text-align: left;
            color: #293845;
        }`;
const Main = styled.main``;
