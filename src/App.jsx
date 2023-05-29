import { BrowserRouter, Routes, Route  } from "react-router-dom"
import { CitiesContext } from "./Context/CitiesContext.jsx"
import {TicketsContext} from './Context/TicketsContext.jsx'
import { HotelsContext } from "./Context/HotelsContext.jsx"
import { CitySelectedContext } from "./Context/CitySelectedContext.jsx"
import styled from "styled-components"
import HomePage from "./Pages/HomePage.jsx"
import TicketPage from "./Pages/TicketPage.jsx"
import { useState } from "react"
import HotelsPage from './Pages/HotelPage.jsx'


export default function App() {
  const [cities , setCities] = useState("")
  const [tickets, setTickets] = useState([])
  const [hotels, setHotels] = useState([])
  const [selectedCityId , setSelectedCityId] = useState(1)

  return (

    <TicketsContext.Provider value = {{tickets, setTickets}}>
    <CitiesContext.Provider value= {{cities , setCities}}>
    <HotelsContext.Provider value= {{hotels, setHotels}}>
    <CitySelectedContext.Provider value= {{selectedCityId, setSelectedCityId}}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" Component={HomePage} />
            <Route path="/tickets" Component={TicketPage}/>
            <Route path="/hotels" Component={HotelsPage}/>
          </Routes>
        </BrowserRouter>
        </CitySelectedContext.Provider>
    </HotelsContext.Provider>
  </CitiesContext.Provider>
  </TicketsContext.Provider>
  )
}

const PagesContainer = styled.main`
  background-color: #11172B;
  width: calc(100vw - 50px);
  min-height: 100dvh;
  padding: 25px;
`
