import React from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components";
import ThemeSwitcher from './ThemeSwitcher'

export default function Navbar() {
    return (
        <Container style={{display: "flex"}}>
            <Link to="/">Home</Link>
            <span> | </span>
            <Link to="/about">About</Link>
            <span> | </span>
            <Link to="/API">API</Link>
            <span style={{alignSelf: "flex-end"}}><ThemeSwitcher /></span>
        </Container>

    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`

