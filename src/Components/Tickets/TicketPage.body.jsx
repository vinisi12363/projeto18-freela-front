

import styled from "styled-components";
import { useState, } from "react";
import {Slider} from '@mui/material';
import HotelsContextHook from '../../Hooks/HotelsContext.Hook.jsx'
import CitiesContextHook from "../../Hooks/CitiesContext.Hook.jsx";
import TicketsContextHook from '../../Hooks/TicketsContext.Hook.jsx'
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SalvadorUrlBackGround = "https://revistaazul.voeazul.com.br/wp-content/uploads/2023/03/conheca-salvador-e-se-apaixone-pela-capital-baiana.jpeg"


export default function TicketBody() {
  const [value, setValue] = useState([1,3000]);
  const [airlines, setAirlines] = useState ([]);
  const [citiesList, setCitiesList] = useState([])
  const [especificAirline, setEspecificAirline] = useState("")
  const [especificCity, setEspecificCity] = useState("")
  const {tickets, setTickets} = TicketsContextHook()
  const {hotels, setHotels} = HotelsContextHook()
  const {cities} = CitiesContextHook()
  const navigate = useNavigate()

  let newQuery = {
    airline_name:"",
    destination_city_name:"",
    prices:[]
  }


  useEffect (()=>{

    const fecthData = async ()=>{
      const URL = `${import.meta.env.VITE_APP_API_URL}/home`
      const URL1 = `${import.meta.env.VITE_APP_API_URL}/airlines`
      const URL2 = `${import.meta.env.VITE_APP_API_URL}/tickets`
      try {
        const promise = axios.get(URL)
        promise.then(res => {
          setCitiesList([...res.data])
        })
        promise.catch(err => {
          console.log(err.message)
          
        })

        const require = axios.get(URL1)
        require.then(res => {
          setAirlines([...res.data])
        })
        require.catch(err => {
          console.log(err.message)
          
        })

        const require2 = axios.get(URL2)
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

        async function searchData(newQuery){
      const URL2 = `${import.meta.env.VITE_APP_API_URL}/tickets`
      const require2 = axios.post(URL2,newQuery)
      require2.then(res => {
        setTickets([...res.data])
      })
      require2.catch(err => {
        console.log(err.message)
        
      })
    }

 

  const handleAirlineSelection = (event) => {
    setEspecificAirline(event.target.value)
  };

  const handleCitySelection = (event) => {
    setEspecificCity(event.target.value)
  };


  const handleChange = (event, newValue) => {
  setValue(newValue);
  };
  const setQueryData = ()=>{

    const airline_id = Number(especificAirline);
   const destination_city_id = Number(especificCity);
    newQuery = {
      airline_id: airline_id,
      destination_city_id: destination_city_id,
      prices: value
    }
    searchData(newQuery);

  }
  const postCity = async(city_id)=>{
    try{

      const URL = `${import.meta.env.VITE_APP_API_URL}/hotels`
        const require = axios.post(URL, {city_id})
        require.then(res => {
          setHotels([...res.data])
          console.log(res.data)
         }) 
        require.catch(err => {
          console.log(err.message)
          
        })
        
     navigate('/hotels')    
    }catch(err){

      console.log(err)
    }



  }
  
  return (
    <HomeBodyContainer>
      <PresentationDiv>
        <p> passagens para {cities}</p>
      </PresentationDiv>

      <PanelContainer>
       
        <PriceContainer>
          <p>1- Escolha uma linha aérea:</p>
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
                value={data.airline_id}>
                {data.airline_name}
              </option>
              );
            })}

            
          </CustomSelect>
          <p>2- se quiser alterar o ponto de partida fique a vontade: </p>
          <CustomSelect
           key="destiny"
            name="Destinos"
            id="destiny"
            onChange={handleCitySelection}
          >
          
            {citiesList.map((data)=>{
            return(      
              <option  
                id={data.city_id} 
                value={data.city_id}>
                {data.city_name} - {data.city_uf}
              </option>
              );
            })}
          </CustomSelect>
        
          <p>3- por fim, adicione a faixa de valores desejada:</p>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="100"
            min={1}
            max={3000}
            sx={{
                
                width: 180,
                color: '#311b92',
                '& .MuiSlider-thumb': {
                  borderRadius: '50%',
                },
              }}

          />
          
          <button  onClick={setQueryData}>filter</button>

        </PriceContainer>
        
        <CardsContainer >
        {
          tickets.map((data)=>{
            return(
              <DivCard onClick={()=>{postCity(data.destination_city_id)}} key={data.flight_id}>
              <h3>{data.airline_name}</h3>
              <p>{data.departure_time.slice(0, 10)}</p>
              <p>{data.destination_city_name}</p>
              <p>{data.price}</p>
            </DivCard>
            );
           
          })
        }
       
        </CardsContainer>
      
      </PanelContainer>

    </HomeBodyContainer>
  );
}


const CardsContainer = styled.div`
  overflow-y: hidden;
  margin-left: 10px;
  display: flex; 
  flex-wrap: wrap;
  width: 100%;
  height: 800px;
  background: linear-gradient(to bottom, transparent, rgba(176, 190, 197));
  :hover {
    cursor: pointer;
  }
`


const DivCard = styled.div`
    margin-left: 20px;
    margin-top:10px;
    margin-right:5px;
    border-radius:10px;
    border:3px #030221 solid;
    background-color:#1a237e;
    min-height:100px; 
    h3{
      color:white;  
    } 
    p{
    
      font-weight:700;
      font-size:14px;
      color:white;   

    }
    
  `
const PanelContainer = styled.div`
    display: flex;
    flex-direction: rows;
    margin-top:20px;
    max-width:75%;
   
    border-radius:5px;
   

`

const PriceContainer = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #5c6bc0;
     align-items: center;
    height:490px;
    min-width:250px;
    border-radius:5px;
    border:3px solid;
    margin-top:10px; 
    button{
      margin-top:45px;
      font-size:22px;
      font-weight:bold;
      background: #3949ab;
      border: 2px solid;
      border-radius:5px;
      height:40px;
      width:100px; 
    }
    p{
      color:white;
      font-weight:bold;
      font-size:16px;
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

const CustomSelect = styled.select`
    margin-top:10px;
    margin-left:10px;
    margin-bottom:35px;
    min-width:70%;
    min-height:50px;
    background:#d9d9d9;
    text-align:center;
    font-size:18;
    font-weight:400;
`

const HomeBodyContainer = styled.div`
   
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