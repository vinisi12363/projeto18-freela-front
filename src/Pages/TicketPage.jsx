import styled from "styled-components";
import NavBar from '../Components/Navbar.jsx'
import TicketBody from '../Components/Tickets/TicketPage.body.jsx'

export  default function TicketPage(){

    return(
        <HomeContainer>
                   <NavBar></NavBar>
                   <TicketBody></TicketBody>
        </HomeContainer>
    )

}


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100dvh - 50px);
`




