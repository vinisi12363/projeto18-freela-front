import styled from "styled-components";
import NavBar from '../Components/Navbar.jsx'
import HotelsBody from '../Components/Hotels/HotelsPage.body.jsx'

export  default function TicketPage(){

    return(
        <HomeContainer>
                   <NavBar></NavBar>
                   <HotelsBody></HotelsBody>
        </HomeContainer>
    )

}


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100dvh - 50px);
`

