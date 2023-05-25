import styled from 'styled-components'

export  default function  Navbar() {
    return (
        <NavBar>
            <h1>  Viagens Alucinantes </h1>
        </NavBar>
    )
}


const NavBar = styled.div`
    display:flex;
    min-height:30px;
    justify-content:center;
    min-width:100%;
    background-color: #11172B;
    color:#FFFFFF;

`

