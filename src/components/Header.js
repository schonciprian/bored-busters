import React from 'react'
import StyledHeader from "./styledComponents/StyledHeader"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <StyledHeader>
            <Link to="/">
                Bored Busters
            </Link>
            
        </StyledHeader>
    )
}
