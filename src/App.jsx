import { BrowserRouter, Routes, Route  } from "react-router-dom"

import styled from "styled-components"
import HomePage from "./Pages/HomePage.jsx"
// import TicketsPage from "./Pages/TicketPage.js"
// import HotelsPage from './Pages/HotelPage.js'


export default function App() {


  return (

        <BrowserRouter>
          <Routes>
            <Route exact path="/" Component={HomePage} />
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
