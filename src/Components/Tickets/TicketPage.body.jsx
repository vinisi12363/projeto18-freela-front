

import styled from "styled-components";
import { useState, } from "react";
import {Slider} from '@mui/material';
import htl1 from '../../Assets/images/HotelImages/Salvador/htl1.png'
import CitiesContextHook from '../../Hooks/CitiesContext.Hook.jsx'
import TicketsContextHook from '../../Hooks/TicketsContext.Hook.jsx'
import { useEffect } from "react";
import axios from "axios";


const SalvadorUrlBackGround = "https://revistaazul.voeazul.com.br/wp-content/uploads/2023/03/conheca-salvador-e-se-apaixone-pela-capital-baiana.jpeg"


export default function TicketBody() {
  const [value, setValue] = useState([1, 3000]);
  const [airlines, setAirlines] = useState ([]);
  const [especificAirline, setEspecificAirline] = useState("")
  const {tickets, setTickets} = TicketsContextHook()
  const {cities} = CitiesContextHook()
  const [selectedMinimalPrice, setSelectedMinimalPrice] = useState(0);
  const [selectedMaximunPrice, setSelectedMaxmimunPrice] = useState(0);
  
  useEffect (()=>{

    const fecthData = async ()=>{
      const URL1 = `${import.meta.env.VITE_APP_API_URL}/airlines`
      const URL2 = `${import.meta.env.VITE_APP_API_URL}/tickets`
      try {
        const require = await axios.get(URL1)
        require.then(res => {
          setAirlines([...res.data])
        })
        require.catch(err => {
          console.log(err.message)
          
        })

        const require2 = await axios.get(URL2)
        require2.then(res => {
          setTickets([...res.data])
        })
        require2.catch(err => {
          console.log(err.message)
          
        })
  
      }catch(err){console.log("error in effect tickets", err)}
    
    }
    fecthData()
    
  }, [])
  const handleAirlineSelection = (event) => {
   
    setEspecificAirline(event.target.value)
  };


      const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
    <HomeBodyContainer>
      <PresentationDiv>
        <p> passagens para {cities}</p>
      </PresentationDiv>

      <PanelContainer>
       
        <PriceContainer>
        <form  >
          <CustomSelect
            key="airlines"
            name="airlines"
            id="airlines"
            onChange={handleAirlineSelection}
          >
           
            {airlines.map((data)=>{
            return(      
              <option  
                id={data.airline_id} 
                value={data.airline_name}>
                {data.airline_name}
              </option>
              );
            })}
          </CustomSelect>

        
        </form>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={1}
            max={3000}
          />
          <button type="submit" >filter</button>

        </PriceContainer>
        
        <CardsContainer>
        {
          tickets.map((data)=>{
            <divCard key={data.flight_id}>
              <h3>{data.airline_name}</h3>
              <p>{data.destination_city_name}</p>
              <p>{data.price}</p>
            </divCard>
          })
        }
       

        </CardsContainer>
      
      </PanelContainer>



    </HomeBodyContainer>
  );
}

const AirlineSelector = styled.select `





`
const CardsContainer = styled.div`
    
      
     display:flex; 
     flex-wrap:wrap;
  
  
  `

const divCard = styled.div`
    margin-left: 20px;
    margin-top:10px;
    margin-right:5px;
    p{
      position:relative;
      left:260px;
      bottom:60px;
      font-weight:700;
      font-size:22px;
      color:black; 
      transition: transform 0.3s ease;

      transition: scale(1.1); 
    }
    img{
        width:350px;
        border:3px solid;
        border-radius:6px;
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    img:hover{

      transform: scale(1.1);
    }

  `
const PanelContainer = styled.div`
    display: flex;
    flex-direction: rows;
    margin-top:20px;
    width:75%;
    justify-content: space-between;
    background-color: linear-gradient(to bottom, gray, transparent);
    border-radius:5px;
   // border: 2px solid gray;

`

const PriceContainer = styled.div`
  display:flex;
 flex-direction: column;
 background-color: lightgray;
 height:490px;
 width:30%;
 border-radius:5px;
 border:1px solid;
 margin-top:10px; 
 button{
  margin-left: 35px;
  border:1px solid;  
 }

`


const FormContainer = styled.div`
  background-color:transparent;
  min-width:75%;
  form{
   justify-content:space-between;
  }
`



const PresentationDiv = styled.div`
      margin-top:25px;
      display: flex;
      min-width:80%;
      max-height:100px;
      background-color:#ebebeb;
      border-radius: 5px  ;
      border:4px black solid ;
      align-items:center;
      p { 
          margin-left:35%;
          font-size: 45px;
          font-weight: 700;
          text-align: center;
          text-decoration: italic;
      }
  `
const ButtonSelect = styled.button`
  
  color: #0abfbc;
  border: 20px solid;
  border-radius:50%;
  height:40px;
  width:40px;
`
const CustomSelect = styled.select`
    min-width:70%;
    min-height:50px;
    background:#d9d9d9;
    text-align:center;
    font-size:18;
    font-weight:400;
`

const HomeBodyContainer = styled.div`
    button{
      position:relative;
      left:20%;
      margin-top:20px;
      background: #0abfbc;
      border:0.5px #b8d9c8 solid;
      border-radius:50%;
      height:60px;
      width:60px; 
      font-weight:700;
    }
    display: flex;
    background-color: #8dbdeb;
    align-items:center; 
    flex-direction:column;
    background-image : linear-gradient(to bottom, lightgray, transparent),
    url(${SalvadorUrlBackGround});
    background-size: cover;
    overflow:hidden;
    min-width:100%;
    height: 100dvh;
    background-position: center;
    background-repeat: no-repeat;
`