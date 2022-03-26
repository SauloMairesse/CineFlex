import React from "react";
import Header from "./Header";
import MovieSelection from "./MovieSelection";
import DataSelection from "./DataSelection";
import styled from "styled-components"

export default function App(){

    const [nextScreen, setNextScreen] = React.useState(0)

    if(nextScreen === 0){
        return(
            <Main>
                <Header/>
                <MovieSelection setNextScreen={() => setNextScreen(1)}/>
            </Main>
        )}

    if(nextScreen === 1){
        return(
            <>
                <Header/>
                {/* <DataSelection setNextScreen={() => setNextScreen(2)}/> */}
                {/* <Footer movieName={}/> */}
            </>)}

    if(nextScreen === 2){
        return(
            <>
                <Header/>
                {/* <ChairSelection/>
                <Footer movieName={} dataMovie={} /> */}
            </>
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
    background-color: blue;
    `;