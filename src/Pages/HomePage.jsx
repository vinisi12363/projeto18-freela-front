import styled from "styled-components";
import NavBar from '../Components/Navbar.jsx'
import HomeBody from '../Components/HomePage.body.jsx'

export  default function HomePage(){

    return(
        <HomeContainer>
                   <NavBar></NavBar>
                   <HomeBody></HomeBody>
        </HomeContainer>
    )

}


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100dvh - 50px);
`




