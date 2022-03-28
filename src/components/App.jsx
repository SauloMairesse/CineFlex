import React from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieSelection from "./MovieSelection";
import DataSelection from "./DataSelection";
import ChairSelection from "./ChairSelection";

import styled from "styled-components"
import "./styles/reset.css"

export default function App(){
    let movieName;
    const [nextScreen, setNextScreen] = React.useState(0)

    if(nextScreen === 0){
        return(
            <BrowserRouter>
                <Main>
                    <Header/>
                    <MovieSelection setNextScreen={() => setNextScreen(1)}/>
                </Main>
            </BrowserRouter>
        )}

    if(nextScreen === 1){
        return(
            <Main>
                <Header/>
                <DataSelection setNextScreen={ () => setNextScreen(2) }/>
                {/* <Footer></Footer> */}
            </Main>)}

    if(nextScreen === 2){
        return(
            <Main>
                <Header/>
                <ChairSelection/>
                {/* <Footer movieName={} dataMovie={} /> */}
            </Main>
        )}

    // if( ){
    //     return(
    //         <>
    //             <Header/>
    //             <CheckingCopy/>
    //         </>
    //     )}
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* background-color: blue; */
    `;