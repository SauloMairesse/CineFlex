import React from "react";
import Header from "./Header";
import MovieSelection from "./MovieSelection";
import DataSelection from "./DataSelection";
import styled from "styled-components"
import "./styles/reset.css"




export default function App(){
    let movieName;
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
            <Main>
                <Header/>
                <DataSelection/>
            </Main>)}

    // if(nextScreen === 2){
    //     return(
    //         <>
    //             <Header/>
    //             <ChairSelection/>
    //             <Footer movieName={} dataMovie={} />
    //         </>
    //     )}

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