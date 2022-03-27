import React from "react";
import axios from 'axios';
import { useEffect } from "react";
import styled from "styled-components"
import "./styles/style.css"

export default function ChairSelection(){

    const [chairs, setChairs] = React.useState([])

    useEffect( () => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/showtimes/24102021/seats');
        promise.then( (response) => {
            console.log(response.data)
            setChairs(response.data)})

        promise.catch(() => console.log("deu erro")) }  ,[]);

    return (
        <div> nada ainda</div>
    )}