import { BrowserRouter, Routes, Route  } from "react-router-dom"

import styled from "styled-components"
import HomePage from "./Pages/HomePage.jsx"
 import TicketPage from "./Pages/TicketPage.jsx"
// import HotelsPage from './Pages/HotelPage.jsx'


export default function App() {


  return (

        <BrowserRouter>
          <Routes>
            <Route exact path="/" Component={HomePage} />
            <Route path="/tickets" Component={TicketPage}/>
          </Routes>
        </BrowserRouter>

   
  )
}

const PagesContainer = styled.main`
  background-color: #11172B;
  width: calc(100vw - 50px);
  min-height: 100dvh;
  padding: 25px;
`
