import React from "react";
import axios from 'axios';
import { useEffect } from "react";
import styled from "styled-components"
import "./styles/style.css"

export default function ChairSelection(){

    const [chairs, setChairs] = React.useState([])

    useEffect( () => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/showtimes/161/seats');
        promise.then( (response) => {
            setChairs(response.data)})
        promise.catch(() => console.log("deu erro")) }  ,[]);

    if(chairs !== 0){
        return (
            <Section>
                <h2> Selecione o(s) assento(s) </h2>
                <div className="seats-options">
                    <article> 01 </article>
                    <article> 02 </article>
                    <article> 03 </article>
                    <article> 04 </article>
                    <article> 05 </article>
                    <article> 06 </article>
                    <article> 07 </article>
                    <article> 08 </article>
                    <article> 09 </article>
                    <article> 10 </article>
                    <article> 11 </article>
                    <article> 12 </article>
                    <article> 13 </article>
                    <article> 14 </article>
                    <article> 15 </article>
                    <article> 16 </article>
                    <article> 17 </article>
                    <article> 18 </article>
                    <article> 19 </article>
                    <article> 20 </article>
                    <article> 21 </article>
                    <article> 22 </article>
                    <article> 23 </article>
                    <article> 24 </article>
                    <article> 25 </article>
                    <article> 26 </article>
                    <article> 27 </article>
                    <article> 28 </article>
                    <article> 29 </article>
                    <article> 30 </article>
                    <article> 31 </article>
                    <article> 32 </article>
                    <article> 33 </article>
                    <article> 34 </article>
                    <article> 35 </article>
                    <article> 36 </article>
                    <article> 37 </article>
                    <article> 38 </article>
                    <article> 39 </article>
                    <article> 40 </article>
                    <article> 41 </article>
                    <article> 42 </article>
                    <article> 43 </article>
                    <article> 44 </article>
                    <article> 45 </article>
                    <article> 46 </article>
                    <article> 47 </article>
                    <article> 48 </article>
                    <article> 49 </article>
                    <article> 40 </article>
                    <article> 41 </article>
                    <article> 42 </article>
                    <article> 43 </article>
                    <article> 44 </article>
                    <article> 45 </article>
                    <article> 46 </article>
                    <article> 47 </article>
                    <article> 48 </article>
                    <article> 49 </article>
                    <article> 50 </article>
                </div>
                <div className="stata-seat">
                    <span className="selected">
                        <article> </article>
                        
                    </span>
                </div>
            </Section>
        )
    }
    else{
        return(
            <div> Pohaaa</div>
        )}
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
    `;