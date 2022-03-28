import React from "react";
import axios from 'axios';
import { useEffect } from "react";
import styled from "styled-components"
import "./styles/style.css"
import Header from "./Header";
import { Link, useParams } from "react-router-dom";

export default function ChairSelection(){

    const {idSessao} = useParams()
    const [chairs, setChairs] = React.useState([])

    useEffect( () => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then( (response) => {
            console.log(response.data)
            setChairs(response.data)})
        promise.catch(() => console.log("deu erro")) }  ,[]);

    if(chairs.length !== 0){
        return (
            <Main>
                <Header/>
                <Section>
                    <h2> Selecione o(s) assento(s) </h2>
                    <div className="seats-options">
                        {chairs.seats.map( chair => <Article    name={chair.name}
                                                                isAvailable={`${chair.isAvailable}`}    /> )}
                    </div>
                    <span className="selected">
                        <div className="example">
                            <article className="selecionado"> </article>
                            <p>Selecionado</p>
                        </div>
                        <div className="example">
                            <article className="true"> </article>
                            <p>Disponivel</p>
                        </div>
                        <div className="example">
                            <article className="false"> </article>
                            <p>Indisponível</p>
                        </div>
                    </span>
                </Section>
            </Main>
        )
    }
    else{
        return(
            <div> .............. </div>
        )}
}

function Article(props){
    return(
        <article className={props.isAvailable}> {props.name} </article>
    )
}

function choice(){

}

const Section = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 375px;
        height: 100%;
        background-color: greenyellow;
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
        .seats-options{
            display: flex;
            justify-content: space-between;
            width: 360px;
            background-color: #fff;
            padding-bottom: 20px;
            flex-wrap: wrap; 
            gap: 7px;
        }
        article{
            display: flex;
            height: 26px;
            width: 26px;
            border-radius: 12px;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
            font-size: 11px;
            font-family: 'Roboto', sans-serif;
            border: 1px solid #808F9D;
            background-color: #C3CFD9;
        }
        span{
            display: flex;
            justify-content: space-around;
            width: 375px;
            /* background-color: #293845; */
        }
        .example{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center ;
        }
        .selecionado{
            background-color: #8DD7CF;
            border: 1px solid #1AAE9E
        }
        .false{
            border: 1px solid #F7C52B;
            background-color: #FBE192;
        }   
    `;

const Main = styled.main`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
`;
