import React, { useEffect, useState } from 'react'
import StyledHeader from "./styledComponents/StyledHeader"
import { Link } from "react-router-dom"
import styled from "styled-components";

export default function Header() {

    const MusicControl = styled.button`
    background-color: #4b5c8d;
    color: #F7B900;
    font-weight: 2rem;
    font-size:20px;
    border-color: #F7B900;
    border-radius: 20%;
    &:hover {
      background-color: #172251;
      color:#72CD55;
    }
    `;

    const [audio, setAudio] = useState([]);

    useEffect(() => {
        setAudio(new Audio("/Frank Sinatra - Santa Claus Is Comin' to Town (Audio).mp3"));
    }, []);

    const Buttons = styled.div`
    align-self: flex-end;
    `;

    const play = () => {
        audio.play();
    };

    const stop = () => {
        audio.pause();
    };

    return (
        <StyledHeader>
            <ul className="lightrope">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <Link to="/">
                Bored Busters
            </Link>
            <Buttons>
                <MusicControl onClick={play}>Play!</MusicControl>{" "}
                <MusicControl onClick={stop}>Stop!</MusicControl>
            </Buttons>
        </StyledHeader>
    )
}
