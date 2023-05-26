

import styled from "styled-components";
import { useState , } from "react";
import { Navigate } from 'react-router-dom';



export default function TicketBody() {

  const [selectedMinimalPrice, setSelectedMinimalPrice] = useState(0);
  const [selectedMaximunPrice, setSelectedMaxmimunPrice] = useState(0);
  const handlePriceChange = (event) => {
    setSelectedMinimalPrice(event.target.value);
  };
  const handleMaxchange = (event) => {
    setSelectedMaxmimunPrice(event.target.value);
  };
 
    return (
      <HomeBodyContainer>
        <PresentationDiv>
           <h1> passagens para Salvador </h1>
       </PresentationDiv>
        <div>
        <label >Faixa de Preço mínimo:</label>
        <input
          type="range"
          id="price_min"
          name="price_min"
          min="1"
          max="2000"
          step="10-1"
          value={selectedMinimalPrice}
          onChange={handlePriceChange}
        />
        <p>Valor selecionado: `R$ ${selectedMinimalPrice},00`</p>
       
        </div>
       
        <div>
        <label >Faixa de Preço máximo:</label>
        <input
          type="range"
          id="price_max"
          name="prince_max"
          min="1"
          max="2000"
          step="10-1"
          value={selectedMaximunPrice}
          onChange={handleMaxchange}
        />
        <p>Valor selecionado: `R$ ${selectedMaximunPrice},00`</p>
       
        </div>
       
  
    
      </HomeBodyContainer>
    );
  }






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
      max-width:50%;
      max-height:100px;
      background-color:#ebebeb;
      border-radius: 5px  ;
      border:4px black solid ;
      p {
          font-size: 22px;
          font-weight: 200;
          text-align: center;
          text-decoration: italic;
      }
  `;
const ButtonSelect = styled.button `
  
  color: #0abfbc;
  border: 20px solid;
  border-radius:50%;
  height:40px;
  width:40px;
`
const CustomSelect = styled.select `
    min-width:70%;
    min-height:50px;
    background:#d9d9d9;
    text-align:center;
    font-size:18;
    font-weight:400;
`

const HomeBodyContainer= styled.div `
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
    background-image : linear-gradient(to bottom, rgba(0,0,255,0.5),  rgba(245, 183, 39, 0.8)  ),
    url('https://assets3.thrillist.com/v1/image/3109501/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70');
    background-size: cover;
    overflow:hidden;
    min-width:100%;
    height: 100dvh;
    background-position: center;
    background-repeat: no-repeat;
`