import React from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieSelection from "./MovieSelection";
import DataSelection from "./DataSelection";
import ChairSelection from "./ChairSelection";

import styled from "styled-components"
import "./styles/reset.css"

export default function App(){

    const [nextScreen, setNextScreen] = React.useState(0)

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MovieSelection />} />
				<Route path="/section/:idFilme" element={<DataSelection />} />
                <Route path="/assentos/:idSessao" element={<ChairSelection />} />
            </Routes>
        </BrowserRouter>
    )
}
