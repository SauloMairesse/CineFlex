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
    const [userName, setUserName] = React.useState('');
    const [userCPF, setUserCPF] = React.useState('')

    const [cadeiras, setCadeiras] = React.useState([]);

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
                        {chairs.seats.map( chair => <Button name={chair.name}
                                                            isAvailable={`${chair.isAvailable}`}
                                                            chairID={chair.name}/>)}
                    </div>
                    <span className="selected">
                        <div className="example">
                            <Button name={''}
                                    isAvailable={'selecionado'}/>
                            <p>Selecionado</p>
                        </div>
                        <div className="example">
                            <Button name={''}
                                    isAvailable={'true'}/>
                            <p>Disponivel</p>
                        </div>
                        <div className="example">
                            <Button name={''}
                                    isAvailable={'false'}/>
                            <p>Indisponível</p>
                        </div>
                    </span>
                </Section>
                <Formulario>
                    <form>
                        <span>Nome do comprador:</span>
                        <input type="text" value={userName} placeholder={'Digite seu nome'} onChange={ (u) => setUserName(u.target.value)} />
                        <span>CPF do Comprador</span>
                        <input type="text" value={userCPF} placeholder={'Digite seu CPF'} onChange={ (a) => setUserCPF(a.target.value)} />
                    </form>
                </Formulario>
                <Footer>
                    <img src={chairs.movie.posterURL} />
                    <div>
                        <h3> {chairs.movie.title} </h3>
                        <h4> {chairs.day.weekday} - {chairs.name} </h4>
                    </div>
                </Footer>
            </Main>
        )
    }
    else{
        return(
            <div> .............. </div>
        )}
}

let array =[]

function Button(props){

    return(
        <button onClick={ (e) =>    
            {                       if(e.target.className === 'true'){
                                    e.target.className = 'selecionado'
                                    array.push(e.target.id)
                                    console.log(array)}
                                    else if(e.target.className === 'selecionado'){
                                        array.filter(umaCadeira => umaCadeira !== e.target.id)
                                        console.log(array)
                                        e.target.className = 'true'}
                                    else{alert('NÃO SENTÁRAS NA CADEIRA DOS OUTROS, IRMÃO !')}
                                }} 
                className={props.isAvailable}
                id={props.chairID}> {props.name} </button>
    )
}

// CSS --------------

const Formulario = styled.section`
        display: flex;
        flex-direction: column;
        width: 375px;
        height: 200px;
        margin-bottom: 117px;
        background-color: blueviolet;
    input{
        border: none;
        margin-left: 15px;
        margin-bottom: 10px;
        height: 50px;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
    }
    span{
        display: flex;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
        color: #293845;
        margin-bottom: 10px;
    }
`;

const Section = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 375px;
        height: 100%;
        margin-bottom: 40px;
        background-color: #F7C52B;
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
        span{
            display: flex;
            justify-content: space-around;
            width: 375px;
            background-color: #293845;
        }
        button{
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
        }   `;

const Main = styled.main`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        background-color: brown;
`;

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
        h3, h4{
            font-family: 'Roboto', sans-serif;
            font-size: 26px;
            font-style: normal;
            font-weight: 400;
            line-height: 30px;
            letter-spacing: 0em;
            text-align: left;
            color: #293845;
        }`;